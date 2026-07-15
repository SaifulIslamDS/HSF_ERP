param(
  [Parameter(Mandatory = $false)]
  [string]$Target = (Get-Location).Path,

  [Parameter(Mandatory = $false)]
  [switch]$Force
)

$ErrorActionPreference = "Stop"
$PatchRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$OverlayRoot = Join-Path $PatchRoot "overlay"
$TargetRoot = (Resolve-Path $Target).Path
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupRoot = Join-Path $TargetRoot ".hsf-patch-backup\v0.1.5-$Timestamp"

function Assert-Exists([string]$RelativePath) {
  $Path = Join-Path $TargetRoot $RelativePath
  if (-not (Test-Path $Path)) {
    throw "Target does not look like HSF ERP. Missing: $RelativePath"
  }
}

function Backup-IfExists([string]$Destination, [string]$RelativePath) {
  if (Test-Path $Destination) {
    $BackupPath = Join-Path $BackupRoot $RelativePath
    $BackupDirectory = Split-Path -Parent $BackupPath
    New-Item -ItemType Directory -Path $BackupDirectory -Force | Out-Null
    Copy-Item -Path $Destination -Destination $BackupPath -Recurse -Force
  }
}

function Set-PackageVersion([string]$PackagePath) {
  $FullPath = Join-Path $TargetRoot $PackagePath
  $Package = Get-Content $FullPath -Raw | ConvertFrom-Json
  $Package.version = "0.1.5"
  $Package | ConvertTo-Json -Depth 100 | Set-Content -Path $FullPath -Encoding utf8
}

Write-Host "HSF ERP v0.1.5 patch" -ForegroundColor Green
Write-Host "Target: $TargetRoot"

Assert-Exists "package.json"
Assert-Exists "apps\web\package.json"
Assert-Exists "apps\web\src\app\layout.tsx"

$Catalogue = Join-Path $TargetRoot "apps\web\src\lib\portal-catalog.ts"
if (-not (Test-Path $Catalogue)) {
  Write-Warning "The v0.1.4 portal catalogue was not found. The patch can still be copied for inspection, but the intended baseline is v0.1.4."
  if (-not $Force) {
    $Answer = Read-Host "Continue anyway? Type YES"
    if ($Answer -ne "YES") { throw "Patch cancelled." }
  }
}

$OverlayFiles = Get-ChildItem -Path $OverlayRoot -File -Recurse
foreach ($File in $OverlayFiles) {
  $Relative = $File.FullName.Substring($OverlayRoot.Length).TrimStart([char[]]"\/")
  $Destination = Join-Path $TargetRoot $Relative
  Backup-IfExists $Destination $Relative
  New-Item -ItemType Directory -Path (Split-Path -Parent $Destination) -Force | Out-Null
  Copy-Item -Path $File.FullName -Destination $Destination -Force
  Write-Host "Applied: $Relative"
}

Backup-IfExists (Join-Path $TargetRoot "package.json") "package.json"
Backup-IfExists (Join-Path $TargetRoot "apps\web\package.json") "apps\web\package.json"
Set-PackageVersion "package.json"
Set-PackageVersion "apps\web\package.json"

Write-Host ""
Write-Host "Patch applied. Backup directory:" -ForegroundColor Green
Write-Host $BackupRoot
Write-Host ""
Write-Host "Run validation:" -ForegroundColor Cyan
Write-Host "pnpm install --frozen-lockfile"
Write-Host "pnpm verify:structure"
Write-Host "pnpm verify:sensitive"
Write-Host "pnpm format:check"
Write-Host "pnpm lint"
Write-Host "pnpm typecheck"
Write-Host "pnpm test:run"
Write-Host "pnpm --filter @hsf/web build"

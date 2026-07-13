param(
  [Parameter(Mandatory = $false)]
  [string]$RepoPath = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PatchRoot = Join-Path $PSScriptRoot "repo-overlay"

if (-not (Test-Path (Join-Path $RepoPath "package.json"))) {
  throw "The target is not the HSF_ERP repository: $RepoPath"
}

if (-not (Test-Path (Join-Path $RepoPath "apps\web\package.json"))) {
  throw "apps/web/package.json was not found: $RepoPath"
}

Write-Host "Applying HSF ERP v0.1.1 Executive UI patch..." -ForegroundColor Cyan

Get-ChildItem -Force $PatchRoot | ForEach-Object {
  Copy-Item $_.FullName -Destination $RepoPath -Recurse -Force
}

foreach ($file in @(
  (Join-Path $RepoPath "package.json"),
  (Join-Path $RepoPath "apps\web\package.json")
)) {
  $content = Get-Content $file -Raw
  $content = $content -replace '"version"\s*:\s*"0\.1\.0"', '"version": "0.1.1"'
  Set-Content -Path $file -Value $content -Encoding utf8
}

Write-Host "Patch applied." -ForegroundColor Green
Write-Host "Run the validation commands in PATCH-NOTES.md." -ForegroundColor Yellow

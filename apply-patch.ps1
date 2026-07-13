param(
  [Parameter(Mandatory = $false)]
  [string]$RepoPath = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$PatchRoot = Join-Path $PSScriptRoot "repo-overlay"

if (-not (Test-Path (Join-Path $RepoPath "package.json"))) {
  throw "The target does not look like the HSF_ERP repository: $RepoPath"
}

if (-not (Test-Path (Join-Path $RepoPath "apps\web\package.json"))) {
  throw "apps/web/package.json was not found in: $RepoPath"
}

Write-Host "Applying HSF ERP v0.1.3 Codex documentation stack..." -ForegroundColor Cyan

Get-ChildItem -Force $PatchRoot | ForEach-Object {
  Copy-Item $_.FullName -Destination $RepoPath -Recurse -Force
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($file in @(
  (Join-Path $RepoPath "package.json"),
  (Join-Path $RepoPath "apps\web\package.json")
)) {
  if (Test-Path $file) {
    $content = [System.IO.File]::ReadAllText($file)
    $content = [regex]::Replace(
      $content,
      '"version"\s*:\s*"[^"]+"',
      '"version": "0.1.3"',
      1
    )
    [System.IO.File]::WriteAllText($file, $content, $utf8NoBom)
  }
}

Write-Host "Patch applied successfully." -ForegroundColor Green
Write-Host ""
Write-Host "Next:" -ForegroundColor Yellow
Write-Host "  cd `"$RepoPath`""
Write-Host "  git status --short"
Write-Host "  pnpm format"
Write-Host "  pnpm verify:structure"
Write-Host "  pnpm verify:sensitive"
Write-Host "  pnpm format:check"

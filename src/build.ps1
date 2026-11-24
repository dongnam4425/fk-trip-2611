# src/template.html + src/trip-data.js 를 합쳐 index.html 을 만든다. (Python 없이 PowerShell 만으로)
# Motion 라이브러리는 지금 index.html 안에 들어 있는 것을 그대로 다시 쓴다.
# 사용법: powershell -ExecutionPolicy Bypass -File src/build.ps1  [motion.js 경로(선택)]
param([string]$MotionPath)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$out = Join-Path (Split-Path -Parent $root) "index.html"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$t = [IO.File]::ReadAllText((Join-Path $root "template.html"), $utf8).Replace("`r`n", "`n")
$seed = [IO.File]::ReadAllText((Join-Path $root "trip-data.js"), $utf8).Replace("`r`n", "`n")
if ($MotionPath) {
  $motion = [IO.File]::ReadAllText($MotionPath, $utf8).Replace("</script", "<\/script")
} else {
  $idx = [IO.File]::ReadAllText($out, $utf8).Replace("`r`n", "`n")
  $open = "<div id=`"root`"></div>`n<script>"
  $a = $idx.IndexOf($open); if ($a -lt 0) { throw "index.html 에서 Motion 스크립트를 찾지 못했습니다" }
  $a += $open.Length
  $b = $idx.IndexOf("</script>`n<script>`n{", $a); if ($b -lt 0) { throw "index.html 에서 Motion 스크립트 끝을 찾지 못했습니다" }
  $motion = $idx.Substring($a, $b - $a)
}
$mark = "<script>/*MOTION*/</script>"
$i = $t.IndexOf($mark); $t = $t.Substring(0, $i) + "<script>" + $motion + "</script>" + $t.Substring($i + $mark.Length)
$j = $t.IndexOf("/*SEED*/"); $t = $t.Substring(0, $j) + $seed + $t.Substring($j + 8)
[IO.File]::WriteAllText($out, $t, $utf8)
Write-Output "index.html 생성 완료"

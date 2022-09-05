@ECHO OFF

:: windows_runs_standStat.cmd
:: It launchs standStat.cjs

ECHO Hello from windows_runs_standStat.cmd


systeminfo
node -v
npm -v

cd %~dp0
pwd
node standStat.cjs --port 2022 --directory public



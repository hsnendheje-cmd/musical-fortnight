@echo off
cd /d "%~dp0"
frida -l ac_bridge.js -l omni.obf.js "AnimalCompany.exe"
pause

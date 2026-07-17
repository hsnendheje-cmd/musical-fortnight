@echo off
cd /d "%~dp0"
frida -l ac_bridge.js -l omni.ts "EACLauncher.exe"
pause

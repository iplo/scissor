@echo off
cls
goto main
set /p pkg=Install: 
echo.
if exist "pkgs/%pkg%"(
goto installsetup
)
goto fail

:fail
echo Sorry that package does not exist.
echo.
echo Press any key to exit
pause>nul
exit

:installsetup
set /p ver=Version: 
echo is this right?: %pkg%/%ver%/%pkg%.js
set dir=%pkg%/%ver%/%pkg%.js
set /p itrq=

if %itrq% == "Y" goto entersetup
if %itrq% == "N" (
echo Please name the file or folder (extra directorys to %pkg%/%ver%/) you wish to use:
set /p extradir=
set dir=%pkg%ver%/%extradir%
goto entersetup
)

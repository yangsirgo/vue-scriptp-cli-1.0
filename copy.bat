@echo off

set dir=E:\VSA\VSACODE\front-end\vsaportal


xcopy dist\gdui\css "%dir%\js\plugins\gdui\css"  /e/r/h/y
xcopy dist\gdui\js "%dir%\js\plugins\gdui\js"  /e/r/h/y
xcopy dist\gdui\images "%dir%\js\plugins\gdui\images"  /e/r/h/y
echo.
echo.
echo �������,�밴������˳�...
pause>nul
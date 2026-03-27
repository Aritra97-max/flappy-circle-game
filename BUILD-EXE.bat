@echo off
echo ================================
echo  BUILDING FLAPPY CIRCLE EXE
echo ================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed!
    echo Please install Python from https://www.python.org/
    pause
    exit /b 1
)

echo [1/3] Installing PyInstaller...
pip install pyinstaller

echo.
echo [2/3] Building executable...
pyinstaller --onefile --noconsole --add-data "game-standalone.html;." --name "FlappyCircle" --icon=NONE flappy_circle_launcher.py

echo.
echo [3/3] Copying game file to dist folder...
copy game-standalone.html dist\

echo.
echo ================================
echo  BUILD COMPLETE!
echo ================================
echo.
echo Your executable is ready at:
echo   dist\FlappyCircle.exe
echo.
echo To share with friends:
echo   1. Copy FlappyCircle.exe
echo   2. Copy game-standalone.html
echo   3. Keep them in the same folder
echo.
pause

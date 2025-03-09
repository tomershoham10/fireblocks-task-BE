@echo off
:: Build and start Node.js project

echo Building the project...
npm run build

:: Check if the build was successful
if %ERRORLEVEL% NEQ 0 (
    echo Build failed. Please check the error messages above.
    pause
    exit /b 1
)

echo Starting the project...
npm start

echo Project started successfully.
pause

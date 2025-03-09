@echo off
:: Setup for Node.js project

echo Setting up the project...

:: Step 1: Clone the repository
echo Cloning the repository...
git clone https://github.com/tomershoham10/fireblocks-task-BE.git
cd fireblocks-task-BE

:: Step 2: Install Node.js dependencies
echo Installing dependencies...
npm install

:: Step 3: Create a .env file
echo Creating .env file...
echo Add your environment variables here! > .env

:: Step 4: Provide instructions for adding environment variables
echo Please open the .env file in a text editor and add your environment variables (PORT (set as 8080 or leave blank), PRIVATE_KEY (wallet key), CONTRACT_ADDRESS (deployed address))
echo Make sure to save the file after editing.

:: Step 5: Run the project
echo Starting the project...
npm start

echo Project setup complete.
pause

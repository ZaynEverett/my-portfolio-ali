@echo off
REM Change to the project directory
cd /d "d:\Ali Ahmed\Portfolio ali ahmed"

REM Check if node_modules already exists
if exist node_modules (
    echo Dependencies already installed. Starting dev server...
    npm run dev
) else (
    echo Installing dependencies. This may take a few minutes...
    npm install &&  (
        echo.
        echo Dependencies installed successfully!
        echo Starting dev server...
        npm run dev
    ) || (
        echo.
        echo Error during npm install.
        echo Try running: npm install
        pause
    )
)

cd ..

call npm run build
call npm run deploy

set /p message=Enter commit message: 

call git add .
call git commit -m "%message%"
call git push

pause
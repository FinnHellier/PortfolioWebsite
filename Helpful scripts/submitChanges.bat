cd ..
npm run build
npm run deploy

set /p message=Enter commit message:

git add .

git commit -m "%message%"
git push

pause
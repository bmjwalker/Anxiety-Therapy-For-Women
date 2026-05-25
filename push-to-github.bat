@echo off
cd /d "c:\Users\jenni\OneDrive\yoga website"
"C:\Program Files\Git\bin\git.exe" init
"C:\Program Files\Git\bin\git.exe" add .
"C:\Program Files\Git\bin\git.exe" config user.email "user@example.com"
"C:\Program Files\Git\bin\git.exe" config user.name "User"
"C:\Program Files\Git\bin\git.exe" commit -m "Initial commit"
"C:\Program Files\Git\bin\git.exe" branch -M main
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/bmjwalker/Anxiety-Therapy-For-Women.git
"C:\Program Files\Git\bin\git.exe" push -u origin main
pause

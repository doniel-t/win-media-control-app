@ECHO off

if not "%1"=="" (
    cd %1
) 

pip install -r requirements.txt
uvicorn main:app --reload --port 4339 --host 0.0.0.0


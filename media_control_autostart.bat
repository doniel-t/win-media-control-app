:: change the serverDirectory to the path where your server files are (including trailing \)
SET serverDirectory=Path/to/server/files
SET scriptName=startup_script.bat
SET startupScriptPath=%serverDirectory%%scriptName%

CALL %startupScriptPath% %serverDirectory%
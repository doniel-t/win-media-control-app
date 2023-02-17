# Media Control Server ⏯️
Listens to API requests (in local network) which triggers the corresponding media action in Windows.\
You can access the server via the ``ip of your device on your network`` *or* if you have a DNS like a router via the ``hostname`` of your device 

<br>


## How it works 👍
The API is listening to ``localhost:4339/media_controls/{key}`` and the key maps to a constant ``MEDIA_ACTIONS`` which invokes a function that presses the virtual key it was assigned to

Example: 
```py
# gets invoked when localhost:4339/media_controls/next is called 
# and triggers the windows action to skip to the next song
MEDIA_ACTIONS['next']() 
```
Currently it supports only ``play_pause``, ``next``, ``prev``, ``mute``, ``volume_up``, ``volume_down`` however you can add any virtual key from the [Microsoft docs](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)


<br>

## Setup 🚀

**requirements:** ``Python 3`` and ``pip``

Simply run the ``startup_script.bat`` which installs the needed dependencies and runs the Server on port 4339.\
You can ``configure`` the port and host in the startup script if you want to\
Its also **recommended** to create a script that runs this script on startup.  

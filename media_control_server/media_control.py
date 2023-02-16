import win32api
import win32con


def __press_media_key(key):
    return lambda: win32api.keybd_event(key, 0)
        

#changes volume by 6% instead of 2% for better UX
def __change_volume(key):

    def closure(key): 
        for _ in range(3):
            win32api.keybd_event(key, 0)

    return lambda: closure(key)


MEDIA_ACTIONS = {
    'play_pause' : __press_media_key(win32con.VK_MEDIA_PLAY_PAUSE),
    'next' : __press_media_key(win32con.VK_MEDIA_NEXT_TRACK),
    'prev' : __press_media_key(win32con.VK_MEDIA_PREV_TRACK),
    'mute' : __press_media_key(win32con.VK_VOLUME_MUTE),
    'volume_up' : __change_volume(win32con.VK_VOLUME_UP),
    'volume_down': __change_volume(win32con.VK_VOLUME_DOWN)
}
"""
This dict maps a key to the following media key press on windows
Example usage:
```
#simulate the key press to switch to the next song in the playlist
MEDIA_ACTIONS['next']()
```
"""



import win32api

MEDIA_KEYS_HEX = {
    'play/pause' : 0xB3,
    'next' : 0xB0,
    'prev' : 0xB1
}

def press_media_control_key(key):
    win32api.keybd_event(key, 0)


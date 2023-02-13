import win32api
import win32con


MEDIA_KEYS_HEX = {
    'play_pause' : win32con.VK_MEDIA_PLAY_PAUSE,
    'next' : win32con.VK_MEDIA_NEXT_TRACK,
    'prev' : win32con.VK_MEDIA_PREV_TRACK,
    'volume_up' : win32con.VK_VOLUME_UP,
    'volume_down' : win32con.VK_VOLUME_DOWN,
    'mute' : win32con.VK_VOLUME_MUTE
}


def press_media_control_key(key):
    is_volume_change = key == win32con.VK_VOLUME_UP or key == win32con.VK_VOLUME_DOWN
    if not (is_volume_change):
        win32api.keybd_event(key, 0)
    else:
        #change volume by 6% instead of 2% for better UX
        for _ in range(3):
            win32api.keybd_event(key, 0)

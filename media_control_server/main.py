from media_control import press_media_control_key, MEDIA_KEYS_HEX
from fastapi import FastAPI


if __name__ == 'main':
    print('starting server')
    app = FastAPI()

    @app.get("/media_controls/{control_key}")
    def play(control_key):
        try:
            print(control_key)
            press_media_control_key(MEDIA_KEYS_HEX[control_key])
            return {
                "message": f"pressed {control_key}",
                "status" : 200
            }
        except:
            available_endpoints = list(MEDIA_KEYS_HEX.keys())
            return {
                "status": 400,
                "message": f"A normal request looks like this: hostname:port/media_controls/endpoint \nYou can try the following endpoints: {available_endpoints}"
                }

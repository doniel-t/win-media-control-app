from media_control import press_media_control_key, MEDIA_KEYS_HEX
from fastapi import FastAPI


if __name__ == 'main':
    print('starting server')
    app = FastAPI()

    @app.get("/play")
    def greet_user():
        try:
            press_media_control_key(MEDIA_KEYS_HEX['play/pause'])
            return {
                "message": f"pressed pause/resume",
                "status" : 200
            }
        except:
            return {"status": 400}


    @app.get("/prev")
    def greet_user():
        try:
            press_media_control_key(MEDIA_KEYS_HEX['prev'])
            return {
                "message": f"playing previous song",
                "status" : 200
            }
        except:
            return {"status": 400}


    @app.get("/next")
    def greet_user():
        try:
            press_media_control_key(MEDIA_KEYS_HEX['next'])
            return {
                "message": f"playing next song",
                "status" : 200
                }
        except:
            return {"status": 400}


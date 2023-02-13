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
            return {"status": 400}

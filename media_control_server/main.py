from media_control import MEDIA_ACTIONS
from fastapi import FastAPI


app = FastAPI()

@app.get("/media_controls/{key}")
def use_media_key(action_key):
    try:
        MEDIA_ACTIONS[action_key]()
        return {
            "message": f"pressed {action_key}",
            "status" : 200
        }
    except:
        available_endpoints = list(MEDIA_ACTIONS.keys())
        return {
            "status": 400,
            "message": f"A normal request looks like this: hostname:port/media_controls/endpoint \nYou can try the following endpoints: {available_endpoints}"
            }

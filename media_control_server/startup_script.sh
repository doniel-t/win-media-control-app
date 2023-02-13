#!/bin/bash
pip install -r requirements.txt
uvicorn main:app --reload --port 4339
# Request-Header-Parser-API - Flask version

**This is a Flask version of the same API.**

An API that will return a JSON object with the user's IP address, browser language, and operating system.

Another little project where I was practicing with the HTTP module rather than Express, but I used other little modules to parse the headers I needed.

This is one of the [Free Code Camp API projects](https://www.freecodecamp.com/challenges/request-header-parser-microservice). 

## To run Flask version locally

It's best to run a Flask app in a virtualenv. From root folder (assuming you already have Python and virtualenv installed):

```
virtualenv venv
. venv/bin/activate
pip install Flask
export FLASK_APP=server.py
flask run
```

Then navigate to `localhost:5000` in your browser.

To stop server, press `Ctrl-D` (MacOS/Linux) or `Ctrl-Z` & `Enter` (Windows). Then stop virtualenv with `deactivate`.
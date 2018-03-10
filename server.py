from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/api/whoami')
def whoami():
    response_dict = {
        "ipaddress": request.remote_addr,
        "language": request.headers["Accept-Language"].split(';')[0].split(',')[0],
        "software": request.headers["User-Agent"].split('(')[1].split(')')[0],
    }
    return jsonify(response_dict)

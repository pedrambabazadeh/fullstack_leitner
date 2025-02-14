from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/home", methods = ['GET'])
def return_home():
    return jsonify({
        'message' : "This is Backend"
    })


if __name__ == "__main__":
    app.run(debug = True)
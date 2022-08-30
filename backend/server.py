from flask import Flask, request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

client = MongoClient("localhost", 27017)

db = client.todo_db
todos = db.todos


@app.route("/test")
def test():
    return "App is working perfectly"


@app.route("/save", methods=["POST"])
def save():
    data = request.json.get("data")
    todos.insert_one({"data": data})
    return "Data saved successfully"


@app.route("/todo_list", methods=["GET"])
def todo_list():
    return {"todo_list": list(todos.find({}, {"_id": 0}))}


if __name__ == "__main__":
    app.run(debug=True)

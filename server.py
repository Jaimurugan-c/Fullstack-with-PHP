from flask import Flask, request, jsonify
import json

app = Flask(__name__)
filename = "data.json"

@app.route("/", methods=["GET", "POST"])
def tasks():
    if request.method == "POST":
        task = request.form["task"]
        try:
            with open(filename, "r") as file:
                tasks = json.load(file)
        except:
            tasks = []
        tasks.append(task)
        with open(filename, "w") as file:
            json.dump(tasks, file)
        return "Task added successfully!"

    with open(filename, "r") as file:
        return jsonify(json.load(file))

if __name__ == "__main__":
    app.run(debug=True, port=5000)

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load trained model and scaler
model = joblib.load("isolation_forest.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    features = np.array([[
        data["transaction_amount"],
        data["transaction_hour"],
        data["transaction_count"],
        data["location_distance"]
    ]])

    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)

    result = "Anomaly" if prediction[0] == -1 else "Normal"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)

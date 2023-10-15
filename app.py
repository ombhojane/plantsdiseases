import os
import gradio as gr
import requests
from flask import Flask, render_template, request

app = Flask(__name__)

API_URL = "https://api-inference.huggingface.co/models/ombhojane/healthyPlantsModel"
HEADERS = {"Authorization": "Bearer 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"}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' in request.files:
        image = request.files['image'].read()
        response = requests.post(API_URL, headers=HEADERS, data=image)
        prediction = response.json()  # Parse the JSON response

        # Pass the predictions to the HTML template
        return render_template('index.html', prediction=prediction)
    
    return render_template('index.html', prediction=None)


if __name__ == '__main__':
    app.run(debug=True)

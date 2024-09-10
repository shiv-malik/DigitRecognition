from flask import Flask, request, jsonify
from model import trainModel, trainConv
from scipy import stats
from flask_cors import CORS
import tensorflow as tf, numpy as np, matplotlib.pyplot as plt, cv2, os

modelName = 'model.keras'
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})



def whiteBackgroundColor(image):
    return (stats.mode([
        stats.mode([image[0][i] for i in range(28)]).mode,
        stats.mode([image[27][i] for i in range(28)]).mode, 
        stats.mode([image[i][0] for i in range(28)]).mode,
        stats.mode([image[i][27] for i in range(28)]).mode
    ])).mode == 255
    

def preProcess(file):
    imageArr = np.frombuffer(file.read(), np.uint8)
    image = cv2.imdecode(imageArr, 0)
    if whiteBackgroundColor(image):
        image = np.invert(np.array([image]))
    image = tf.keras.utils.normalize(image, axis = 1).reshape(1, 28, 28)
    
    return image


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file path"})

    file = request.files['file']
    image = preProcess(file)
    prediction = model.predict(image)

    return jsonify({"result": int(np.argmax(prediction))})


if __name__ == "__main__":
    if not os.path.isfile(modelName):
        trainConv(modelName)

    model = tf.keras.models.load_model(modelName)
    app.run(debug=True, port=8080)
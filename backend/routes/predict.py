from flask import Blueprint, request, jsonify
from model.predictor import Predictor
from config import Config
from pydantic import BaseModel, ValidationError
from typing import Literal

predict_bp = Blueprint('predict', __name__)
predictor = Predictor(Config.MODEL_PATH)

class InputData(BaseModel):
    Age: int
    Sex: Literal['M', 'F']
    ChestPainType: Literal['ATA', 'NAP', 'ASY', 'TA']
    RestingBP: int
    Cholesterol: int
    FastingBS: int
    RestingECG: Literal['Normal', 'ST', 'LVH']
    MaxHR: int
    ExerciseAngina: Literal['Y', 'N']
    Oldpeak: float
    ST_Slope: Literal['Up', 'Flat', 'Down']

@predict_bp.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = InputData(**request.json)
    except ValidationError as e:
        return jsonify({'error': e.errors()}), 400

    prediction, probability = predictor.predict(input_data.dict())
    return jsonify({'prediction': prediction, 'probability': probability})

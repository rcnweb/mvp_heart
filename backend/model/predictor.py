import joblib
from sklearn.pipeline import Pipeline
import pandas as pd

class Predictor:
    def __init__(self, model_path):
        self.model = joblib.load(model_path)
        self.columns = ['Age', 'Sex', 'ChestPainType', 'RestingBP', 'Cholesterol', 'FastingBS',
                        'RestingECG', 'MaxHR', 'ExerciseAngina', 'Oldpeak', 'ST_Slope']

    def predict(self, data: dict):
        # Garantir que os dados estão na ordem correta
        df = pd.DataFrame([data], columns=self.columns)
        pred = self.model.predict(df)[0]
        prob = self.model.predict_proba(df)[0][pred]
        return int(pred), float(prob)

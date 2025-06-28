import os

class Config:
    DEBUG = True
    MODEL_PATH = os.getenv('MODEL_PATH', 'model/modelo_svm_heart.pkl')
    HEART_PATH = os.getenv('HEART_PATH', 'model/heart.csv')
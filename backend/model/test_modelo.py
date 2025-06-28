import joblib
import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from config import Config

def carregar_modelo():
    """Carrega o modelo treinado da pasta model."""

    print(f"🔄 Carregando modelo a partir de: {Config.MODEL_PATH}")
    return joblib.load(Config.MODEL_PATH)


def carregar_dados():
    """Carrega e separa os dados de teste."""

    print(f"📄 Carregando dados do CSV: {Config.HEART_PATH}")
    df = pd.read_csv(Config.HEART_PATH)
    X = df.drop('HeartDisease', axis=1)
    y = df['HeartDisease']
    return train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)


def test_model_accuracy():
    """Testar assertividade mínima para ser aprovado."""

    modelo = carregar_modelo()
    X_train, X_test, y_train, y_test = carregar_dados()

    print("📈 Realizando predições...")
    y_pred = modelo.predict(X_test)

    acc = accuracy_score(y_test, y_pred)
    print(f"✅ Assertividade do modelo: {acc:.2%}")

    # Resumo da performance
    relatorio = classification_report(y_test, y_pred, digits=2)
    print("📊 Relatório de Classificação:\n", relatorio)

    # Teste de aprovação
    threshold = 0.85
    assert acc >= threshold, f"❌ Assertividade abaixo do esperado: {acc:.2%} (mínimo: {threshold:.0%})"

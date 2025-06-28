from flask import Flask
from routes.predict import predict_bp
from config import Config
from flask_swagger_ui import get_swaggerui_blueprint
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)

    app.register_blueprint(predict_bp)

    ### Swagger UI setup ###
    SWAGGER_URL = '/swagger'
    API_URL = '/static/swagger.yaml'

    swaggerui_blueprint = get_swaggerui_blueprint(
        SWAGGER_URL,
        API_URL,
        config={'app_name': "Heart Disease Prediction API"}
    )
    app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)

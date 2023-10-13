from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
db = SQLAlchemy()
migrate = Migrate()

class User(db.Model):
        __tablename__ = "users"
        id = db.Column(db.Integer, primary_key=True)
        email = db.Column(db.String(128), unique=True, nullable=False)
        active = db.Column(db.Boolean(), default=True, nullable=False)
        test = db.Column(db.Boolean(), default=True, nullable=True)

        def to_dict(self):
            return {
                 "id": self.id,
                 "email": self.email  
                }
        
        def __init__(self, email):
            self.email = email
           

def create_app():
    app = Flask(__name__)
    
    app.config.from_object("project.config.Config")
    db.init_app(app)
    
    migrate.init_app(app, db)
   
    @app.route("/")
    def hello_world():
        return jsonify(hello="worlds")
    
    @app.route("/api/users")
    def all_users():
        all_users = User.query.all()
        list_users = [user.to_dict() for user in all_users]
        
        return jsonify(list_users)
    
    return app
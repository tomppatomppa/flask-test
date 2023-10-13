import os
import pytest
from project import create_app

@pytest.fixture()
def test_client(scope='module'):
    os.environ['CONFIG_TYPE'] = 'config.TestingConfig'
    flask_app = create_app()

    with flask_app.test_client() as testing_client:
        with flask_app.app_context():
            yield testing_client

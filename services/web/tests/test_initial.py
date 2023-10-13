import os
from project import User

def test_initial(test_client):
    response = test_client.get("/")
    assert response.json == {'hello': 'worlds'}
 
def test_endpoint_returns_all_users(test_client):
    
    response = test_client.get("/api/users")
    print(os.getenv("TEST_DATABASE_URL"))
    assert response.json == [{"email": "michael@mherman.org", "id": 1}]







 
import os
from project import User

def test_initial(test_client):
    response = test_client.get("/")
    assert response.json == {'hello': 'worlds'}
 
def test_endpoint_returns_all_users(test_client):
    
    response = test_client.get("/api/users")
    
    assert response.json == [{"email": "michael@mherman.org", "id": 1}]

def test_dummy(test_client):
    
   
    assert 1 == 1







 
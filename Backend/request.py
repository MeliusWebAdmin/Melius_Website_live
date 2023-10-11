import requests
import json
import os
url = 'http://127.0.0.1:5000/api/admin/members'

files = {
        "image": open('OIP.jfif', 'rb'),
}
data = {
    "name": "John_Doe",
    "position": "Software Engineer",
    "order": 1,
    "is_public": True,
    "is_active": True
}
# headers = {
#     'Content-Type': 'multipart/form-data'
# }
response = requests.post(url, files=files,data=data)

print(response.json())

# Movert Frontend

## Introduction
In this repository would be located the Movert Frontend, consists of 3 applications:

1. Movert-Employee:
    This application the movert's employees would register coustomers, create cards and associate cards to the coustomers.
2. Movert-User:
    The users can use it to pay the public tansport, recharge/check their balance and see their profile.  
3. Movert-Pay:
    It will be installed in the public transport's payment terminal.

## Documentación
- Sequence diagram
```mermaid
sequenceDiagram
    participant USER
    participant FRONT as Web App
    participant API
    participant DB
    USER->>FRONT: Interacts with application
    FRONT->>API: Does a request to DB 
    API->>DB: Send query
    DB->>API: Return the responso to the query
    API->>API: Handle the data on controller
    API->>FRONT: Send the response to the request
    FRONT->>USER: Show the response
```
# Subway system challenge

Simulated the subway system

The project was containerized by `Docker` as it can be run by `Docker`.

Run the project with docker command:

```shell
docker-compose up --build
```

Then you can check the hostname of the server by the command:

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <containerID>
```

Exit the project with command:

```shell
docker-compose down
```

## Database Design

The application uses three database entities: TrainLine, Station, and Card

1. TrainLine:

   | Field    | Type         |
   | -------- | ------------ |
   | \_id     | ObjectId     |
   | name     | VARCHAR[255] |
   | stations | Text[]       |
   | fare     | Double       |

2. Station:

   | Field      | Type         |
   | ---------- | ------------ |
   | \_id       | ObjectId     |
   | name       | VARCHAR[255] |
   | fare       | Double       |
   | nbrstation | Text[]       |

3. Card:

   | Field  | Type         |
   | ------ | ------------ |
   | \_id   | ObjectId     |
   | number | VARCHAR[255] |
   | amount | Double       |
   | riding | Boolean      |

## API Design

- **Get whole train lines**
  - Method: GET
  - Endpoint: `/api/v1/train-line`
  - Description: Retreives a list of train lines
  - Request Parameters: None
  - Response:
    - 200: Return list of lines

- **Get train line by name**
  - Method: GET
  - Endpoint: `/api/v1/train-line/:name`
  - Description: Retreives a train line by name
  - Request Parameters: Name of train line
  - Response:
    - 200: Return detail of train line
    - 404: No line with the name

- **Create a new train line**
  - Method: POST
  - Endpoint: `/api/v1/train-line`
  - Description: Create a new train line
  - Request Body: { name: "", stations: "", fare: "" }
  - Response:
    - 200: Created a new train line
    - 409: Already existing the line with same name

- **Get whole station list**
  - Method: GET
  - Endpoint: `/api/v1/station`
  - Description: Retreives a list of stations
  - Request Parameters: None
  - Response:
    - 200: Return list of lines

- **Get a station detail by name**
  - Method: GET
  - Endpoint: `/api/v1/station/:name`
  - Description: Retreives a station's detail by name
  - Request Parameters: Name of station
  - Response:
    - 200: Return detail of station
    - 404: No station with the name

- **Get whole card list**
  - Method: GET
  - Endpoint: `/api/v1/card`
  - Description: Retreives a list of existing cards
  - Request Parameters: None
  - Response:
    - 200: Return list of cards

- **Get card info with card number**
  - Method: GET
  - Endpoint: `/api/v1/card:/number`
  - Description: Retreives a card info by card number
  - Request Parameters: Card number
  - Response:
    - 200: Return detail info of card
    - 404: No card with the number

- **Create a new card**
  - Method: POST
  - Endpoint: `/api/v1/card`
  - Description: Create a new train line
  - Request Body: { number: "", amount: "" }
  - Response:
    - 200: Created a new train line


### Challenge 1 : Search Route
- **Get Route between stations**
  - Method: GET
  - Endpoint: `/api/v1/route`
  - Description: Find the route from one station to another
  - Request Query: origin=`<leaving station>`&destination=`<destination station>`
  - Response:
    - 200: Return found route to station.
    - 404: Route is not found.

### Challenge 2 : Fare payment method
- **Riding on the subway**
  - Method: POST
  - Endpoint: `/api/v1/station/:station/enter`
  - Description: Enter the subway with card and pay the fare
  - Request Parameters: Name of entering station
  - Request Body: { number: "" }
  - Response:
    - 200: Return found route to station.
    - 400: Not enough money in the card
    - 404: No card with given number
    - 409: Already in the subway

- **Riding off the subway**
  - Method: POST
  - Endpoint: `/api/v1/station/:station/exit`
  - Description: Exit the subway
  - Request Parameters: Name of entered station
  - Request Body: { number: "" }
  - Response:
    - 200: Return found route to station.
    - 404: No card with given number
    - 409: Already in the subway

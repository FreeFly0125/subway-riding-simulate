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



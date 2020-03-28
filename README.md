# Content Wiser

## Development
To start the development version, we recommend [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/). Simply run the folllowing in the repository root:

```
docker-compose up
```

Usefuls URLs:
- Frontend: http://localhost
- GraphQL Playground: http://localhost:4001/graphql
- Neo4J query interface: http://localhost:7474/browser/

## Database
For a better visualization of the entire data base, access http://localhost:7474/browser/ (user: neo4j, password: letmein).

To use the seed data, run:

```
docker-compose exec api yarn seedDb
```

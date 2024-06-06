# Mi Repertorio

En este proyecto se conecto una base de datos PostgreSQL, con Express y luego se con un front de HTML.
El proyecto cuenta con un CRUD para canciones. 
Para ejecutar el proyecto es necesario crear una base de datos en postgreSQL con el siguiente nombre
```
repertorio
```
Y en la base de datos se debe crear la siguiente tabla:
```
CREATE TABLE canciones (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(50),
  artista VARCHAR(50),
  tono VARCHAR(10)
);
```
Además para que funcione adecuadamente se debe editar el archivo en src/db/index.js y se debe introducir el nombre y contraseña corespondiente para su DB.

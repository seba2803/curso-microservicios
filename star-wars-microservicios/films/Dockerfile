#? va venir instalado node dentro del contenedor Docker
FROM node:16

#? va tener una carpeta app donde se van a guardar todos los archivos necesarios
WORKDIR /app

#? para instalar todas las dependencias y librerias se necesita el package.json
#? asi como el package.lock.json entonces se copia el arcivo
#? package.json y lock.json en caso de tenerlo
COPY package*.json ./

#? para instalar todas las dependencias se debe correr el comando para instalarlas
RUN npm install

#? tambien se debe copiar todo lo que contiene nuestra aplicacion de Node
#? corremos el comando COPY . .
#? el primer punto (.) hace referencia a la carpeta de donde vamos a copiar todo
#? y el segundo punto (.) es el destino donde se va copiar todo, es decir /app
COPY . .

#? se debe indicar el puerto que funciona internamente en la aplicacion
#? y para ello se debe exponer el puerto en el que se va a levantar la aplicacion
EXPOSE 8002

#? comando que va a correr para levantar el contenedor(aplicacion de Node)
CMD [ "npm", "start" ]

# comando para correr/levantar contenedor
#* docker run --network=starwars --name=films -p 8002:8002 films


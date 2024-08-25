# Étape 1 : Build
FROM node:16 AS builder

# Crée un répertoire pour l'application
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Exécute la build de l'application Angular
RUN npm run build --prod

# Étape 2 : Serve
FROM nginx:alpine

# Copie les fichiers construits dans le conteneur Nginx
COPY --from=builder /app/dist/quiz-anime /usr/share/nginx/html

# Expose le port utilisé par Nginx
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]

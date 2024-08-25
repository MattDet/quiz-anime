# Utiliser l'image officielle Node.js
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration de l'application
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application Angular
RUN npm run build -- --configuration production

# Utiliser une image Nginx pour servir l'application
FROM nginx:alpine
COPY --from=build /app/dist/quiz-anime /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

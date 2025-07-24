FROM node:18

WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Run app in dev mode (make sure "dev" script exists in package.json)
CMD ["npm", "run", "dev"]

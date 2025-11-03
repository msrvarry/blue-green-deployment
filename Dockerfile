# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["node", "app.js"]

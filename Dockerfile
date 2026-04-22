FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY src/package*.json ./

# Install dependencies
RUN npm install && npm install -g ts-node typescript nodemon

# Copy application code
COPY src .

# Expose port (if needed for future development)
EXPOSE 3000

# Default command
CMD ["ts-node", "index.ts"]
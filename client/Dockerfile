# pull this image into the docker container bayesimpact/react-base
FROM node:18-alpine


# Set the working directory to /client
WORKDIR /client

# Add dependancies so they are cached
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the the source code into the container
COPY . .

# Run the app when the container launches
CMD ["npm", "start"]
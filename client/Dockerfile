# pull this image into the docker container bayesimpact/react-base
FROM node:18-alpine

# Copy the client directory into the container
COPY . /client

# Set the working directory to /client
WORKDIR /client

# Install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
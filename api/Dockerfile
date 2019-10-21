FROM node:8.12.0

# Set the working directory to /app
ENV workdir /usr/src/app
RUN mkdir ${workdir}
WORKDIR ${workdir}

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy the relevant directory contents into the container at workdir
COPY . ./
# install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm start when the container launches
CMD ["npm", "run", "start"]

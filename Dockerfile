
# pull official base image
FROM node:14.14.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY . ./
RUN npm install --silent

# add app
RUN npm run build

# start app
#CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
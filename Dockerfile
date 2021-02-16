# # # pull official base image
# # FROM node:14.14.0-alpine

# # # set working directory
# # WORKDIR /app

# # # add `/app/node_modules/.bin` to $PATH
# # ENV PATH /app/node_modules/.bin:$PATH

# # # install app dependencies
# # COPY package.json ./

# # RUN npm install --silent

# # # add app
# # COPY . ./
# # RUN npm run develop
# # RUN npm run build

# # # start app
# # #CMD ["npm", "run", "build"]
# # CMD ["npm", "run", "serve"]

# FROM node:13

# WORKDIR /usr/src/app

# COPY package.json .

# RUN yarn global add gatsby-cli

# RUN yarn install

# COPY gatsby-config.js .

# # Optionally, copy your .env file to the container filesystem
# COPY .env .

# RUN npm run build

# CMD ["npm", "run", "serve"]

FROM gatsbyjs/gatsby:onbuild as build

FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub

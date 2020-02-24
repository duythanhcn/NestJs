FROM node:13.8 as builder

# Create app directory

ENV HOME=/home/app
WORKDIR /home/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./
COPY yarn.lock .
RUN yarn
RUN cd ${HOME}
COPY . .
EXPOSE 3000
RUN yarn run build
CMD [ "yarn", "start" ]


# # If you are building your code for production
# # RUN npm ci --only=production
# FROM node:13.8-alpine
# WORKDIR /home/app
# # Bundle app source
# COPY --from=builder /tmp/node_modules ./node_modules
# COPY --from=builder  /home/app/dist ./dist
# COPY . .
# RUN apk add mysql


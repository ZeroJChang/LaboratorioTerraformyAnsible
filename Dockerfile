FROM node:14-alpine

WORKDIR /app

COPY index.js

EXPOSE 8080

CMD ["node","index.js"]
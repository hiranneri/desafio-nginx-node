FROM nginx

WORKDIR /app/

COPY --chmod=0755 ./start.sh /start.sh

COPY ./app /app

RUN apt-get update && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

RUN apt-get install nodejs -y

RUN cd /app/ && npm install

ENV PORT=3000

EXPOSE 80

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/bash", "/start.sh"]
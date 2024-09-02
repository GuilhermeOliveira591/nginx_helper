FROM nginx AS proxi-reverso

WORKDIR /etc/nginx

RUN rm /etc/nginx/conf.d/default.conf

RUN apt-get update         && \
    apt-get install -y vim

# RUN ln -s /etc/nginx/sites-available/myserver.config /etc/nginx/sites-enabled/

COPY nginx.conf /etc/nginx/

EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

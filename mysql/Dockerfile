FROM mysql

WORKDIR /var/lib/mysql

COPY ./bd/ .

CMD ["--innodb-use-native-aio=0"]
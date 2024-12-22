FROM mysql:9.1.0 as sgbd

WORKDIR /var/lib/mysql

ADD bd/ .

CMD ["--innodb-use-native-aio=0"]
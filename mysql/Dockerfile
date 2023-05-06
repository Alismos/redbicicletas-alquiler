FROM mysql

ENV MYSQL_DATABASE redbiciletas_db
ENV MYSQL_USER mysqluser
ENV MYSQL_PASSWORD password123
ENV MYSQL_ROOT_PASSWORD empanadas

COPY mysql/schema.sql /docker-entrypoint-initdb.d/



EXPOSE 3306
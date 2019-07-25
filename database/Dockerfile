FROM postgres:latest
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB inventory
COPY daily-inventory.csv /app/
ADD import.sh /docker-entrypoint-initdb.d/
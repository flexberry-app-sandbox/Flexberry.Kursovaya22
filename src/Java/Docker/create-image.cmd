docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya-java/app ../../..

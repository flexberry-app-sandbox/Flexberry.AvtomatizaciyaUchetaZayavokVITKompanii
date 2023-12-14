docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avtomatizaciya_ucheta_zayavok_v_it_kompanii-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t avtomatizaciya_ucheta_zayavok_v_it_kompanii-java/app ../../..

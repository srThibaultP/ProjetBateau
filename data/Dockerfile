# Derived from official mysql image (our base image)
FROM mysql
# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY . /docker-entrypoint-initdb.d/
LABEL org.opencontainers.image.source https://github.com/srthibaultp/projetbateau/

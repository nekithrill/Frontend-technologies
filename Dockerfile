FROM httpd:latest
COPY ./public/ /usr/local/apache2/htdocs/
VOLUME /app
RUN npm -g install serve
EXPOSE 8080
CMD ["serve", "-s", "/app", "-p", "8080"]
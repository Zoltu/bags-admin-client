FROM zoltu/node-bower-gulp

COPY . /app
WORKDIR /app
RUN npm install
RUN bower --allow-root install
EXPOSE 3000
EXPOSE 3001

ENTRYPOINT ["gulp", "serve"]

# docker build --tag="foo" .
# docker run -P --name="bar" foo

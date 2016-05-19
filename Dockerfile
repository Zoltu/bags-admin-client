FROM zoltu/node-bower-gulp

COPY . /app
WORKDIR /app
RUN npm install
RUN cd $(npm root -g)/npm \
	&& npm install fs-extra \
	&& sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js
RUN npm install express
RUN bower --allow-root install
RUN gulp build
EXPOSE 80

ENTRYPOINT ["node", "express-server.js"]

# docker build --tag="foo" .
# docker run -p 80:80 --name="bar" foo

FROM zoltu/aspnetcore-gulp-bower

WORKDIR /app/server
COPY server/ /app/server/
RUN dotnet restore
RUN dotnet build

WORKDIR /app
RUN npm install bufferutil@3.0.3 \
  && npm install utf-8-validate@4.0.0 \
  && npm install gulp-if-else@1.0.3

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY .bowerrc /app/bowerrc
COPY bower.json /app/bower.json
RUN bower --allow-root install

COPY . /app
RUN gulp build:map \
  && mkdir -p /app/server/client \
  && mv /app/dist/* /app/server/client

EXPOSE 80
WORKDIR /app/server
ENTRYPOINT ["dotnet", "run"]

FROM zoltu/aspnetcore-gulp-bower

RUN mkdir /app
WORKDIR /app
RUN npm install bufferutil \
  && npm install utf-8-validate \
  && npm install gulp-if-else
COPY . /app
RUN npm install \
  && bower --allow-root install \
  && gulp build:map \
  && mkdir -p /app/server/client \
  && mv /app/dist/* /app/server/client

WORKDIR /app/server
RUN dotnet restore
RUN dotnet build

EXPOSE 80
ENTRYPOINT ["dotnet", "run"]

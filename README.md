Albums React
============

## Up and running

- `npm install`
- Set an API base URL in .env
- `yarn run dev`

## Deploying to S3

- `cp .env .env.production`
- Set a production API base URL
- Set an S3 bucket name
- Source directory probably won't change
- `./deploy.sh`


## TODO

- Handle auth error on create genre
- Genre pills
- Remove genre from album
- Genre select
- Add genre to album

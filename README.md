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

- [ ] [Redux Toolkit](https://redux-toolkit.js.org/)
- [ ] Refresh search when album genres change
- [ ] Genre page
- [ ] Some convenience functions for API requests
- [ ] Some hook that handles all the auth stuff
- [ ] Create genre confirmation modal

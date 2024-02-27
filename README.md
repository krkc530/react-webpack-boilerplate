# webpack-react-typescript

## Requirements
-   Node.js >= 18

## Tools and Technologies

-   [ReactJS](https://reactjs.org/)
-   [React Router](https://reactrouter.com/en/main/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Webpack](https://webpack.js.org/)
-   [MUI](https://mui.com/)

## Getting Started

### Install

-   `npm install`

### Make and set environments

```bash
.env.development # for dev(local)
.env.production # for build
```

### Run locally with .env.development

-   `npm run start` - server started at [localhost:3000](https://localhost:3000/)

### Build Project with .env.production

-   `npm run build` - we can see the output in `dist/` directory

### Deploy Project on nginx web server
-   Make sure you already installed docker and docker-compose.
-   `docker compose up -d`

## Codebase

-   `npm run lint` - lint the codebase
-   `npm run lint:fix` - lint the codebase and fix if possible
-   `npm run type-check` - type-check the codebase using tsc

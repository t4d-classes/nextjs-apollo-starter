# Next.js and Apollo Starter Application

## Server Setup

If you are using Yarn, simply change into the `server` folder and run the following command:

```bash
yarn start
```

If you are using NPM, then change into the the `server` folder and run the following two commands:

```bash
npm install

npm start
```

## Client Setup

If you are using Yarn, simply change into the `client` folder and run the following command:

```bash
yarn run dev
```

If you are using NPM, then change into the the `client` folder and run the following two commands:

```bash
npm install

npm run dev
```

## Access the Application

To view the web site, open a web browser, and navigate to: `https://localhost:5000`

To view the GraphQL Playground, open a web browser, and navigate to: `https://localhost:5000/graphql`

To view the REST API, open a web browser, and navigate to: `http://localhost:5050`

If SSL does not work for you on maxOS, you will need to import the `server.cert` file into your keychain and trust all of the services.

If you cannot get the SSL to work, then you will need to enable the non-SSL version of the application.

Comment/uncomment the relevant portions of the `server/src/index.js` file and `client/lib/apolloClient.js`.

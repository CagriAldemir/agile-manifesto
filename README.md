# Agile Manifesto

This project was built using create-react-app.

Used Node Version: **12.18.4**

## Libraries

- bootstrap
- classnames
- i18next
- node-sass
- react-bootstrap
- react-bootstrap-typeahead
- react-i18next
- react-router-dom

## Getting Started

To get a local copy up and running follow these simple steps.

## Installation

You can run the project in the development environment or production build. For this, please follow the steps below.

### Development Build

1. Go to root directory of project.

2. Install NPM packages

   ```sh
   yarn
   # or
   npm install
   ```

3. Run Development Build
   ```sh
   yarn start
   # or
   npm run start
   ```

### Development Build with Docker

1. Go to root directory of project.

2. Build Docker image

```
docker build -t agile-manifesto-sample-react-project .
```

3. Run Docker image

```
docker run -p <port-number>:3000 agile-manifesto-sample-react-project
```

4. Go to `http://localhost:<port-number>`

### Production Build

1. Go to root directory of project.

2. Install NPM packages

   ```sh
   yarn
   # or
   npm install
   ```

3. Build Project

   ```sh
   yarn build
   # or
   npm run build
   ```

4. Serve Project
   ```sh
   serve -s build
   ```

# react-scripts-injectable 
Latest version of original react-scripts: **1.0.13**

Create React apps **with webpack and jest configurable**.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/youngyou/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work please [file an issue](https://github.com/youngyou/create-react-app/issues/new).

### Installation

Install it once globally:

```sh
npm install -g create-react-app
```

**You’ll need to have Node >= 6 on your machine**. You can use [nvm](https://github.com/creationix/nvm#installation) to easily switch Node versions between different projects.

**This tool doesn’t assume a Node backend**. The Node installation is only required for Create React App itself.

### Creating an App

To create a new app, run:

```sh
create-react-app my-app --scripts-version https://github.com/youngyou/create-react-app/releases/download/injectable-v1.0.13/react-scripts-injectable-1.0.13.tgz
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── webpack.js
├── jest-config.js
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

Now you can edit webpack.js and jest-config.js to modify the webpack and jest config. 
Once the installation is done, you can run some commands inside the project folder:

For details, visit [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

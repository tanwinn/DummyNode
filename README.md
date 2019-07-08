# Dummy Node JS
A dummy web server using NodeJS | Deployed to [Heroku](https://my-dummy-node.herokuapp.com/)

Traversy Media Crash Course series ([more](https://www.youtube.com/watch?v=fBNz5xF-Kx4))

## Geting started
### Clone the project
<code>git clone git@github.com:tanwinn/nodeJS_dummy.git</code>

### Install depenedencies (package.json)
<code>npm install</code>

### Run the server with nodemon
<code>nodemon index.js</code>

## Stackedit.io
### Overview
- Has one thread & one event loop
- Is asynchronous: uses [callbacks](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)
- Is good with any task that is not [CPU-intensive](https://stackoverflow.com/questions/15341551/what-counts-as-cpu-intensive-tasks-eg-sorting-searching-etc)

### NPM - Node Package Manager
- Install 3rd party package manager (frameworks, libraries, & tools)
- Packages are stored in <code>node_modules</code>
- Dependencies listed in <code>package.json</code>
- npm scripts can run certain tasks, such as run a server.

### Node Modules
- Node core modules (path, fs, http, etc.)
- 3rd party modules/packages installed via npm
- Build your own modules = files that have an export
<code>module.export = <class_name>;</code>

### Server
<code> npm run <the_text> </code>
nodemon constantly observe the change during the development process, so the server doesn't have to be canceled and restarted every time the code is altered

### Deploy in Heroku
https://my-dummy-node.herokuapp.com

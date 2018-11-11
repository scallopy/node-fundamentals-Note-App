# Node.js Fundamentals (Note App)

## 1. [Install Nodejs & npm](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.oy5bora8spry)
## 2. Installing Atom
###    Debian and Ubuntu (deb/apt)
## 3. Modules in Nodejs
## 4. Using require:
### File System
  
```javascript
fs.appendFile(path, data[, options], callback) // To create a new file

fs.appendFileSync(path, data[, options]) // Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.
```

OS - os.userInfo([options])

require own file

Function module.exports():

Add result:

Using 3th Party Modules

npm init  to create package.json file in our project, were will be saved requirements for the app

$ npm -v

$ npm init

Install npm packages

Install  _lodash

Install

Restarting App With Nodemon

$ sudo npm install nodemon -g

$ nodemon app.js

Getting Input From User

Add console.log(process.argv); to see processes of add or list note:

Add var command and commands add & list

Add commands read & remove:

Adding views processes & remove title

Install Yargs - Simplified Input With Yargs

In app.js:

//Adding module notes.addNote(argv.title,argv.body); to add note

// Adding module  notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note

in notes.js:

// Adding module notes.addNote(argv.title, argv.body); to add note

// Adding  module notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note:

Working With JSON

Adding & Saving Note to json file

// Create fetchNotes();

// read JSON file: 'notes-data.json'

// Create saveNotes(notes);

// Adding module notes.addNote(argv.title, argv.body); to add note

// Make title uniq

//Adding module notes.getAll(); to list notes

//Adding module notes.readNote(argv.title); to read note

// Adding module removeNote(argv.title); to remove note

In app.js:

//Adding module notes.addNote(argv.title, argv.body); to add note

// Adding module  notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note

Adding logNote module:

// Create fetchNotes();

// try to read JSON file: 'notes-data.json'

// Create saveNotes(notes);

// Adding module notes.addNote(argv.title, argv.body); to add note

// Make title uniq

//Adding module notes.getAll(); to list notes

//Adding module notes.getNote(argv.title); to read note

// Adding module removeNote(argv.ttitle); to remove note

In app.js:

//Adding module notes.addNote(argv.title, argv.body); to add note

// Adding module  notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note

Debugging Node.js Application

Requiring Arguments And Advanced Yargs: Set --help with Yargs

In app.js:

Arrow Functions

Adding Version Control (Git)

Create .gitignore file to ignore directory node_modules/

Setting Up GitHub & SSH Keys

Checking for existing SSH keys

Generating a new SSH key

Adding your SSH key to the ssh-agent

Add your SSH private key to the ssh-agent

Configure Github

Adding a new SSH key to your GitHub account

In terminal

In github => Create new repository, then:

…or push an existing repository from the command line


# Node.js Fundamentals (Note App)

## [Install Nodejs & npm](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.oy5bora8spry)
## [Installing Atom](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.vl0uhfmh9uno)
  * [Debian and Ubuntu (deb/apt)](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.5xdx9h3ocz4o)
## [Modules in Nodejs](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.yzopqiukz4u2)
### 1. [Using require:](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.soocvykifr9a)
  * [File System](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.l6ivpo6e22oc)
  
```javascript
fs.appendFile(path, data[, options], callback) // To create a new file

fs.appendFileSync(path, data[, options]) // Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.
```

  * [OS - os.userInfo([options])](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.h8hkyhatn9nr)

### 2. [require own file](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.jajt3iz4a0zb)

  * Function module.exports():

  * Add result:

### 3. [Using 3th Party Modules](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.3c00aufikzz0)

npm init  to create package.json file in our project, were will be saved requirements for the app

  * $ npm -v

  * $ npm init

#### [Install npm packages:](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.gfcty8gprugw)

  * Install  _lodash

#### [Restarting App With Nodemon](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.uulhck5gq91p)

  * $ sudo npm install nodemon -g

  * $ nodemon app.js

#### [Getting Input From User](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.nzv2sqntmm3w)

Add console.log(process.argv); to see processes of add or list note:

Add var command and commands add & list

Add commands read & remove:

Adding views processes & remove title

#### [Install Yargs - Simplified Input With Yargs](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.lbdfj8kixvah)

In app.js:

```javascript
//Adding module notes.addNote(argv.title,argv.body); to add note

// Adding module  notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note
```

in notes.js:

```javascript
// Adding module notes.addNote(argv.title, argv.body); to add note

// Adding  module notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note:
```

## [Working With JSON](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.kogkb4innmm7)

## [Adding & Saving Note to json file](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.7hu2f5aipnjp)

In notes.js:

```javascript
// Create fetchNotes();

// read JSON file: 'notes-data.json'

// Create saveNotes(notes);

// Adding module notes.addNote(argv.title, argv.body); to add note

// Make title uniq

//Adding module notes.getAll(); to list notes

//Adding module notes.readNote(argv.title); to read note

// Adding module removeNote(argv.title); to remove note
```

In app.js:

```javascript
//Adding module notes.addNote(argv.title, argv.body); to add note

// Adding module  notes.getAll(); to list notes

// Adding module notes.getNote(argv.title); to read note

// Adding module notes.removeNote(argv.title); to remove note
```

Adding logNote module:

## [Debugging Node.js Application](https://docs.google.com/document/d/1yLMU3XTXKvuIH-aKQsk9tCsyffmkdLDJnmqa2tcM-5E/edit)

## [Requiring Arguments And Advanced Yargs: Set --help with Yargs](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.mykzq1sx6u2f)

  * In app.js:

## [Arrow Functions](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.dus2sfnaao5g)

## [Adding Version Control (Git)](https://docs.google.com/document/d/1yQ84xrJRr2Km0zYWSETtDu10_cIijNe5ckb-FeNecx8/edit#heading=h.vbzcn6bb33nr)

  * Create .gitignore file to ignore directory node_modules/

  * Setting Up GitHub & SSH Keys

  * Checking for existing SSH keys

  * Generating a new SSH key

  * Adding your SSH key to the ssh-agent

  * Add your SSH private key to the ssh-agent

  * Configure Github

  * Adding a new SSH key to your GitHub account


In github => Create new repository, then:

  …or push an existing repository from the command line


# That Build Library
[![CircleCI](https://circleci.com/gh/ThatDevCompany/that-build-library.svg?style=svg)](https://circleci.com/gh/ThatDevCompany/that-build-library)

##  Overview
At That Dev Company we create and manage a whole bunch of projects
which are generally built, packaged and deployed using the same 
set of techniques.

This library contains a collection of common scripts that help with
those build and deploy processes

##  Installation
To install:-

```
yarn add that-build-library
```

##  Quick Example
An example use:-

```js
import { BuildUtils } from 'that-build-library'

Promise.resolve()
    .then(() => BuildUtils.echo('Cleaning'))
    .then(() => BuildUtils.clean('dist'))
    
    .then(() => BuildUtils.echo('Compiling'))
    .then(() => BuildUtils.tsc())
    
    .catch(console.error)
```

## Utilities
The following utility functions are available:-

#### clean (folder, leaveRoot)
Removes the contents of a folder
* **folder** the folder to be cleaned
* **leaveRoot** (optional) should the folder be left untouched (just the contents removed)

#### copy (source, destination, filename)
Copies a file or a folder
* **source** the folder or file to be copied
* **destination** the folder to be created/copied into
* **filename** (optional) the filename of the new file (defaults to the name of the source file)

#### echo (message)
Logs a message to screen
* **message** the message to be logged

#### exec (cmd, parameters)
Executes a command line program
* **cmd** the command to be run
* **parameters** a list of parameters to be passed

#### npmPublish (folder, packageProcessor)
Updates the version and publishes the project to NPM
* **folder** the folder containing the distributable build
* **packageProcessor** a function that will tidy up the package.json

#### prettierJS (include, excludes)
Automatically tidies the code (for JAVASCRIPT code)
* **include** the root folder prettify
* **excludes** an array of folders to exclude

#### prettierTS (include, excludes)
Automatically tidies the code (for TYPESCRIPT code)
* **include** the root folder prettify
* **excludes** an array of folders to exclude

#### processPackage (callback, autoUpdate)
Load the package.json file
* **callback** a function which will receive the package.json
file's contents
* **autoUpdate** should the version of the package.json be automatically updated and saved

#### removeModuleAlias (moduleName, folder)
Automatically flattens typescript module paths
* **moduleName** the name of the path module to remove
* **folder** the actual path of the module

#### test (minimum_coverage, include, excludes)
Compile the codebase (in accordance to the typescript config)
* **minimum_coverage** the minimum coverage threshold for each file (0 to 100)
* **include** the path to the root directory (default "src")
* **excludes** an array of paths to be excluded (default [])

#### tsc (config)
Compile the codebase (in accordance to the typescript config)
* **config** the path to the tsconfig file

#### zip (from, to)
Create a zip of the build
* **from** the build path
* **to** the path to the zip file being produced


# That Build Library

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




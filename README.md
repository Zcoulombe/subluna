# Subluna

Meta-data driven role playing game engine.

## Getting Started

Install `node`, `npm` and `gulp`.  Of course, `npm install` before using `gulp`.

Create a basic project.
```javascript
var engine = require('subluna')({
  world:{
    title: 'The Mount of Code',
    desc: 'It was a dark and stormy night.'
  }
})

var game = engine.buildGame();
```

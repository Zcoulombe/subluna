(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Entry Point
 * @param  {Object} options Meta-data
 * @return {Engine}         Game engine instance.
 */
module.exports = function(options){
  return {
    // TODO: Create Engine Object
    /**
     * buildGame - Construct game from Meta-data
     * @return {Game} Game Instance
     */
    buildGame:function(){
      // TODO: Create Game Object
      /* Game
        The build process should:
        1.  Generate World
          a.  Assign world description
          b.  Determine Time of day, and season.
          c.  
        1.  Generate Room Layout
          a.  Select the rooms to be included in the Game
              from the room set provided.
          b.  Generate room connection network (State Machine).
          c.  Traverse the network to assure that all rooms
              assure that all rooms are accessable.
        2.  Assign Special Events To Rooms
          a.  Select player starting point.
          b.  Spawn NPC's.
            i.  Assign dialog and quest options.
          c.  Spawn enemy encounters.
        3.  Generate Room Content
          a.  Fill rooms with props and scenery.
          b.  Create containers.
          c.  Fill containers with stuff.
          d.  Test connections to assure that all
              content is accessable.

      */
      return {};
    }
  };
}

},{}]},{},[1]);

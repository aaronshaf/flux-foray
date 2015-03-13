import { Promise } from 'es6-promise'
import { EventEmitter } from 'eventemitter3'

export default {
  events: new EventEmitter(),

  create: (data) => {
    // ...
    this.events.emit('create', stuff)
  },

  somethingElse: () =. {
    return new Promise((resolve, reject) => {
      // ...
      this.events.emit('somethingElse', stuff)
      resolve()
    })
  }
}

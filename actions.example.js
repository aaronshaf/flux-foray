import { Promise } from 'es6-promise'
import { EventEmitter } from 'eventemitter3'

export default {
  events: new EventEmitter(),

  create: (data) => {
    // ...
    this.events.emit('create')
  },

  somethingElse: () =. {
    return new Promise((resolve, reject) => {
      // ...
      this.events.emit('create')
      resolve()
    })
  }
}

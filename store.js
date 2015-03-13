import assign from 'object-assign'
import { EventEmitter } from 'eventemitter3'
import { is, Collection } from 'immutable'

var isImmutable = (object) => object instanceof Collection

export default {
  setState(data) {
    if(isImmutable(this.state)) {
      var oldState = this.state
      this.state = this.state.mergeDeep(data)
      if(!is(oldState, this.state)) {
        this.events.emit('change')
      }
    } else {
      this.state = assign({}, this.state, data)
      this.events.emit('change')
    }
  }
}

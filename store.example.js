import { Map } from 'immutable'
import { Store } from './index.es6'
import assign from 'object-assign'
import messageActions from './actions/message'

var MessageStore = assign({
  events: new EventEmitter(),

  state: Map({
    foo: 'bar'
  }),

  handleCreate(data) {
    this.setState(data)
  }
}, Store)

messageActions.events.addListener('create', MessageStore.handleCreate)

export default MessageStore


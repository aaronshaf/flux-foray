## Example actions

```javascript
import { Promise } from 'es6-promise'
import { EventEmitter } from 'eventemitter3'

export var events = new EventEmitter()

export default MessageActions = {
  create(data) {
    // do something with data
    events.emit('create')
  },

  somethingElse() {
    return new Promise((resolve, reject) => {
      // ...
    })
  }
}
```

## Example store

```javascript
import { Store } from 'flux-foray'
import MessageActions from './actions/message'
import { Record } from 'immutable'
import assign from 'object-assign'

var MessageStore = assign({
  state: Record({
    a: 1,
    b: 2
  }),

  handleCreate(data) {
    this.setState(data)
  }
}, Store)

MessageActions.events.addListener('create', MessageStore.handleCreate.bind(MessageStore))

export default MessageStore
```

## Higher-order React component

TODO


## Using store in component

```javascript
export default React.createClass({
  render() {
    <Test>
      {connectToStores({ ... }, () => (
        <div>
          ...
        </div>
      ))}
    </Test>
  }
})
```

import assign from 'object-assign'

export var Store = {
  get(key) {
    if(typeof this.state.get === 'function') {
      return this.state.get(key)
    } else {
      return this.state[key]
    }
  },

  setState(data) {
    if(typeof this.state.merge === 'function') {
      this.state = this.state.merge(data)
    } else {
      this.state = assign({}, this.state, data)
    }
  }
}

One base class and a simple pattern.

## Higher-order React component

TODO. Compare: https://gist.github.com/gaearon/b0c060edf413fe23db0a and https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775

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

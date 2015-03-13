One base class and a simple pattern.

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

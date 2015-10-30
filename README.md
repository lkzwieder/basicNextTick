# Basic next tick
process.nextTick for browsers

### How to use
```
console.log('initial', Date.now());
process.nextTick(function() {
  console.log('during', Date.now());
});
console.log('ends', Date.now());
```

In the previous example we must see: initial, ends, during.

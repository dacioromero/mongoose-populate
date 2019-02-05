# Mongoose Populate

Populate helper for Mongoose so you don't need to keep writing similar functions.

# Installation


```sh
$ npm install mongoose-populate
```

# Usage

```js
const mongoose = require('mongoose');
const populate = require('mongoose-populate');

const { Schema } = mongoose;

const ExampleSchema = new Schema({
    exampleRef: {
        type: Shema.Types.ObjectId,
        ref: 'OtherModel',
    },
});

// ExampleSchema.pre('find', function populateExample(next) {
//   this.populate('exampleRef');
//   next();
// });

ExampleSchema.pre('find', populate('exampleRef'));

module.exports = mongoose.model('Example', ExampleSchema);
```

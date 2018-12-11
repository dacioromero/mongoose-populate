# Mongoose Populate

Populate helper for Mongoose

# Install

```sh
$ npm install github:DacioRomero/mongoose-populate
```

# Usage

```js
const mongoose = require('mongoose');
const Populate = require('mongoose-populate');

const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
    exampleRef: {
        type: Shema.Types.ObjectId,
        ref: 'OtherModel'
    }
});
ExampleSchema.pre('find', Populate('exampleRef'));

module.exports = mongoose.model('Example', ExampleSchema);
```

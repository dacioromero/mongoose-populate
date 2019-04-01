# Mongoose Populate

[![pipeline status](https://gitlab.com/dacio/mongoose-populate/badges/master/pipeline.svg)](https://gitlab.com/dacio/mongoose-populate/commits/master)
[![coverage report](https://gitlab.com/dacio/mongoose-populate/badges/master/coverage.svg)](https://gitlab.com/dacio/mongoose-populate/commits/master)


Populate helper for Mongoose so you don't need to keep rewriting `this.populate` and `next`.

# Installation

```sh
$ npm install mongoose-populate
```

# Usage

## Importing

### CommonJS

```js
const populate = require('mongoose-populate');
```

### ES6

```js
import populate from 'mongoose-populate';
```

## Example

### Model

```js
const { Schema } = mongoose;

const ExampleSchema = new Schema({
    exampleField: {
        type: Schema.Types.ObjectId,
        ref: 'OtherModel',
    },
});
```

### Hook replacement

```diff
- ExampleSchema.pre('find', function popExampleField(next) {
-   this.populate('exampleField');
-   next();
- });

+ ExampleSchema.pre('find', populate('exampleField'));
```

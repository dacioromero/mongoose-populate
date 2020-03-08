# Mongoose Populate

Mini population hook for Mongoose so you don't need to keep rewriting `this.populate` and `next`.

## Installation

    $ npm install mongoose-populate


## CommonJS

```js
const { Schema } = require('mongoose')
const { createPopulateHook } = require('mongoose-populate')
```

## ESM

```js
import { Schema } from 'mongoose'
import { createPopulateHook } from 'mongoose-populate'
```

## Schema

```js
const ExampleSchema = new Schema({
    example: {
        type: Schema.Types.ObjectId,
        ref: 'OtherModel',
    },
})
```

## Hook replacement

```diff
- ExampleSchema.pre('find', function populateExampleHook(next) {
-   this.populate('example');
-   next();
- });

+ ExampleSchema.pre('find', createPopulateHook('example'));
```

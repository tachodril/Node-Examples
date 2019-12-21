const mongoose = require('mongoose');
const schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var commentSchema = new schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5
        //required: true
    },
    comment:  {
        type: String
        //required: true
    },
    author:  {
        type: String
        //required: true
    }
}, {
    timestamps: true
});

const dishSchema = new schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes;

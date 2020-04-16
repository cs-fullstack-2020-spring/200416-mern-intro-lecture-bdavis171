// movie schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define MovieSchema
const MovieSchema = new Schema(
    {
        title : String,
        yearReleased : Number
    }
);

// export
module.exports = mongoose.model('movie200416',MovieSchema);
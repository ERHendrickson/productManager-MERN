//import mongoose
const mongoose = require('mongoose');

const database = "productmanager2022";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(`You have now entered database: ${database}, gime a ~ hell yeah!` ))
    .catch( (err) => console.log('something went wrong when conneting to the database', err));
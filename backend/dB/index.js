const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://avantika:logan123@cluster0.um06aaj.mongodb.net/product')
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err)
})
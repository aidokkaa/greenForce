const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors')
const userRoute = require('./routes/user.js')
const authRoute = require ('./routes/auth.js');
const productRoute = require ('./routes/product.js');
const stripeRoute = require("./routes/stripe.js");
const cartRoute = require('./routes/cart.js')
const orderRoute = require("./routes/order.js");
const commentsRoute = require('./routes/comments.js');
const goodsRoute =require ('./routes/goods.js')
require('dotenv').config();

mongoose.connect(
    process.env.MONGO_URL)
    .then(()=>console.log('db connection success'));
    console.log('MongoDB URL:', process.env.MONGO_URL);
app.use(express.json())
app.use(cors())

app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/products',productRoute)
app.use('/api/orders',orderRoute)
app.use('/api/carts',cartRoute);
app.use('/api/checkout',stripeRoute);
app.use('/api/comments',commentsRoute);
app.use('/api/products', goodsRoute);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000,function(){
    console.log('listen')
})
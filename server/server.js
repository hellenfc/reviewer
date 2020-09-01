const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const cors = require('cors'); 
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

let reviews = [];

let pusher = new Pusher({
    appId: '1063984',
    key: '7b5f873955d15a8a72b4',
    secret: 'de77f9726987fd0256c4',
    cluster: 'mt1',
    encrypted: true
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/post', (req, res) => {
    //add new book from body to array of books
    reviews.push(req.body.review);
    //trigger  a event in a channel with json object
    pusher.trigger('review-channel', 'new-review', {
        'data': reviews
    });
    //send respone for this route 
    console.log('---reviews', reviews)
    res.json({
        message: "Review added succesfully"
    })
})


// pusher.trigger('my-channel', 'my-event', {
//     'message': 'hello world'
// });

app.listen(3001, () => {
    console.log('Express intro running on localhost:3001');
});
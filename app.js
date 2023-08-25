const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('mysecret'));

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    const { name = "No Name" } = req.cookies
    res.send(`Hey There, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'KIA!!');
    res.send('OK SENT COOKIE');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send("SIGNED COOKIE");
})
app.get('/verify', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})
app.listen(3000, () => {
    console.log("Serving on 3000");
})
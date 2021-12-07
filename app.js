const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    // res.send('Hello World!');
    
    let today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send('Yaaaa ...Today is weekend!');
    } else {
        res.send('Nooo Way..Today is weekday!');
    }
});

    



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}   );

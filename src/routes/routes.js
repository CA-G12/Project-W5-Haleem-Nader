const { appendFile } = require('fs');
const path = require('path');

app.use(express.josn());


// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({extended: true}));

// app.use(express.static(path.join(__dirname, '..', 'public')));

const express = require('express')
const app = express()

app.use(express.static(__dirname+'/dist'));

var page = `
<!doctype html>
<head>
    <title></title>
    <script src='bundle.js'></script>
    <link rel='stylesheet' href='main.css'/>
</head>
<body>
    KU
    <h1>kuku</h1>
    
<div class='myD'>
aaaaa
    <div class='innerD'>
    ooooo
    </div>
</div>
</body>
`;


app.get('/', function (req, res) {
  res.send(page)
})

app.listen(3000)
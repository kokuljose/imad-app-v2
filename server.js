var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article={
            ar1:{
            title:'kokul 1',
            date:"sept1"
            },
            ar2:{
            title:'kokul 2',
            date:"sept2"
            },
            ar3:{
            title:'kokul 3',
            date:"sept3"
            }
    };
var template=` <!DOCTYPE html>
<html>
	<head>
		
		<title>${title}</title>
	</head>
	<body>
		
		${title}
		${date}
			
	</body>
</html>`;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/a1',function (req, res){
    res.send(template(article[ar1]));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/a2',function (req, res){
    res.send(template(ar2));
});
app.get('/a3',function (req, res){
    res.send(template(ar3));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

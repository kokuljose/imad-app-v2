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
            }
    };
var template=` <!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<div id="header">
		${title}
		${date}
			<p id="name">Your Name Here</p>
			<a href="mailto:you@yourdomain.com"><p id="email">you@yourdomain.com</p></a>
		</div>
		<div class="left"></div>
		<div class="right">
			<h4>Objective</h4>
			<p>To take a position as a software engineer.</p>
			<h4>Experience</h4>
			<p>Junior Developer, Software Company (2010 - Present)</p>
			<ul>
				<li>Designed and implemented end-user features for Flagship Product</li>
				<li>Wrote third-party JavaScript and Ruby libraries</li>
			</ul>
			<h4>Skills</h4>
			<p>Languages: C#, JavaScript, Python, Ruby</p>
			<p>Frameworks: .NET, Node.js, Django, Ruby on Rails</p>
			<h4>Education</h4>
			<p>BS, Economics, My University</p>
			<ul>
				<li>Award for best senior thesis</li>
				<li>GPA: 3.8</li>
			</ul>
		</div>
		<div id="footer">
			<p>123 Your Street, Anytown, State 12345-6789 | Tel: (555) 555-5555</p>
		</div>
	</body>
</html>`

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/a1',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'a1.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/a2',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'a2.html'));
});
app.get('/a3',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'a3.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

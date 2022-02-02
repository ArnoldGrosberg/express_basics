const express = require('express');
const app = express();


app.get('/user/:username', (req,res)=>{
	// get parameter data from addressraw
	let user = req.params.username;
	// use this data in template
	res.render('index.ejs', {username : user});
});


// listen app via port
app.listen(3000, ()=> {
	console.log('Server started on http://localhost:3000');
});

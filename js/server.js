// import express from 'express'
// import bodyParser from 'body-parser';

var express = require('express');
var bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();

app.use(express.static('build'));
app.use(jsonParser);

const Storage = {
	update: function(newFewest){
		if(newFewest < this.fewest){
			this.fewest = newFewest;
		}
		return newFewest;
	}
}

const createStorage = function(){
	const storage = Object.create(Storage);
	storage.fewest = 30;
	return storage;
}

const storage = createStorage();

app.get('/fewest', function(req, res) {
	return res.json({fewest: storage.fewest});
});

app.post('/fewest', function(req, res) {
	console.log(req.body);
	const length = req.body.fewest;
	if(length === '0'){
		return res.sendStatus(400);
	}

	const newFewest = storage.update(req.body.fewest);
	console.log(res.body);
	return res.status(201).json(newFewest);
});

app.listen(process.env.PORT || 8080);
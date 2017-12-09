// ==========
// Variables
// ==========
const express = require('express'),
multer        = require('multer'),
mongoose      = require('mongoose'),
app           = express(),
storage = multer.memoryStorage();

// Use styles
app.use('/public', express.static(process.cwd() + '/public'));

app.route('/')
	.get((req, res) => {
		res.sendFile(process.cwd() + '/views/index.html');
	})
	.post(multer({dest: 'uploads/', storage: storage}).single('upld'), function(req, res, next) {
		res.send({Name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
	});

// ============
// Start Server
// ============
app.listen(process.env.PORT||3000, () => {
	console.log("The server is now running");
});
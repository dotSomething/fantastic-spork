const fs = require('fs');


module.exports = function (directory, extension, callback) {
	fs.readdir(directory, function (err, files) {
		if (err) {
			return callback(err)
		}
		files = files.filter(function (file) {
			if (file.toLowerCase().includes('.' + extension.toLowerCase())) {
				return file;
			}
		})

		callback(null, files);
	})
}

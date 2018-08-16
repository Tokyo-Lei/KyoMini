const md5 = require('md5');

module.exports = {
	name: 'admin',
	password: md5('admin2020')
}

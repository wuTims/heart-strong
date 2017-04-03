/**
* Handle requests to Controller
*
*/

var ApiResponse = function (cnf) {
	this.success = cnf.success;
	this.extras = cnf.extras; //JS Object containing additional data
}

module.exports = ApiResponse;
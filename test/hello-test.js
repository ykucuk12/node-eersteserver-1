

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var chould = chai.should();

chai.use(chaiHttp);

describe('Dit is de Hello API', function(){
	it('Als we GET /api/v1/hello uitvoeren', function(done){
		chai.request(server)
			.get('/api/v1/hello')
			.end( function(err, res){
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body
				done();
			});
	})
});
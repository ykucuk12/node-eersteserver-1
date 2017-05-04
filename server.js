// dit is mijn server
var http = require('http');

function onRequest(request, response){
	console.log('Er was een request.');

	var mijnObject = { 
		mijntekst: 'Hello World!',
		label: "Nog meer tekst",
		mijnarray: [ "tekst", "nog meer tekst", 2 ],
		mijnobject: {
			mijnlabel: 'mijntekst',
			getal: 4
		}
	};

	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(JSON.stringify(mijnObject));
}

http.createServer(onRequest).listen(process.env.PORT || 3000);

console.log('De server luistert op port 3000');

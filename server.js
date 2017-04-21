var http = require('http');

function onRequest(request, response){
	console.log('er was een request');
	response.writeHead(200,{'Content-Type': 'application/json'});

	var json = JSON.stringify({ 
		mijntekst: 'Hello World!',
		label: "Nog meer tekst",
		mijnarray: [ "tekst", "nog meer tekst", 2, 2.3 ],
		mijnobject: {
			mijnlabel: 'mijntekst',
			getal: 4
		}
	});

	response.write(json);
	response.end();
}

http.createServer(onRequest).listen(3000);

console.log('De server luistert op port 3000');
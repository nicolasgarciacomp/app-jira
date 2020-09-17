const fs = require('fs');
const request = require('request'),
	  username = "24336881559",
	  password = "24336881559",
	  url = "https://jira.rentascordoba.gob.ar/rest/api/2/search?jql=project=DI&maxResults=1000",
	  auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request(
    {
        url: url,
        headers: {
            "Authorization": auth
        }
    },
    function (error, response, body) {
        //console.log(body);
        fs.writeFile('datos.json', body, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		    console.log("Archivo grabado correctamente!");
		});
    }
);

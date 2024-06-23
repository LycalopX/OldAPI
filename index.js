/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const path = require('path');
const fs = require('fs')

const app = express();
const client = {}



// Banco de Dados...
const configPath = path.resolve(__dirname, './json/config.json');
function loadConfig() {
	return JSON.parse(fs.readFileSync(configPath).toString());
}
function saveConfig(config) {
	fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}
const config = loadConfig()

config["version"]++



const vuePath = __dirname + '/frontend/dist/'



// Configurações do CORS...
const corsConfig = {
	origin: "*",
	credentials: true,
	methods: ['GET', "HEAD", "PUT", "PATCH", "POST", "DELETE"],
	preflightContinue: false,
	optionsSuccessStatus: 200
}



// Habilitando as configurações!
app.use(morgan('tiny'));
app.use(cors(corsConfig))

app.options('*', cors(corsConfig));  // enable pre-flight

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(vuePath));



// Ligando o API...
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`listening on ${port}`);
});



// Preparando o OPTIONS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested, Content-Type, Accept Authorization")

	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE")
		return res.status(200).json({})
	}

	next()
})



// A SAGA
app.get('/', (req, res) => {
	res.sendFile(vuePath + 'index.html')

	console.log("eu fui acessado!");
});



client.GETpages = {}
const GETpages = client.GETpages
client.POSTpages = {}
const POSTpages = client.POSTpages


client.reqPages = {}
const reqPages = client.reqPages


var routeFolderFiles = fs.readdirSync('./routes/').filter(file => !file.endsWith('js'))
GETpages.subpage = {}
var GET_folders = fs.readdirSync('./routes/GET/').filter(file => !file.endsWith('js'))




// Route File Handler
for (const folder of routeFolderFiles) {

	// Se for do método GET
	if (folder == 'GET') {

		// Pra uma página
		var files_OfGETRoute = fs.readdirSync('./routes/GET/').filter(file => file.endsWith('.js'));
		GETRouteFiles(GETpages, files_OfGETRoute, './routes/GET/')

		// Para várias páginas...
		var subpages = GETpages.subpage


		// Route Folder Handler
		for (const folder of GET_folders) {

			if (folder == "inputs") GETRouteFiles(reqPages, fs.readdirSync(`./routes/GET/inputs`), `./routes/GET/inputs/`)

			if (!subpages[folder]) {
				subpages[folder] = {}
			}

			const files = fs.readdirSync(`./routes/GET/${folder}`)

			GETRouteFiles(subpages[folder], files, `./routes/GET/${folder}/`)
		}
	}


	// Se for do método POST
	if (folder == 'POST') {

		var files_OfPOSTRoute = fs.readdirSync('./routes/POST/').filter(file => file.endsWith('.js'));


		for (const file of files_OfPOSTRoute) {

			const route = require(`./routes/POST/${file}`)

			POSTpages[route.name] = route


			if (route.aliases) {
				route.aliases.forEach(alias => {
					if (alias.includes(' ')) return console.log('EI, BURRÃO, VOCÊ COLOCOU UM ESPAÇO NO ALIASES DO MÉTODO GET' + `\nMétodo: POST \nArquivo: ./routes/POST/${file}`)
					POSTpages[alias] = route
				})
			}
		}
	}
}

app.get('/suamae', async (req, res) => {

	Positivo()

})


// Gitter
app.get('/:animal', async (req, res) => {
	var animal = req.params.animal
	console.log("Alguém acabou de tentar usar /" + animal)

	if (!animal) return

	try {
		// Handler de gets
		var animalRoute = GETpages[animal.toLowerCase()]

		if (await verifyAnimalRoute(animalRoute, req) == true) {
			animalRoute.run(client, req, res)
			return
		}
	} catch (e) {
		e
	}

	res.sendFile(vuePath + 'error.html')
});



// Gitter
app.get('/:animal/:second_animal', async (req, res) => {
	if (!req.params.animal) return
	if (!req.params.second_animal) return

	var animal = req.params.animal.toLowerCase()
	var secondanimal = req.params.second_animal.toLowerCase()

	try {
		// Handler de gets
		var animalRoute = subpages[animal][secondanimal]

		if (await verifyAnimalRoute(animalRoute, req) == true) {
			animalRoute.run(client, req, res)
			return
		}
	} catch (e) {
	}

	res.sendFile(vuePath + 'error.html')

})

// If nothing works...
app.get('*', (req, res) => {
	res.sendFile(vuePath + 'error.html')
})



// Poster (lmao)
app.post('/:animal', async (req, res) => {
	var animal = req.params.animal

	if (!animal) return

	try {
		// Handler de gets
		var animalRoute = POSTpages[animal.toLowerCase()]

		if (await verifyAnimalRoute(animalRoute, req) == true) {
			animalRoute.run(client, req, res)
			return
		}
	} catch (e) {
		e
	}

	res.json(['oops :/'])
})



app.post('*', (req, res) => {
	res.json(['Oops...'])
	res.status(500)
})

/*
// ID aleatório para checar segurança da página...
var id = Math.random().toString(36)
// Página para atualizar a informação
app.get('/' + id, (req, res) => {

	// **Qualquer informação que quisermos postar do site dá pra pegar por aqui, e enviar para o arquivo de configuração, caso necessário...**
	config.URL = req.protocol + "://" + req.hostname + ":" + port
	saveConfig(config)
})

// Atualizar URL e trigger o id...
fetchAPI_URL()

async function fetchAPI_URL() {

	var API_URL = process.env.API_URL || `http://localhost:${port}/`
	var apiId = API_URL + id

	var result = await fetch(apiId)

	console.log(result)
}
*/


async function verifyAnimalRoute(animalRoute, req) {
	if (animalRoute.domain) {
		var fullHost = (req.get('host'))
		var domain = fullHost.replace('localhost', '')
		domain = domain.replace(':', '')
		domain = domain.replace('herokuapp', '')
		domain = domain.replace(port, '')
		domain = domain.replace('com', '')
		domain = domain.replace('lopx-api', '')
		domain = domain.replace('lopx-api2', '')

		for (var i = 0; i < 4; i++) {
			domain = domain.replace('.', '')
		}

		console.log(domain)
		console.log(animalRoute.domain)

		if (domain.toLowerCase() != animalRoute.domain.toLowerCase()) {
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
}


saveConfig(config)

function GETRouteFiles(GETpages, filesOfGETRoute, path) {

	for (const file of filesOfGETRoute) {
		const route = require(`${path}${file}`)

		GETpages[route.name] = route

		if (route.aliases) {
			route.aliases.forEach(alias => {
				if (alias.includes(' ')) return console.log('EI, BURRÃO, VOCÊ COLOCOU UM ESPAÇO NO ALIASES')
				GETpages[alias] = route
			})
		}
	}
}
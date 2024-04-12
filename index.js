const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({ extended: true }));
// middleware
app.use(express.json());

const options = {
	definition: {
		openapi: "3.0.0",
		servers: [
			{
				url:
					"https://back-ike.up.railway.app/" ||
					"http://localhost:3001/",
			},
		],
	},
	apis: ["./routes/*.js"],
};
app.get("/", (req, res) => {
	const message = {
		titulo: "Bienvenido al backend mockeable",
		comoUsar:
			"Pon en la url del presente endpoint para obtener la respuesta :)",
		endpointsDisponibles: [
			"/users/policy/documents/ike.santander.com",
			"/users/policy/documents/ike.banamex.com",
		],
	};
	res.status(200).json(message);
});
app.get("/users/policy/documents/ike.santander.com", (req, res) => {
	const santanderContent = [
		{ value: "DNI", name: "DNI" },
		{ value: "CUIT", name: "CUIT" },
		{ value: "PASAPORTE", name: "Pasaporte" },
		{ value: "CEDULA DE IDENTIDAD", name: "Cédula de identidad" },
		{ value: "LIBRETA CIVICA", name: "Libreta cívica" },
		{ value: "LIBRETA DE ENROLAMIENTO", name: "Libreta de enrolamiento" },
	];
	res.status(200).json(santanderContent);
});
app.get("/users/policy/documents/ike.banamex.com", (req, res) => {
	const banamexContent = [
		{ value: "ID", name: "Identification" },
		{ value: "TEST1", name: "Test one" },
		{ value: "PASSPORT", name: "Passport" },
	];
	res.status(200).json(banamexContent);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

const express = require("express");
const themes = require("./themes");
const app = express();
const cors = require("cors"); // Import the cors package
const path = require("path");

// const libertyLogo = require("./assets/Liberty_logo.png");
// https://sponsor1-stage.dev-pruebas.com

// https://sponsor2-stage.dev-pruebas.com
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({ extended: true }));
// middleware
app.use(cors());
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
			"/users/policy/documents/sponsor2-stage.dev-pruebas.com",
			"/users/policy/documents/sponsor1-stage.dev-pruebas.com",
			"/brand-services/brand/assets/sponsor1-stage.dev-pruebas.com",
			"/brand-services/brand/assets/sponsor2-stage.dev-pruebas.com",
			"/brand-services/brand/contacts/sponsor1-stage.dev-pruebas.com",
			"/brand-services/brand/contacts/sponsor2-stage.dev-pruebas.com",
			"/brand-services/brand/manifest/sponsor1-stage.dev-pruebas.com:3000",
			"/brand-services/brand/manifest/sponsor2-stage.dev-pruebas.com:3000",
			"/brand-services/brand/theme/sponsor1-stage.dev-pruebas.com",
			"/brand-services/brand/theme/sponsor2-stage.dev-pruebas.com",
			"/brand-services/brand/theme/{brand}",
		],
	};
	res.status(200).json(message);
});

app.get("/brand-services/brand/theme/:brand", (req, res) => {
	const { brand } = req.params;
	res.json(themes[brand] ?? themes.default);
});
app.get(
	"/brand-services/brand/assets/sponsor1-stage.dev-pruebas.com",
	(req, res) => {
		const content = {
			logo: {
				url: "https://www.banamex.com/assets/globals/img/apps/IconCiti.png",
				type: "img",
			},
		};
		res.status(200).json(content);
	}
);
// Serve static files from the 'assets' directory
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Define an endpoint to serve images
app.get("/Liberty_logo_png", (req, res) => {
	// Send the image file as a response
	res.sendFile(path.join(__dirname, "assets", "Liberty_logo.png"));
});
app.get("/LOGO_UNIVERSO_HOGAR_png", (req, res) => {
	res.sendFile(path.join(__dirname, "assets", "LOGO_UNIVERSO HOGAR.png"));
});
app.get("/LOGO_UNIVERSO_HOGAR_svg", (req, res) => {
	res.sendFile(path.join(__dirname, "assets", "LOGO_UNIVERSO HOGAR.svg"));
});
app.get("/manual_liberty_pdf", (req, res) => {
	res.sendFile(path.join(__dirname, "assets", "Manual de marca Liberty.pdf"));
});

app.get(
	"/brand-services/brand/assets/sponsor2-stage.dev-pruebas.com",
	(req, res) => {
		const santanderContent = {
			logo: {
				url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ednd9glCeH0BP5kZGB9R86ZVSYFrt2-X6P8_i9k1xQ&s",
				type: "img",
			},
		};
		res.status(200).json(santanderContent);
	}
);
app.get(
	"/brand-services/brand/contacts/sponsor1-stage.dev-pruebas.com",
	(req, res) => {
		const banamex = {
			error_phone: "080012221222",
			email: "test@banamex.com",
			wpp: "http://wa.me/522222222",
			phone: "521122340123",
		};
		res.status(200).json(banamex);
	}
);
app.get(
	"/brand-services/brand/contacts/sponsor2-stage.dev-pruebas.com",
	(req, res) => {
		const santanderContent = {
			error_phone: "44524240",
			email: "test@test.mx",
			wpp: "http://wa.me/44524240",
			phone: "44525250",
		};
		res.status(200).json(santanderContent);
	}
);
app.get(
	"/brand-services/brand/manifest/sponsor1-stage.dev-pruebas.com:3000",
	(req, res) => {
		const manifest = {
			name: "Iké",
			short_name: "Iké",
			description: "Gestioná tus servicios con Iké",
			icons: [
				{
					src: "icons/android/android-launchericon-512-512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "icons/android/android-launchericon-192-192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "any maskable",
				},
				{
					src: "icons/android/android-launchericon-48-48.png",
					sizes: "48x48",
					type: "image/png",
				},
				{
					src: "icons/android/android-launchericon-72-72.png",
					sizes: "72x72",
					type: "image/png",
				},
			],
		};
		res.status(200).json(manifest);
	}
);
app.get(
	"/brand-services/brand/manifest/sponsor2-stage.dev-pruebas.com:3000",
	(req, res) => {
		const manifest = {
			name: "Iké",
			short_name: "Iké",
			description: "Gestioná tus servicios con Iké",
			icons: [
				{
					src: "icons/android/android-launchericon-512-512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "icons/android/android-launchericon-192-192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "any maskable",
				},
				{
					src: "icons/android/android-launchericon-48-48.png",
					sizes: "48x48",
					type: "image/png",
				},
				{
					src: "icons/android/android-launchericon-72-72.png",
					sizes: "72x72",
					type: "image/png",
				},
			],
		};
		res.status(200).json(manifest);
	}
);
app.get(
	"/brand-services/brand/theme/sponsor1-stage.dev-pruebas.com",
	(req, res) => {
		const santanderContent = {
			primary: {
				100: "#4D4D4D",
				75: "#797979",
				50: "#A6A6A6",
				25: "#D2D2D2",
			},
			secondary: {
				25: "#59A1EC",
				100: "#76B4EC",
				200: "#8DC3EC",
				300: "#A3D2EC",
				500: "#0059b3",
				600: "#004AA3",
				800: "#003B8F",
			},
			tertiary: {
				100: "#E06A6A",
				75: "#E58282",
				50: "#E99A9A",
				25: "#ECB1B1",
			},
			progressColors: {
				25: "#FF5933",
				100: "#FF7A66",
				200: "#FF9B99",
				300: "#FFBCCB",
				500: "#FFDEDE",
				600: "#F9E8E8",
				800: "#F2F2F2",
			},
			success: {
				normal: "#FF9B99",
				light: "#FFE4E4",
			},
			error: {
				normal: "#FF1F1F",
				light: "#FF9999",
			},
			brandStatus: {
				normal: "#EC0000",
				violet: "#FFDEDE",
			},
			gray: {
				200: "#373744",
				100: "#666666",
				75: "#8C8C8C",
				50: "#B3B3B3",
				25: "#D9D9D9",
				10: "#EBEBEB",
				5: "#E2E8F0",
				0: "#FFFFFF",
			},
			services: {
				vial: "#FF8C66",
				hogar: "#FFBD99",
				mascotas: "#FFC166",
				bicicletas: "#FFB199",
				default: "#FFDEDE",
			},
		};
		res.status(200).json(santanderContent);
	}
);
app.get(
	"/brand-services/brand/theme/sponsor2-stage.dev-pruebas.com",
	(req, res) => {
		const santanderContent = {
			primary: {
				100: "#4D4D4D",
				75: "#797979",
				50: "#A6A6A6",
				25: "#D2D2D2",
			},
			secondary: {
				25: "#E56F6F",
				100: "#EC8D8D",
				200: "#EAA4A4",
				300: "#E7BBBB",
				500: "#EC0000",
				600: "#D10000",
				800: "#B70000",
			},
			tertiary: {
				100: "#E06A6A",
				75: "#E58282",
				50: "#E99A9A",
				25: "#ECB1B1",
			},
			progressColors: {
				25: "#FF5933",
				100: "#FF7A66",
				200: "#FF9B99",
				300: "#FFBCCB",
				500: "#FFDEDE",
				600: "#F9E8E8",
				800: "#F2F2F2",
			},
			success: {
				normal: "#FF9B99",
				light: "#FFE4E4",
			},
			error: {
				normal: "#FF1F1F",
				light: "#FF9999",
			},
			brandStatus: {
				normal: "#EC0000",
				violet: "#FFDEDE",
			},
			gray: {
				200: "#373744",
				100: "#666666",
				75: "#8C8C8C",
				50: "#B3B3B3",
				25: "#D9D9D9",
				10: "#EBEBEB",
				5: "#E2E8F0",
				0: "#FFFFFF",
			},
			services: {
				vial: "#FF8C66",
				hogar: "#FFBD99",
				mascotas: "#FFC166",
				bicicletas: "#FFB199",
				default: "#FFDEDE",
			},
		};
		res.status(200).json(santanderContent);
	}
);
app.get(
	"/users/policy/documents/sponsor2-stage.dev-pruebas.com",
	(req, res) => {
		const santanderContent = [
			{ value: "DNI", name: "DNI", accountId: "santander0" },
			{ value: "CUIT", name: "CUIT", accountId: "santander1" },
			{ value: "PASAPORTE", name: "Pasaporte", accountId: "santander2" },
			{
				value: "CEDULA DE IDENTIDAD",
				name: "Cédula de identidad",
				accountId: "santander3",
			},
			{
				value: "LIBRETA CIVICA",
				name: "Libreta cívica",
				accountId: "santander4",
			},
			{
				value: "LIBRETA DE ENROLAMIENTO",
				name: "Libreta de enrolamiento",
				accountId: "santander5",
			},
		];
		res.status(200).json(santanderContent);
	}
);
app.get(
	"/users/policy/documents/sponsor1-stage.dev-pruebas.com",
	(req, res) => {
		const banamexContent = [
			{ value: "ID", name: "Identification", accountId: "banamex1" },
			{ value: "TEST1", name: "Test one", accountId: "banamex2" },
			{ value: "PASSPORT", name: "Passport", accountId: "banamex3" },
		];
		res.status(200).json(banamexContent);
	}
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

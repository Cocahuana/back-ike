const express = require("express");
const themes = require("./themes");
const app = express();
const cors = require("cors"); // Import the cors package
const path = require("path");
const multer = require("multer");
const fs = require('fs');
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
app.get("/LOGO_IKE_png", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "LOGO_IKE.png"));
});
app.get("/brand-services/brand/theme/:brand", (req, res) => {
	const { brand } = req.params;
	res.json(themes[brand] ?? themes.default);
});
app.get("/brand-services/brand/assets/ike.banamex.com", (req, res) => {
	const content = {
		logo: {
			url: "https://www.banamex.com/assets/globals/img/apps/IconCiti.png",
			type: "img",
		},
	};
	res.status(200).json(content);
});
app.get("/brand-services/brand/assets/ike.santander.com", (req, res) => {
	const santanderContent = {
		logo: {
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ednd9glCeH0BP5kZGB9R86ZVSYFrt2-X6P8_i9k1xQ&s",
			type: "img",
		},
	};
	res.status(200).json(santanderContent);
});
app.get("/brand-services/brand/contacts/ike.banamex.com", (req, res) => {
	const banamex = {
		error_phone: "080012221222",
		email: "test@banamex.com",
		wpp: "http://wa.me/522222222",
		phone: "521122340123",
	};
	res.status(200).json(banamex);
});
app.get("/brand-services/brand/contacts/ike.santander.com", (req, res) => {
	const santanderContent = {
		error_phone: "44524240",
		email: "test@test.mx",
		wpp: "http://wa.me/44524240",
		phone: "44525250",
	};
	res.status(200).json(santanderContent);
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



// Configurar Multer para almacenar las imágenes en una carpeta "uploads"
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
	},
	filename: (req, file, cb) => {
	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
	  cb(null, uniqueSuffix + path.extname(file.originalname)); // Nombre único para cada archivo
	},
  });
  
  // Configurar Multer
  const upload = multer({ 
	storage: storage,
	fileFilter: (req, file, cb) => {
	  // Validar el tipo de archivo
	  const fileTypes = /jpeg|jpg|png|gif/;
	  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
	  const mimetype = fileTypes.test(file.mimetype);
  
	  if (extname && mimetype) {
		return cb(null, true);
	  } else {
		cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, gif)'));
	  }
	},
	limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB
  });

	// Crear la carpeta "uploads" si no existe
	const uploadsDir = path.join(__dirname, 'uploads');

	if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir, { recursive: true });
	console.log('Carpeta "uploads" creada.');
	} else {
	console.log('Carpeta "uploads" ya existe.');
	}
  
  // Middleware para manejar errores de Multer
  app.use((err, req, res, next) => {
	if (err instanceof multer.MulterError) {
	  return res.status(400).json({ error: err.message });
	} else if (err) {
	  return res.status(400).json({ error: err.message });
	}
	next();
  });
  
  // Ruta para cargar imágenes
  app.post('/upload', upload.single('image'), (req, res) => {
	try {
	  if (!req.file) {
		return res.status(400).json({ message: 'No se proporcionó ningún archivo' });
	  }
	  res.status(200).json({ 
		message: 'Imagen cargada exitosamente',
		filePath: `/uploads/${req.file.filename}`,
	  });
	} catch (error) {
	  res.status(500).json(error);
	}
  });
  
  // Servir las imágenes cargadas
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  

// Ruta para listar las imágenes
app.get('/repositoryImages', (req, res) => {
	try {
	  const directoryPath = path.join(__dirname, 'uploads');
	  fs.readdir(directoryPath, (err, files) => {
		if (err) {
		  return res.status(500).json({ error: 'Error al leer la carpeta de imágenes' });
		}
		const imagePaths = files.map((file) => `/uploads/${file}`);
		res.status(200).json(imagePaths);
	  });
	} catch (error) {
	  res.status(500).json(error);
	}
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});

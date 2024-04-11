const express =require("express");
const app = express();
const PORT = 3001;



app.get("/users/policy/documents/ike.santander.com", (req, res) => {
    const santanderContent = [
        { "value": "DNI", "name": "DNI" },
        { "value": "CUIT", "name": "CUIT" },
        { "value": "PASAPORTE", "name": "Pasaporte" },
        { "value": "CEDULA DE IDENTIDAD", "name": "Cédula de identidad" },
        { "value": "LIBRETA CIVICA", "name": "Libreta cívica" },
        { "value": "LIBRETA DE ENROLAMIENTO", "name": "Libreta de enrolamiento" }
    ];
    res.json(santanderContent);
});
app.get("/users/policy/documents/ike.banamex.com", (req, res) => {
    const banamexContent = [
        { "value": "ID", "name": "Identification" },
        { "value": "TEST1", "name": "Test one" },
        { "value": "PASSPORT", "name": "Passport" }
    ];
    res.json(banamexContent);
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
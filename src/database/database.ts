var admin = require("firebase-admin");

var serviceAccount = require("C:\\Users\\Daniel\\Documentos\\GitHub\\serverNodeFirebase\\src\\database\\fbsecretkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-server-1c823.firebaseio.com"
});

const database = admin.database()
export default database;
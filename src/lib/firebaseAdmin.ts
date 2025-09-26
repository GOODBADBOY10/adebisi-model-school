import admin from "firebase-admin";
import { readFileSync } from "fs";

// Load Firebase Admin credentials
const serviceAccount = JSON.parse(
    readFileSync("./serviceAccountKey.json", "utf8")
);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}


export const db = admin.firestore();


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });
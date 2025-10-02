import admin from "firebase-admin";
import { readFileSync } from "fs";

// Load Firebase Admin credentials
// const serviceAccount = JSON.parse(
//     readFileSync("./serviceAccountKey.json", "utf8")
// );

// if (!admin.apps.length) {
//     admin.initializeApp({
//         credential: admin.credential.cert(serviceAccount),
//     });
// }


if (!admin.apps.length) {
  const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!serviceAccountEnv) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT environment variable");
  }

  const serviceAccount = JSON.parse(serviceAccountEnv);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}


export const db = admin.firestore();
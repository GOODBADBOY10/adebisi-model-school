import admin from "firebase-admin";
import { readFileSync } from "fs";

// Load Firebase Admin credentials
const serviceAccount = JSON.parse(
    readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedData() {
    const studentRef = db.collection("students").doc("john@example.com");

    await studentRef.set({
        email: "john@example.com",
        year: "2024", // academic year
        class: "SS2", // one from your list
        firstName: "John",
        results: {
            firstTerm: [
                { subject: "Math", score: 85, grade: "A" },
                { subject: "English", score: 78, grade: "B+" },
            ],
            secondTerm: [],
            thirdTerm: [],
        },
    });

    console.log("✅ Student data added!");
}

seedData().catch(console.error);
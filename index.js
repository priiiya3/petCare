const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const admin = require('firebase-admin');

app.use(cors());

const serviceAccount = require('./the-secret-322708-firebase-adminsdk-vtp9m-4fe87906a0.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });


app.use(express.static('main/build'));

app.get('/users', (req, res) => {
    const db = admin.firestore();

    db.collection('users').get()
        .then(documents => {
            const pets = [];
            documents.forEach(doc => {
                pets.push(doc.data());
            });
            res.status(200).send(pets);
        })
        .catch(err => {
            console.log('Error getting documents', err);
            res.status(500).send('Error getting documents');
        });
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

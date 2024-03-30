const express = require('express');
const app = express();
const CORS = require('cors');
const PORT = 9000;
const mongoose = require('mongoose');
const UsersDb = require('./Models/Users');
const ExpertDb = require('./Models/Experts');
const ClientDb = require('./Models/Clients');

app.use(express.json());
app.use(CORS({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true

}))


mongoose.connect("mongodb://0.0.0.0:27017/ConsultX").then(() => {
    console.log("Connected To MongoDBCompass");
}).catch((err) => {
    console.log(`${err} is Occured!!`);
})

app.get("/", (req, res) => {
    res.send("<h1>Welcome to To Server Baby</h1>");
})

app.post("/CheckRole", async (req, res) => {
    const UserEmail = req.body.Email;

    try {
        const OneUser = await UsersDb.find({ Email: UserEmail });
        if (OneUser) {
            res.send(OneUser[0].Role);
        } else {
            res.send("");
        }
    } catch {
        res.send("");
    }

})

app.post('/RegisterUser', async (req, res) => {
    const WebsiteUser = req.body.User;

    const Newuser = new UsersDb({
        Name: WebsiteUser.Name,
        Email: WebsiteUser.Email,
        Role: WebsiteUser.Role
    })

    Newuser.save().then(() => {
        console.log(`New User Has Been Added to UsersDB`);
    }).catch((err) => {
        console.log(`Error While Saving UserResponses : ${err}`)
    })

    if (WebsiteUser.Role === "Expert") {

        const NewExperts = new ExpertDb({
            Name: WebsiteUser.Name,
            Email: WebsiteUser.Email,
            FilledProfile: false
        })

        NewExperts.save().then(() => {
            console.log(`New Expert Has Been Added to ExpertDB`);
        }).catch((err) => {
            console.log(`Error While Saving UserResponses : ${err}`)
        })

    } else if (WebsiteUser.Role === "Client") {

        const NewClient = new NewClient({
            Name: WebsiteUser.Name,
            Email: WebsiteUser.Email,
            FilledProfile: false
        })

        NewClient.save().then(() => {
            console.log(`New Client Has Been Added to ClientsDB`);
        }).catch((err) => {
            console.log(`Error While Saving UserResponses : ${err}`)
        })
    } else {
        console.log("No UserRole is Defined For That");
    }

    res.send("ok");

})

app.post("/CheckFilledProfile", async (req, res) => {
    const UserMail = req.body.UserEmail;
    ExpertDb.findOne({ Email: UserMail }).then((item) => {
        res.send(item.FilledProfile);
    }).catch((err) => {
        console.log(`${err} is Occured`);
    })

})

app.post("/UpdateExpertProfile", async (req, res) => {
    const UserMail = req.body.UserEmail;
    const UpdateData = req.body.UpdateData;

    const query = { Email: UserMail };
    const update = { $set: { ExpertFees: UpdateData.ExpertFees, FilledProfile: true, Expertise: UpdateData.ExpertiseSector, PhoneNumber: UpdateData.PhoneNumber, UploadedQrURL: UpdateData.UploadedFile } };

    ExpertDb.findOneAndUpdate(query, update)
        .then(updatedDocument => {
            console.log("Updated document:", updatedDocument);
            res.send(updatedDocument)
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });


})



app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})
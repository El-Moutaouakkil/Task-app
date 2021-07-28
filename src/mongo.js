import { MongoClient } from "mongodb";
// const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "task-manager";
let db;
client.connect((error, client) => {
    if (error) {
        console.log(error);
    } else {
        console.log("connected succesfully");
    }
    db = client.db(dbName);
});

db.collection("users").insertOne({
    name: "salma",
    age: 17,
});

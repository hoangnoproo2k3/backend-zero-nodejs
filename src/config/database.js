
const mongoose = require('mongoose');
require('dotenv').config()

// test connection
const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
]
const connection = async () => {
    try {
        console.log('check');
        await mongoose.connect('mongodb://root:123456@localhost:27017/');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connection
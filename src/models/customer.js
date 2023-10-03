const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}, { timestamps: true });
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer
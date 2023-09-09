const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sakshambhugra:Ilike102@cluster0.x32gvme.mongodb.net/scholaryou?retryWrites=true&w=majority');
  console.log("database connected")
}

const userSchema = new mongoose.Schema({
    firstName:{type:String,
      required:true},
    lastName:{type:String,
        required:false},
    username:{type:String,
        required:true,
        unique:true},
    password:{type:String,
        required:true}
})

const users = new mongoose.model('users',userSchema);

module.exports = users;
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new schema({
    name: {type: String,},
    user_id:{type:schema.Types.ObjectId,ref:'mission'},
    email:{
        type: String,
        require:true,
        unique: true,
        lowercase:true,
        validate: [emailValidator,'incorrect mail format']
    },
    password:{type:String, require: true},
});

function emailValidator(value){
    return /^.+@.+\..+$/.test(value);
}
// userSchema.pre('save', async function(next){
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const passwordHash = await bcrypt.hash(this.password, salt);
//         this.password = passwordHash;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });
// userSchema.methods.isPasswordValid = async function(value){
//     try {
//         console.log(value);
//         console.log(this.password);
//         return await bcrypt.compare(value,this.password)
//     } catch (error) {
//         throw new Error(error);
//     }
// };

module.exports = mongoose.model('user', userSchema);

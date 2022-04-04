const {User} = require('../models');

const auth = async (req, res, next)=> {
    try {
        const user = await User.find({});
        console.log("User"+user)
    } catch (error) {
console.log("error")        
}
next();
    }


module.exports = {auth};
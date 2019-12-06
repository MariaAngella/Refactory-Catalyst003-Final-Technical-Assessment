const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

/* Creating a Database Schema....schema should be the same format as req.body */
const registerSchema = new mongoose.Schema({
  studentsurname: {
    type: String,
    
  },

  studentgivengender: {
    type: String,
   
   
  },
  studentage: {
    type: String,
    
  },
  studentcountry: {
    type: String,
   
  },

  studentresidence: {
    type: String,
    
  },
  studentphone: {
    type: String,
 
  },
  studentemail: {
    type: String,
    
  },

  studentskills: {
    type: String,
    
  },
  studentprojects: {
    type: String,
    
  },
/*   staffpassword: String,
  staffgender: String,
  staffemailaddress: String,
  staffusername: String,
  stafflastname: String,
  stafffirstname: String */
});


/* registerSchema.pre("save", function(next) {
  this.staffpassword = bcryptjs.hashSync(this.staffpassword, 10);
  next();
});

registerSchema.statics.authenticate = async function(
  staffusername,
  staffpassword
) {
  const user = await this.findOne({ staffusername: staffusername });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(staffpassword, user.staffpassword);
  if (match) {
    return user;
  }
}; */

//create a model
module.exports = mongoose.model("Staff", registerSchema);

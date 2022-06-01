const mongoose = require('mongoose') ; 


const User = new mongoose.Schema (
    {
        name : { type : String  }  , 
        email : {type : String  }  ,
        password : {type : String  }, 
        role : {type : String , default :'guest'}  ,
    }
)

module.exports = mongoose.model ('User' , User) ;


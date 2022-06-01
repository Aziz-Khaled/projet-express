const User = require ('../Models/user')



exports.getUser = async(req,res)=>{
    try {
        const data = await User.find().exec()
        res.status(200).json({"contact":data})
    } catch (error) {
        res.status(504).json({"msg":error})
    }
}

exports.deleteUser = async(req,res)=>{
    User.findByIdAndRemove(req.params.id,(err)=>{
        err? res.status(504).send(err):res.status(200).send('contact deleted')
    })
}


exports.updateUser = async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    const name = req.body;
    console.log(name)
    try {
        await User.findByIdAndUpdate({_id:id},{$set:{name:name}})
        res.status(200).send({msg:"data updated...."})
    } catch (error) {
        res.status(500).send({msg:"server error"})
        console.log(error)
    }
}


exports.addUser = async(req,res)=>{
    try {
        console.log(req.body)
        const name= req.body ; 
        const newName = new User({name});
        const contact  = await newName.save();
        res.status(200).send({msg:"user added",todo:contact})
    } catch (error) {
        res.send('server error')
        console.log(error)
    }
    }



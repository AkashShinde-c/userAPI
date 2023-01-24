const getAllUsers = async(req,res) => {
    res.status(200).json({msg:"Works"})
};

module.exports = getAllUsers;
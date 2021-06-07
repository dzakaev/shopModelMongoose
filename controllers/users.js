const user = require('../models/User');

const controllers = {
    userPost: async (req, res) => {
        const userPt = await new user({
            name: req.body.name,
            login: req.body.login,
            password: req.body.password,
            email: req.body.email
        })
        await userPt.save()
        res.json(userPt)
    },
    userDelete: async (req, res) => {
        const userDel = await user.findByIdAndDelete(req.params.id)
        res.json(userDel)
    }
}
module.exports = controllers
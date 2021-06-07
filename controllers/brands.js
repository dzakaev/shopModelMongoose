const brands = require('../models/Brand');


const controllers = {
    postBrand: async (req, res) => {
        const post = await new brands ({
            name: req.body.name,
        })
        await post.save()
        res.json(post)
    },
    patchBrand: async (req, res) => {
        const patchBr = await brands.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(patchBr)
    },
    deleteBrand: async (req, res) => {
        const deleteBr = await brands.findByIdAndDelete(req.params.id)
        res.json(deleteBr)
    },
}

module.exports = controllers



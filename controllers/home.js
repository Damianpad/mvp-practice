const itemList = require('../models/items')

module.exports = {
    getIndex: async (req,res) => {
        try {
            const items = await itemList.find()
            res.render('index.ejs', {itemList: items})
        }catch (err) {
            return res.status(500).send(err)

        }
    },
    createItem: async (req,res) => {
        const newItem = new itemList(
            {
                textInput: req.body.textInput,
                numInput: req.body.numInput
            }
        )
        try {
            await newItem.save()
            console.log(newItem)
            res.redirect('/')
        }catch(err){
            return res.status(500).send(err)
            res.redirect('/')
        }
    }
}
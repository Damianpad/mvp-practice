const clientList = require('../models/clients')

module.exports = {
    getEdit: async (req,res) => {
        // const id = req.params.id
        // console.log(id)
        try {
            console.log('client edited');
            const clients = await clientList.find()
            res.render('edit.ejs', {clientList: clients})
        }catch (err) {
            return res.status(500).send(err)
        }
    }
}
const clientList = require('../models/clients')

module.exports = {
    getClient: async (req,res) => {
        try {
            const clients = await clientList.find()
            res.render('index.ejs', {clientList: clients})
        }catch (err) {
            return res.status(500).send(err)
        }
    },
    createClient: async (req,res) => {
        const newClient = new clientList (
            {
                clientName: req.body.clientName,
                clientPhone: req.body.clientPhone
            }
        )
        try {
            await newClient.save()
            console.log(newClient)
            res.redirect('/')
        }catch(err) {
            return res.status(500).send(err)
            res.redirect('/')
        }
    }
}
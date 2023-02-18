const clientList = require('../models/clients')

module.exports = {
    getEdit: async (req,res) => {
        const id = req.params.id
        console.log(id)
        try {
            console.log('client edited');
            const clients = await clientList.find()
            res.render('edit.ejs', {clientList: clients, idItem: id})
        }catch (err) {
            return res.status(500).send(err)
        }
    },
    deleteClient: async (req,res) => {
        const id = req.params.id
        try {
            console.log('client Deleted')
            const result = await clientList.findByIdAndDelete(id)
            console.log(result)
            res.redirect('back')
        } catch(err){
            return res.status(500).send(err)
        }
    },
    updateClient: async (req,res) => {
        const id = req.params.id
        try {
            await clientList.findByIdAndUpdate(
                id,
                {
                  clientName: req.body.clientName,
                  clientEmail: req.body.clientEmail,
                  clientPhone: req.body.clientPhone 
                },
                )
                res.redirect('/')
        } catch(err){
            return res.status(500).send(err)
        }
    }
}
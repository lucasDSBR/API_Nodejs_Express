module.exports = app => {
    const customerWalletsDB = app.data.customerWallets;
    const controller = {};

    const {
        customerWallets: customerWalletsMock,
    } = customerWalletsDB;

    
    controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

    controller.postCustomerWallets = (req, res) => {
        customerWalletsMock.data.push({
            parentId: req.body.parentId,
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,
            createdAt: new Date()
        })
        res.status(201).json({"sucesso":"usuario cadastrdo com sucesso!"});
    }

    controller.deleteCustomerWallets = (req, res) => {
        console.log(req.params)

        const valor = customerWalletsMock.data.findIndex(custom => custom.id === req.params.id)

        res.status(201).json(valor);
    }
    return controller;
}
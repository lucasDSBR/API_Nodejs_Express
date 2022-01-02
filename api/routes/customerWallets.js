module.exports = app => {
    const controller = app.controllers.customerWallets

    app.route('/api/v1/customer-wallets')
    .get(controller.listCustomerWallets);

    app.route('/api/v1/customer-wallets')
    .post(controller.postCustomerWallets);

    app.route('/api/v1/customer-wallets/:id')
    .delete(controller.deleteCustomerWallets);
}
module.exports = (name, callback) => {
    const Service = require('san-cli-service');
    const service = new Service(name, {
        mode: 'test'
    });

    service.run(callback);
    return service;
};

module.exports = (async()=>{
    const service = require('./service')('test:unit');

    await service.run();

    return service.getWebpackConfig();
})();

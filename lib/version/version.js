module.exports = {
    command: 'version',
    shortDescription: 'Print studio cli version',
    usageText: undefined,
    longDescription: undefined,
    options: [],
    run: function () {
        console.log('studio-cli v' + require('../../package.json').version);
    }
};
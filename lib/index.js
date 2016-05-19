var version = require('./version/version');

var commands = [version];
var runMap = {};

module.exports.register = registerCommands;

function registerCommands(program) {
    commands.forEach(function (c) {
        var cmd = program.addCmd(c.command, c.shortDescription, c.usageText, c.longDescription);

        runMap[c.command] = c.run;

        if (Array.isArray(c.options) && c.options.length > 0) {
            c.options.forEach(function (opt) {
                cmd.addOpt(opt.shortcut, opt.fullName, opt.description, opt.configuration);
            });
        }
    });
}

module.exports.run = runMap;
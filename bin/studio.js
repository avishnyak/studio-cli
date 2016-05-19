var Program = require('wiz-cliparse');
var commands = require('../lib');

var prg = new Program('studio',
    'Monitor, start & stop Studio microservices',
    '[global-options] [command] [command-options] [arguments]');

prg.addOpt('v',
    'verbose',
    'Enable verbose output');

commands.register(prg);

prg.addHelp('Print usage information');

try {
    var res = prg.parse();
} catch (e) {
    console.error('Unrecognized command.  Try `studio -h` or `studio help command` for help.');
    process.exit();
}

if(res.gopts.has('h') || res.cmd === 'help') {
    prg.printHelp(res);
    process.exit();
}

commands.run[res.cmd](res);

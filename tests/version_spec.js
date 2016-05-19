var expect = require('chai').expect;
require('mocha-sinon');

describe('Version command', function () {
    var version = require('../lib/version/version');

    beforeEach(function () {
        this.sinon.stub(console, 'log');
    });

    it('prints version to console', function () {
        version.run();

        expect(console.log.calledOnce ).to.be.true;
        expect(console.log.calledWith('studio-cli v' + require('../package.json').version)).to.be.true;
    });
});
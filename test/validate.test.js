const assert = require('yeoman-assert');

const { validateEmail, validateName } = require('../generators/app/validate');

describe('Validate Tests', () => {
    it('should return true with name', (done) => {
        const message = validateName('Gabriel Santos');

        assert.equal(message, true);

        done();
    });

    it('should return an error without name', (done) => {
        const message = validateName('');

        assert.equal(message, 'Enter your name');

        done();
    });

    it('should return true with email', (done) => {
        const message = validateEmail('robertoachar@gmail.com');

        assert.equal(message, true);

        done();
    });

    it('should return an error without email', (done) => {
        const message = validateEmail('');

        assert.equal(message, 'Enter your email');

        done();
    });
});

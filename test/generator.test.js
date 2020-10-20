const assert = require('yeoman-assert');
const test = require('yeoman-test');
const path = require('path');

const files = require('../generators/app/files.json');

describe('Generator Tests', () => {
    const prompts = {
        project: 'blip-plugin-project',
        description: 'Blip plugin project',
        name: 'Gabriel Santos',
        email: 'gabrielrsantoss@icloud.com'
    };
    beforeAll((done) => {
        test.run(path.join(__dirname, '../generators/app'))
            .withPrompts(prompts)
            .on('end', done);
    });

    it('should create a project', (done) => {
        files.forEach((file) => {
            assert.file(
                file.destination.replace(/<%= project %>/g, prompts.project)
            );
        });

        done();
    });
});

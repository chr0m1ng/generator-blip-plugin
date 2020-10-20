import Generator from 'yeoman-generator';
import files from './files.json';
import dependencies from './dependencies.json';
import { validateEmail, validateName } from './validate';

class BlipApiGenerator extends Generator {
    initializing() {
        this.log('🔌 Blip Plugin Generator 🪀');
        this.log(
            "✨ Made by Gabriel Rodrigues and based on Robert Achar's generator"
        );
        this.log();
    }

    prompting() {
        const done = this.async();

        const prompts = [
            {
                type: 'input',
                name: 'project',
                message: '📚 What is the name of your project?',
                default: 'blip-plugin'
            },
            {
                type: 'input',
                name: 'description',
                message: '📖 What is the description of your project?',
                default: 'A blip plugin project'
            },
            {
                type: 'input',
                name: 'name',
                message: '📋 What is your name?',
                validate: validateName,
                store: true
            },
            {
                type: 'input',
                name: 'email',
                message: '✉️ What is your email?',
                validate: validateEmail,
                store: true
            }
        ];

        this.prompt(prompts).then((props) => {
            this.props = props;
            done();
        });
    }

    writing() {
        this.log();
        this.log('🚀 Generating project...');
        this.log();

        const { project, description, name, email } = this.props;
        const templates = {
            project,
            description,
            name,
            email,
            year: new Date().getFullYear()
        };

        files.forEach((file) => {
            this.fs.copyTpl(
                this.templatePath(file.template),
                this.destinationPath(file.destination),
                templates
            );
        });
    }

    install() {
        this.log();
        this.log('📦 Installing dependencies...');
        this.log();

        this.npmInstall(dependencies);
    }

    end() {
        this.log();
        this.log('🎉 Successfully generated!');
    }
}

export default BlipApiGenerator;

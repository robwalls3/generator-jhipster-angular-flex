/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityClientGenerator = require('generator-jhipster/generators/entity-client');
const mainFiles = require('./files').getMainFiles;
const testFiles = require('./files').getTestFiles;

const mainTemplates = 'angular';
const testTemplates = 'angular';

module.exports = class extends EntityClientGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important

        this.frontendAppName = this.getFrontendAppName();

        if (!this.jhipsterContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint angular-flex')}`);
        }
    }

    get initializing() {
        // Here we are not overriding this phase and hence its being handled by JHipster

        return super._initializing();
    }

    get prompting() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._prompting();
    }

    get configuring() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._configuring();
    }

    get default() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._default();
    }

    get writing() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        const customPostPhaseSteps = {
            writeFiles() {
                // Overwrite:
                this.log('\n');
                this.log(`Writing from ${this.CLIENT_TEST_SRC_DIR} and ${this.CLIENT_MAIN_SRC_DIR}`);
                this.log('Creating cards and layouts for an entity...');

                this.writeFilesToDisk(mainFiles(`${this.CLIENT_MAIN_SRC_DIR}/app/`), this, false, mainTemplates);
                this.writeFilesToDisk(testFiles(this.CLIENT_TEST_SRC_DIR), this, false, testTemplates);
            }
        };

        return {
            ...super._writing(),
            ...customPostPhaseSteps
        };
    }

    get install() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._install();
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }
};

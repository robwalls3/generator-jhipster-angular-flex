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

        if (!this.jhipsterContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint angular-flex')}`);
        }
    }

    get initializing() {
        /**
         * Any method beginning with _ can be reused from the superclass `EntityClientGenerator`
         *
         * There are multiple ways to customize a phase from JHipster.
         *
         * 1. Let JHipster handle a phase, blueprint doesnt override anything.
         * ```
         *      return super._initializing();
         * ```
         *
         * 2. Override the entire phase, this is when the blueprint takes control of a phase
         * ```
         *      return {
         *          myCustomInitPhaseStep() {
         *              // Do all your stuff here
         *          },
         *          myAnotherCustomInitPhaseStep(){
         *              // Do all your stuff here
         *          }
         *      };
         * ```
         *
         * 3. Partially override a phase, this is when the blueprint gets the phase from JHipster and customizes it.
         * ```
         *      const phaseFromJHipster = super._initializing();
         *      const myCustomPhaseSteps = {
         *          displayLogo() {
         *              // override the displayLogo method from the _initializing phase of JHipster
         *          },
         *          myCustomInitPhaseStep() {
         *              // Do all your stuff here
         *          },
         *      }
         *      return Object.assign(phaseFromJHipster, myCustomPhaseSteps);
         * ```
         */
        // Here we are not overriding this phase and hence its being handled by JHipster

        const phaseFromJHipster = super._initializing();
        const myCustomPhaseSteps = {
            myFirstStep() {
                // do nothing of course.
            }
        };
        return Object.assign(phaseFromJHipster, myCustomPhaseSteps);
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
            overwriteComponent() {
                // Overwrite:
                this.log('\n');
                this.log(`Writing from ${this.CLIENT_TEST_SRC_DIR} and ${this.CLIENT_MAIN_SRC_DIR}`);
                this.log(`Creating cards and layouts for ${this.entityName}...`);

                this.writeFilesToDisk(mainFiles(this.CLIENT_MAIN_SRC_DIR), this, false, mainTemplates);
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

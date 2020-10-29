module.exports = {
    getMainFiles,
    getTestFiles
};

function getMainFiles(ANGULAR_DIR) {
    return {
        client: [
            {
                condition: generator => !generator.embedded,
                path: ANGULAR_DIR,
                templates: [
                    {
                        file: 'entities/entity-management.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.html`
                    },
                    {
                        file: 'entities/entity-management.module.ts',
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.module.ts`
                    },
                    {
                        file: 'entities/entity-management.component.ts',
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.ts`
                    }
                ]
            }
        ]
    };
}

function getTestFiles(CLIENT_TEST_SRC_DIR) {
    return {
        test: [
            {
                condition: generator => !generator.embedded,
                path: CLIENT_TEST_SRC_DIR,
                templates: [
                    {
                        file: 'spec/app/entities/entity-management.component.spec.ts',
                        renameTo: generator =>
                            `spec/app/entities/${generator.entityFolderName}/${generator.entityFileName}.component.spec.ts`
                    }
                ]
            }
        ]
    };
}

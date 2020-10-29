const { CLIENT_TEST_SRC_DIR, ANGULAR_DIR } = this.constants;

const angularFiles = {
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
    ],
    test: [
        {
            condition: generator => !generator.embedded,
            path: CLIENT_TEST_SRC_DIR,
            templates: [
                {
                    file: 'spec/app/entities/entity-management.component.spec.ts',
                    renameTo: generator => `spec/app/entities/${generator.entityFolderName}/${generator.entityFileName}.component.spec.ts`
                }
            ]
        },
        {
            condition: generator => generator.protractorTests && !generator.embedded,
            path: CLIENT_TEST_SRC_DIR,
            templates: [
                {
                    file: 'e2e/entities/entity-page-object.ts',
                    renameTo: generator => `e2e/entities/${generator.entityFolderName}/${generator.entityFileName}.page-object.ts`
                },
                {
                    file: 'e2e/entities/entity.spec.ts',
                    renameTo: generator => `e2e/entities/${generator.entityFolderName}/${generator.entityFileName}.spec.ts`
                }
            ]
        }
    ]
};

module.exports = {
    angularFiles
};

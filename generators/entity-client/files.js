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
                        file: 'entities/entity-management-update.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-update.component.html`
                    },
                    {
                        file: 'entities/entity-management-update.component.ts',
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-update.component.ts`
                    },
                    {
                        file: 'entities/entity-management-update-dialog.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-update-dialog.component.html`
                    },
                    {
                        file: 'entities/entity-management-update-dialog.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-update-dialog.component.ts`
                    },
                    {
                        file: 'entities/entity-management.module.ts',
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.module.ts`
                    },
                    {
                        file: 'entities/entity-management.component.ts',
                        renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-shell.module.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${
                                generator.entityFileName
                            }-shell.module.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-shell.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${
                                generator.entityFileName
                            }-shell.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-shell.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${
                                generator.entityFileName
                            }-shell.component.html`
                    },
                    {
                        file: 'entities/entity-shell/entity-shell.component.scss',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${
                                generator.entityFileName
                            }-shell.component.scss`
                    },
                    {
                        file: 'entities/entity-shell/entity-book/entity-book.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-book/${
                                generator.entityFileName
                            }-book.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-book/entity-book.component.scss',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-book/${
                                generator.entityFileName
                            }-book.component.scss`
                    },
                    {
                        file: 'entities/entity-shell/entity-book/entity-book.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-book/${
                                generator.entityFileName
                            }-book.component.html`
                    },
                    {
                        file: 'entities/entity-shell/entity-book/entity-book-page/entity-book-page.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-book/${
                                generator.entityFileName
                            }-book-page/${generator.entityFileName}-book-page.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-book/entity-book-page/entity-book-page.component.scss',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-book/${
                                generator.entityFileName
                            }-book-page/${generator.entityFileName}-book-page.component.scss`
                    },
                    {
                        file: 'entities/entity-shell/entity-book/entity-book-page/entity-book-page.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-book/${
                                generator.entityFileName
                            }-book-page/${generator.entityFileName}-book-page.component.html`
                    },
                    {
                        file: 'entities/entity-shell/entity-grid/entity-grid.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-grid/${
                                generator.entityFileName
                            }-grid.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-grid/entity-grid.component.scss',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-grid/${
                                generator.entityFileName
                            }-grid.component.scss`
                    },
                    {
                        file: 'entities/entity-shell/entity-grid/entity-grid.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-grid/${
                                generator.entityFileName
                            }-grid.component.html`
                    },
                    {
                        file: 'entities/entity-shell/entity-grid/entity-card/entity-card.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-grid/${
                                generator.entityFileName
                            }-card/${generator.entityFileName}-card.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-grid/entity-card/entity-card.component.scss',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-grid/${
                                generator.entityFileName
                            }-card/${generator.entityFileName}-card.component.scss`
                    },
                    {
                        file: 'entities/entity-shell/entity-grid/entity-card/entity-card.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-grid/${
                                generator.entityFileName
                            }-card/${generator.entityFileName}-card.component.html`
                    },
                    {
                        file: 'entities/entity-shell/entity-list/entity-list.component.ts',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-list/${
                                generator.entityFileName
                            }-list.component.ts`
                    },
                    {
                        file: 'entities/entity-shell/entity-list/entity-list.component.scss',
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-list/${
                                generator.entityFileName
                            }-list.component.scss`
                    },
                    {
                        file: 'entities/entity-shell/entity-list/entity-list.component.html',
                        method: 'processHtml',
                        template: true,
                        renameTo: generator =>
                            `entities/${generator.entityFolderName}/${generator.entityFileName}-shell/${generator.entityFileName}-list/${
                                generator.entityFileName
                            }-list.component.html`
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

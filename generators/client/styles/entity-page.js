const pageHeader = {
    style: '#page-header {\n    font-size: 32px;\n    margin-right: 8px;\n    vertical-align: middle;\n}',
    comment: 'Entity Page Header Style'
};

const matToolbar = {
    style: '.mat-toolbar {\n    justify-content: space-between;\n}',
    comment: 'Material Toolbar Justification'
};

const containers = {
    style: `
    .two-toolbar-wrapper {
        overflow-y: auto;
        height: calc(100vh - 133px);
    }

    .grid-container {
        overflow-y: auto;
        height: calc(100vh - 138px);
    }

    .list-container {
        overflow-y: auto;
        height: calc(100vh - 138px);
    }`,
    comment: 'Grid/List Containers for scrolling'
};

module.exports = {
    pageHeader,
    matToolbar,
    containers
};

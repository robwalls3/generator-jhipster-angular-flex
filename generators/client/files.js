module.exports = {
    writeFiles
};

function writeFiles() {
    const APP_PATH = this.CLIENT_MAIN_SRC_DIR;

    this.log(`[Angular-Flex Debug] APP PATH: ${APP_PATH}`);

    this.copy('_dummy.txt', 'dummy.txt');
    this.copy('_material.module.ts', `${APP_PATH}/app/material/material.module.ts`);
    this.copy('_compare.ts', `${APP_PATH}/app/shared/util/compare.ts`);
}

const editor = grapesjs.init({
    height: '100%',
    showOffsets: 1,
    noticeOnUnload: 0,
    styleManager: {
        clearProperties: true,
    },
    avoidInlineStyle: 1,
    // storageManager: {
    //     type: 'remote',
    //     stepsBeforeSave: 1,
    //     urlStore: urlStore,
    //     urlLoad: urlLoad,
    //     params: {
    //         "_token": _token
    //     },
    // },
    container: '#editor',
    fromElement: true,
    assetManager: {
        multiUpload: false,
        upload: upload_Image,
        params: {
            "_token": _token
        },
        uploadName: 'files',
        assets: images_url,
    },
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
        'gjs-preset-webpage': {}
    }
});

const pn = editor.Panels;
const panelOpts = pn.addPanel({
    id: 'options'
})
panelOpts.get('buttons').add([{
    attributes: {
        title: 'Save'
    },
    className: 'fa fa-save',
    command: 'save-to-db',
    id: 'save-to-db'
}])

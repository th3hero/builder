const editor = grapesjs.init({
    height: '100%',
    showOffsets: 1,
    noticeOnUnload: 0,
    styleManager: {
        clearProperties: true,
    },
    avoidInlineStyle: 1,
    storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        autosave: true,         // Store data automatically
        autoload: true,
        urlStore: urlStore,
        urlLoad: urlLoad,
        params: {page: pageNumber},
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        headers: {
            'Content-Type': 'application/json'
        }
    },
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
    },
    canvas: {
        styles: [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
        ],
        scripts: [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
            'https://code.jquery.com/jquery-3.6.0.js'
        ],
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

editor.Commands.add('save-to-db', {
    run: function (editor, sender) {
        sender && sender.set('active', 0); // turn off the button
        editor.store();
        const htmldata = editor.getHtml();
        const cssdata = editor.getCss();
        const jsdata = editor.getJs();
        console.log(htmldata);
        console.log(cssdata);
        console.log(jsdata);
        $.ajax({
            url: urlStore,
            method: "POST",
            data: {
                "_token": _token,
                "html": htmldata,
                "css": cssdata,
                "js": jsdata,
                "page": pageNumber
            },
            success: function (data) {},
            else: function (data) {}
        })
    }
});

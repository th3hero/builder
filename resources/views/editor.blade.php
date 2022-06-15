<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page Builder | Page Maker</title>
    <link rel="stylesheet" href="//unpkg.com/grapesjs/dist/css/grapes.min.css">
    <style>
        body, html {
            margin: 0;
            height: 100%;
        }
    </style>
</head>
<body>
<div id="editor">
    <div style="padding: 25px">Hello World!!!</div>
</div>
<script src="//unpkg.com/grapesjs"></script>
<script type="text/javascript">
    const editor = grapesjs.init({
        container: '#editor',
        fromElement: 1,
        height: '100%',
        storageManager: { type: 0 },
        plugins: ['gjs-preset-webpage']
    });

    // Add blocks
    
    editor.DomComponents.addType('input', {
        isComponent: el => el.tagName == 'INPUT',
        model: {
            defaults: {
                traits: [
                    // Strings are automatically converted to text types
                    'name', // Same as: { type: 'text', name: 'name' }
                    'placeholder',
                    'value',
                    {
                        type: 'select', // Type of the trait
                        label: 'Type', // The label you will see in Settings
                        name: 'type', // The name of the attribute/property to use on component
                        options: [
                            { id: 'text', name: 'Text'},
                            { id: 'email', name: 'Email'},
                            { id: 'password', name: 'Password'},
                            { id: 'number', name: 'Number'},
                        ]
                    }, {
                        type: 'checkbox',
                        name: 'required',
                    }],
                // As by default, traits are binded to attributes, so to define
                // their initial value we can use attributes
                attributes: { type: 'text', required: true },
            },
        },
    });

    // Add the custom component
    editor.DomComponents.addType('collection', {
        model: {
            defaults: {
                category: 'SET-1',
            },
            // Customize the export HTML
            toHTML() {
                const category = this.get('category');
                return `<div>{ VAR-TO-REPLACE-${category} }</div>`
            },
        },
        view: {
            onRender() {
                const { $el, model } = this;
                const category = model.get('category');
                $el.empty();
                // eg. you can make some ajax request and then...
                const products = [
                    '<div>Product 1</div>',
                    '<div>Product 2</div>',
                    '<div>Product 3</div>',
                ];
                products.forEach(product => {
                    // If you append to the element, products will be static
                    // and you won't be able to select/edit them.
                    // So this approach is to use when you want kind
                    // of placeholders elements.
                    $el.append(product);

                    // If actually need to select/edit them, append the HTML
                    // to the model
                    // model.append(product);
                });
            }
        }
    })
</script>
</body>
</html>

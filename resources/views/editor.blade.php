<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page Builder | Page Maker</title>
    <link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
    <link href="{{ asset('grapesjs/dist/grapesjs-preset-webpage.min.css') }}" rel="stylesheet">
    <style>
        body,
        html {
            height: 100%;
            margin: 0;
        }
    </style>
</head>
<body>
<div id="editor"></div>
<script type="text/javascript">
    const type_page ='';
    var urlStore = "{{ route('builder.storage', $page) }}";
    var urlLoad = "{{ route('builder.storage', $page) }}";
    var upload_Image = "{{ route('builder.storage', $page) }}";
    var url_default_css_template = '//landingfago.top/modules/landingpage/css/template.css';
    var back_button_url = "{{ route('welcome') }}";
    var publish_button_url = "{{ route('welcome') }}";
    var url_delete_image = "{{ route('builder.storage', $page) }}";
    var url_search_icon = "{{ route('builder.storage', $page) }}";
    var _token = '{{ csrf_token() }}';
    var images_url = ["{{ asset('img/storage/certificate.png') }}"];
    var blockscss = "";
    var blocks = [];
</script>
<script src="//feather.aviary.com/imaging/v3/editor.js"></script>
<script src="https://static.filestackapi.com/v3/filestack-0.1.10.js"></script>
<script src="https://unpkg.com/grapesjs"></script>
<script src="{{ asset('grapesjs/dist/grapesjs-preset-webpage.min.js') }}"></script>
<script src="{{ asset('grapesjs/customization.js') }}" type="text/javascript"></script>
</body>
</html>

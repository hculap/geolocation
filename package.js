Package.describe({
    summary: "A package that provides geolocation object"
});

Package.on_use(function(api, where) {
    api.add_files(['geolocation.js'], 'client');

    if (api.export) {
        api.export('Geolocation', 'client');
    }
});
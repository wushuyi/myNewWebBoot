//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'assets/js',
    paths: {
        apps: 'apps',
        domReady: 'libs/domReady-2.0.1',
		jquery: 'libs/jquery-2.1.1',
		//modernizr: 'libs/modernizr-3.0.0',
        modernizr: 'libs/modernizr-2.8.3.min',
		require: 'libs/require-2.1.15'
    },
    shim: {
        'modernizr': {
            exports: 'modernizr'
        }
    }
});

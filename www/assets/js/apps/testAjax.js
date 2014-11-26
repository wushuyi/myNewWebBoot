/**
 * Created by shuyi.wu on 2014/11/25.
 */
define(["jquery"], function($) {
    function renderData() {
        console.log("inside callback");
    }

    function getData(options) {
        $.ajax({
            url: options.apiURL,
            dataType: options.format,
            method: options.method,
            jsonpCallback: options.jsonpCallback,
            success: options.successCallback || renderData,
            error: null,
            timeout: options.timeout
        });
    }

    return {
        getData: getData
    }
});
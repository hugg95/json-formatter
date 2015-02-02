/**
 * json formatter
 * @author victor li nianchaoli@msn.cn
 * @date 2015-02-01
 * @version 1.0.0
 * released under terms of MIT lincense
 */

'use strict';
var Formatter = (function(g, undefined) {

    /*
     * convert json string to json object
     * @param string  valid json string
     */
    function _convert(string) {
        return eval(string);
    };

    function _format(json) {
        var type = _typeof(json);
        var object = ['Array', 'Object'],
            simple = ['String', 'Number', 'Date', 'undefined', 'null', 'Boolean', 'NaN'];
        if ('Array' === _type) {
            //
        } else if ('') {
        }
    };

    /**
     * is the specified element in array
     * @param array
     */
    function _in(array) {
        var index = array.indexOf(this);
        return index === -1 ? false : true;
    }

    /**
     * get object's real type
     */
    function _typeof(obj) {
        if (typeof obj === 'undefined') {
            return 'undefined';
        }
        if (obj === null) {
            return 'null';
        }
        var _obj = obj,
            type = _obj.constructor.name;
        if (type === 'Number') {
            if (isNaN(_obj)) {
                return 'NaN';
            }
        }
        return type;
    }

    return {
        format: _format
    };
})(window);

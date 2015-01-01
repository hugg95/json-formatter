/*********************************************************
 * JSON FORMATTER                                        *
 * @VERSION: 1.0.0                                       *
 * @AUTHOR Victor Li lncwwn@gmail.com                    *
 * @LICENSE: MIT                                         *
 * *******************************************************/
var Formatter;

(function(window, undefined) {
    'use strict';

    // Formatter class defination
    Formatter = function(options) {
        if (options) {
            // TODO
        }
    };

    // _options is the local default config
    var _options = {
        white: 2, // indent 2 white space
        tab: false, // does not use tab for indent
        space: true // uses Space for indent
    },
    // config is for global
    config;

    /**
     * json string validator
     */
    Formatter.prototype.validate = function(json_string) {
        // TODO
    };


    /**
     * json string formatter
     */
    Formatter.prototype.format = function(json_string) {

        //var _white = config.white,
        //    _tab = config.tab,
        //    _space = config.space;

        //if (_tab) {
        //    return JSON.stringify(json_string, null, '\t');
        //}

        //return JSON.stringify(json_string, null, _white);
        var todo = [], done = {}, START_LEVEL = 0;

        todo.push(json_string);

        _analyse(todo, done, START_LEVEL);
        //console.log(todo);
        console.log(done);

    };

    /**
     * analyse the json string
     * @param todo the json array that contains json string that waited to be analysed
     * @param done
     * @param level a level number
     */
    var _analyse = function(todo, done, level) {

        if (!todo || !todo.length) {
            return done;
        }

        var i = 0,
            len = todo.length,
            newTodo = [],
            levelArray = [],
            parentKey = '__PARENT__';

        for (; i < len; i++) {
            var currItem = todo[i], currType = _getType(currItem);
            if (currType === 'array') {
                var i = 0, arrayLen = currItem.length;
                for (; i < arrayLen; i++) {
                    var _key = {}, currObj = currItem[i], type = _getType(currObj);
                    if (type !== 'array' && type !== 'object') {
                        _key.value = currObj;
                        _key.type = type;
                        if (currItem[parentKey]) {
                            _key[parentKey] = currItem[parentKey];
                        }
                    } else {
                        currObj[parentKey] = key;
                        newTodo.push(currObj);
                    }

                    levelArray.push(_key);
                }

            } else if (currType === 'object') {

                for (var key in currItem) {
                    if (parentKey === key) {
                        continue;
                    }

                    var _key = {},
                        currObj = currItem[key],
                        type = _getType(currObj);
                    _key.name = key;
                    _key.type = type;

                    if (currItem[parentKey]) {
                        _key[parentKey] = currItem[parentKey];
                    }
                    if (type !== 'object' && type !== 'array') {
                        _key.value = currObj;
                    } else {
                        currObj[parentKey] = key;
                        newTodo.push(currObj);
                    }

                    levelArray.push(_key);
                }
            }
        }

        done[level] = levelArray;

        todo = newTodo;
        _analyse(todo, done, ++level);
    };

    /**
     * analyse the json string
     */
    var _format = function() {
        //var array = [{key: }];
        //var arr = {0: {}, 1: {}, 2: {}};
    };

    var _getType = function(obj) {
        if (null === obj || undefined  === obj) {
            return;
        }
        return obj.constructor.name.toLowerCase();
    };

})(window);

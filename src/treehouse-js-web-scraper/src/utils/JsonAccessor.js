// http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key

exports.getPropertyValue = function (obj, prop) {
    var props = prop.valueOf();
    var parts = props.split('.');

    if (Array.isArray(parts)) {
        var last = parts.pop(),
            l = parts.length,
            i = 1,
            current = parts[0];

        while((obj = obj[current]) && obj !== undefined && i < l) {
            current = parts[i];
            i++;
        }

        if(obj) {
            return obj[last];
        }
    } else {
        throw 'parts is not valid array';
    }
};
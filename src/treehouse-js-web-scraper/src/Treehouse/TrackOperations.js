var jsonAccessor = require('src/utils//JsonAccessor');

exports.getTrackMetadata = function (index, trackObject, pathsToData) {
    var estimate = _getEstimate(trackObject, pathsToData);
    var trackName = _getTrackName(trackObject, pathsToData);

    return {
        id: index,
        name: trackName,
        estimate: estimate
    };
};

function _getEstimate(obj, pathsToData) {
    return jsonAccessor.getPropertyValue(obj, pathsToData.estimate) || jsonAccessor.getPropertyValue(obj, pathsToData.estimateFallback);
}

function _getTrackName(obj, pathsToData) {
    return jsonAccessor.getPropertyValue(obj, pathsToData.trackName);
}
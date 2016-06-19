var sjs = require('scraperjs'),
    jsonAccessor = require('./JsonAccessor');

var options = {
    track : {
        URL: 'https://teamtreehouse.com/tracks/full-stack-javascript'
    }
};

var selectors = {
    track: {
        name: '#track-meta h2'
    },
    trackModule: {
        container: '.card'
    },
    
};

var objPath = {
    estimate: "children.1.children.1.children.5.children.0.data",
    estimateFallback: "children.1.children.1.children.3.children.0.data", // indices: 6, 8, 12
    trackName :  "children.1.children.5.children.0.data"
};

function getTrackMetadata(index, obj) {
    var estimate = jsonAccessor.getPropertyValue(obj, objPath.estimate) || jsonAccessor.getPropertyValue(obj, objPath.estimateFallback);
    var trackName =  jsonAccessor.getPropertyValue(obj, objPath.trackName);

    return {
        id: index,
        name: trackName,
        estimate: estimate
    };
};

function log(results) {
    for (var i = 0; i < results.length; i++)
    {
        console.log(results[i]);
    }
};

function ScrapeSelector(url, container, selectors) {
    sjs.StaticScraper.create(url)
        .scrape(function($) {
            return $(container).map(function(index, track) {
                return getTrackMetadata(index, track);
            });
        })
        .then(function(results) {
            log(results);
        });
};

ScrapeSelector(options.track.URL, selectors.trackModule.container);
var sjs = require('scraperjs'),
    TrackOperations = require('./Treehouse/TrackOperations');

var options = {
    track: {
        URL: 'https://teamtreehouse.com/tracks/full-stack-javascript'
    }
};

var selectors = {
    track: {
        name: '#track-meta h2'
    },
    trackModule: {
        container: '.card'
    }
};

var pathsToData = {
    estimate: 'children.1.children.1.children.5.children.0.data',
    estimateFallback: 'children.1.children.1.children.3.children.0.data', // indices: 6, 8, 12
    trackName: 'children.1.children.5.children.0.data'
};

function log(results) {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i]); // eslint-disable-line no-use-before-define
    }
}

function ScrapeSelector(url, container) {
    sjs.StaticScraper.create(url)
        .scrape(function ($) {
            return $(container).map(function (index, track) {
                return TrackOperations.getTrackMetadata(index, track, pathsToData);
            });
        })
        .then(function (results) {
            log(results);
        });
}

ScrapeSelector(options.track.URL, selectors.trackModule.container);
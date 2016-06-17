// PROBLEM: We need an easy way to parse the Treehouse track for all the modules and get their data
// PLAN: use node.js to scrape the Treehouse page to get the track modules and their links then get various metadata 

var sjs = require('scraperjs');

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

// http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
function getProperty(obj, prop) {
    var prop = prop.valueOf();
    var parts = prop.split('.');

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

function getTrackMetadata(index, obj) {
    var estimate = getProperty(obj, objPath.estimate) || getProperty(obj, objPath.estimateFallback);
    var trackName =  getProperty(obj, objPath.trackName);

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
// PROBLEM: We need an easy way to parse the Treehouse track for all the modules and get their data
// PLAN: use node.js to scrape the Treehouse page to get the track modules and their links then get various metadata 

var sjs = require('scraperjs');

var options = {
    track : {
        URL: 'https://teamtreehouse.com/tracks/full-stack-javascript'
    }
}

var selectors = {
    track: {
        name: '#track-meta h2',
        estimate: '.card-estimate'
    }
};

function ScrapeSelector(url, container, selectors) {
    sjs.StaticScraper.create(url)
        .scrape(function($) {
            return $(container).map(function() {
                return $(this).text();
            }).get().filter(function(elm) {
                return elm != 'More';
            });
        })
        .then(function(results) {
            results.forEach(function(elm) {
                console.log(elm);
            });
        });
}

ScrapeSelector(options.track.URL, selectors.track.name);
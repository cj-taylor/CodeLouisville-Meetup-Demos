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
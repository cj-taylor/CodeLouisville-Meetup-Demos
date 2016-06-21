var expect = require('expect'),
    TrackOperations = require('src/Treehouse/TrackOperations');

var describe = require('mocha').describe,
    beforeEach = require('mocha').beforeEach,
    it = require('mocha').it;
    
describe('Treehouse', function () {

    describe('TrackOperations', function () {
        var testObject;

        beforeEach(function (done) {
            TrackOperations = require('src/Treehouse/TrackOperations');

            testObject = {
                trackId: 1, 
                track: {
                    data: {
                        name: 'Test Track',
                        estimate: '2 hours'
                    }
                },
                pathsToData: {
                    estimate: 'data.estimate',
                    trackName: 'data.name'
                }
            };            
            done();
        });

        it('should return track information', function (done) {
            var expectedResult = { 
                id: testObject.trackId,
                estimate: testObject.track.data.estimate,
                name: testObject.track.data.name 
            };

            var result = TrackOperations.getTrackMetadata(
                testObject.trackId, 
                testObject.track,
                testObject.pathsToData);

            expect(result.id).toBe(expectedResult.id);
            expect(result.name).toBe(expectedResult.name);
            expect(result.estimate).toBe(expectedResult.estimate);

            done();
        });

    });

});

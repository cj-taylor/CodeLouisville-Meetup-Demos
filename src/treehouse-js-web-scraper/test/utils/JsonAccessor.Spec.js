var expect = require('expect'),
    jsonAccessor = require('src/utils/JsonAccessor'); 

var describe = require('mocha').describe,
    beforeEach = require('mocha').beforeEach,
    it = require('mocha').it;

describe('JsonAccessor', function () {
    var testObject;
    
    beforeEach(function (done) {
        testObject = {
            nonNestedKey: 'nonNestedKeyValue',
            nestedKey: {
                deeplyNestedKey: 'deeplyNestedKeyValue'
            }
        };
        
        done();
    });

    it('should return undefined when key does not exist in object', function (done) {
        var result = jsonAccessor.getPropertyValue(testObject, 'thisKeyShouldNotExist');
        
        expect(result).toBe(undefined);

        done();
    });
    
    it('should return key value when key exists in object', function (done) {
        var result = jsonAccessor.getPropertyValue(testObject, 'nestedKey.deeplyNestedKey');

        expect(result).toBe(testObject.nestedKey.deeplyNestedKey);

        done();
    });
    
});

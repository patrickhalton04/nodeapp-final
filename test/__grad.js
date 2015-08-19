/**
 * Created by patrickhalton on 8/19/15.
 */

var expect          = require("chai").expect,
    assert          = require("assert"),
    grad            = require('../models/grad.js');

describe('Grad', function() {
    // test user created before each test
    var testGrad = null;
    // test user created specifically for the add grad test
    var testGrad2 = null;

    beforeEach(function (done) {
        grad.add({
            name:               "test",
            bio:                "Test User Bio",
            profile_picture:    "https://upload.wikimedia.org/wikipedia/commons/7/74/Moon-watching-night-100916-02.jpg",
            project:            "Project Info(s)"
        }, function (doc) {
            testGrad = doc;
            doc.name.should.equal('test');
            done();
        })
    });

    afterEach( function (done) {
        grad.removeByID(testGrad._id, function () {
            done();
        });
    });



    it('Adds New', function (done) {
        grad.add({
            name:               "Second Test User",
            bio:                "Second Test User Bio",
            profile_picture:    "https://upload.wikimedia.org/wikipedia/commons/7/74/Moon-watching-night-100916-02.jpg",
            project:            "SecondProject Info(s)"
        }, function (doc) {
            testGrad2 = doc;
            doc.name.should.equal('Second Test User');
            done();
        });
    });


    it('Find by ID', function (done) {
        grad.findByID(testGrad2._id, function (doc) {
            doc.name.should.equal(testGrad2.name);
            done();
        });
    });


    it('Update by ID', function (done) {
        grad.updateById(testGrad2._id, function (doc) {

            done();
        });
    });


    it('Remove By ID', function (done) {
        grad.removeByID(testGrad2._id, function () {
            grad.findByID(testGrad2._id, function (doc) {
                expect(doc).to.be.null;
                done();
            });
        });
    });
});
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('Url is defined, not empty, and URL is formatted properly', function () {
            /*loop through allfeeds URL making sure its defined and not empty*/
            allFeeds.forEach(function (feed, i) {
                /*tests that URL's  start with HTTPS*/
                var regularExpressionUrl = /^(https:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                var feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
                expect(allFeeds[i].url).toMatch(regularExpressionUrl);
                /* console.log(allFeeds[i].url); */
            });
        });
        it('Name is defined', function () {
            /*loops throught allfeeds name making sure they are defined and not empty*/
            allFeeds.forEach(function (feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });
    });
    describe('The menu', function () {
        /*making sure the body has the class of menuhidden to make it hidden by default*/
        it('is hidden', function () {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
        it('toggles visibility on icon click', function () {
            /*if else statement for if the menu-icon is clicked, change menu visibility*/
            $('a.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            $('a.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('has an entry in feed container', function (done) {
            /*making sure my .entry h2 has content in it*/
            expect($('.entry h2').length).not.toBe([0]);
            done();
        });
    });
    describe('New Feed Selection', function () {
        var feed;
        var newFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                $feed = $('.header-title').html();
                loadFeed(1, function () {
                    $newFeed = $('.header-title').html();
                    done();
                });
            });
        });
        it('content changes', function (done) {
            expect($feed).not.toBe($newFeed);
            done();
            /* checking to make sure the feed loads are different */
            console.log($feed);
            console.log($newFeed);
        });
    });
}());

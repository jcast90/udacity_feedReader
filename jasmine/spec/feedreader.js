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
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Url is defined', function () {
            /*loop through allfeeds URL making sure its defined and not empty*/
            allFeeds.forEach(function (feed) {
                var feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('Name is defined', function () {
            /*loops throught allfeeds name making sure they are defined and not empty*/
            allFeeds.forEach(function (feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        /*making sure the body has the class of menuhidden to make it hidden by default*/
        it('is hidden', function () {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('is visible on icon click', function () {
            /*if else statement for if the menu-icon is clicked, change menu visibility*/
            $('a.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            $('a.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);

        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has an entry in feed container', function (done) {
            /*making sure my .entry h2 has content in it*/
            expect($('.entry h2').length).not.toBe(0);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function () {
        /*watching if the 2nd feed is loaded*/
        var feed = $('.header-title').html();
        beforeEach(function (done) {
            loadFeed(0, function () {
                loadFeed(1, function () {
                    done();
                });
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('content changes', function (done) {


            expect(feed[0]).not.toBe(feed[1]);
            done();

        });
    });
}());

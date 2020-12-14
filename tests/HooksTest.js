fixture.meta('version', '1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout
    });

test.meta('env', 'production')
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t => {
    await t 
        .typeText("#developer-name", "sean")
        .click("#macos")
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t => {
    await t 
        .typeText("#developer-name", "sean")
        .click("#macos")
        .click("#submit-button");
});
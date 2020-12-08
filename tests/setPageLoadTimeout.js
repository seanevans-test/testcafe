fixture("Set page timeout Fixture")
    .page("https://devexpress.github.io/testcafe/");

    test("set page timeout Test", async t =>{
        await t
        .setPageLoadTimeout(0)
        .navigateTo('http://devexpress.github.io/testcafe/');
    });
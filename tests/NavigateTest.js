const { t } = require("testcafe")

fixture('Navigate Example')
.page('https://devexpress.github.io/testcafe/example/s')

test('navigate test', async t => {
    await t
        .navigateTo("http://www.google.co.uk");
})
const { Selector } = require("testcafe");

fixture("Speed Test Fixture")
    .page("https://devexpress.github.io/testcafe/");

const nameInput = Selector('#developer-name');

test("https://devexpress.github.io/testcafe/example/")
("Set Test Speed Test", async t => {
    await t 
        .setTestSpeed(0.01)
        .typeText(nameInput, 'Peter')
        .typeText(nameInput, 'Parker');
});
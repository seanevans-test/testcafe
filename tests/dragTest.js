import {Selector} from 'testcafe';

const triedCheckbox = Selector('label').withText("I have tried Testcafe");
const slider = Selector('#slider');

fixture ('Drag test')
.page('https://devexpress.github.io/testcafe/example/');

test('Drag Testcase', async t =>{
    await t
        .click(triedCheckbox)
        .drag(slider, 360,0, {offsetX:10, offsetY:10});
})
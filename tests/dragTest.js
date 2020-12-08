import {Selector} from 'testcafe';

const triedCheckbox = Selector('label').withText("I have tried Testcafe");
const slider = Selector('#slider');

fixture ('Drag test')
.page('https://devexpress.github.io/testcafe/example/');

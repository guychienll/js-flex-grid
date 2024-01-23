/* eslint-disable no-plusplus */

import './reset.scss';
import './styles.scss';

const header = document.createElement('h1');

header.textContent = 'Layout Practice';

const gridHeader = document.createElement('h2');
gridHeader.textContent = 'Grid';

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
gridContainer.append(document.createElement('div'));

const flexHeader = document.createElement('h2');
flexHeader.textContent = 'Flex';
const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container');
flexContainer.append(document.createElement('div'));

const render = (count) => {
    gridContainer.innerHTML = '';
    flexContainer.innerHTML = '';
    for (let j = 0; j < count; j++) {
        gridContainer.append(document.createElement('div'));
    }
    for (let j = 0; j < count; j++) {
        flexContainer.append(document.createElement('div'));
    }
};

let i = 0;
setInterval(() => {
    i++;
    const remains = i % 14;
    render(remains);
}, 800);

document.body.append(
    ...[header, gridHeader, gridContainer, flexHeader, flexContainer],
);

// Import stylesheets
import './style.css';

const numVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ops = [
    { name: 'add', disp: '+' },
    { name: 'sub', disp: '-' },
    { name: 'mul', disp: '*' },
    { name: 'div', disp: '/' }
  ];

const viewNums = document.getElementsByClassName('math-nums')[0];
const viewOps = document.getElementsByClassName('math-ops')[0];

const createNumElm = nums => {
  const elm = document.createElement('p');
  elm.setAttribute('class', 'math-num-vals');
  elm.innerText = nums;

  return elm;
};

const createOpsElm = (name, symb) => {
  const elm = document.createElement('p');
  elm.setAttribute('class', name);
  elm.innerText = symb;

  return elm;
};

numVals.reverse().forEach(nums => {
  const elm = createNumElm(nums);
  viewNums.prepend(elm);
});

ops.forEach(d => {
  const elm = createOpsElm(d.name, d.disp);
  viewOps.prepend(elm);
});

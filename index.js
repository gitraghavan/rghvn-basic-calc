// Import stylesheets
import './style.css';

// Initialization
const numVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ops = [
    { name: 'add', disp: '+' },
    { name: 'subtract', disp: '-' },
    { name: 'multiply', disp: '*' },
    { name: 'divide', disp: '/' }
  ];
const viewNums = document.getElementsByClassName('math-nums')[0];
const viewOps = document.getElementsByClassName('math-ops')[0];
const viewOutput = document.getElementsByClassName('output-area')[0]
  .children[0];
const resetCTA = document.getElementsByClassName('reset')[0];

setTimeout(() => {
  resetEvent();
}, 100);

// View Creation
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

  setTimeout(() => {
    numEvent(elm);
  }, 100);
});
ops.forEach(d => {
  const elm = createOpsElm(d.name, d.disp);
  viewOps.prepend(elm);

  setTimeout(() => {
    mathEvent(elm);
  }, 100);
});

// UI Functionality
const resetEvent = () => {
  viewOutput.value = 0;
};
viewOutput.addEventListener('input', e => {
  console.log(e.currentTarget.value);
  viewOutput.value = parseInt(e.currentTarget.value)
    ? e.currentTarget.value
    : 0;
  console.log('check', e.currentTarget.value);
});
resetCTA.addEventListener('click', () => {
  resetEvent();
});
const numEvent = elm => {
  elm.addEventListener('click', e => {
    // to be coded
    console.log(viewOutput.value);
    viewOutput.value = parseInt(viewOutput.value)
      ? viewOutput.value + e.currentTarget.innerText
      : e.currentTarget.innerText;
  });
};
const mathEvent = elm => {
  elm.addEventListener('click', e => {
    // to be coded
    console.log(viewOutput);
    console.log(e.currentTarget.innerText);
    console.log(e.currentTarget.getAttribute('class'));
  });
};

// Calculations

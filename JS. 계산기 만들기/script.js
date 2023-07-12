var arr = [];
function add(char) {
    var display = document.getElementById('display');
    display.value = display.value + char;
}
function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
    arr.push(display.value + '=' + result);
    
}
function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}
function record() {
    const ul = document.createElement('ul');
    var uniqueArr = [...new Set(arr)];

    uniqueArr.forEach(item => {
      const liElement = document.createElement('li');
      liElement.textContent = item;
      ul.appendChild(liElement);
    });
    document.getElementById('history').appendChild(ul);
  }

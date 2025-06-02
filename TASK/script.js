let selectedElement = null;

document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

function allowDrop(e) {
  e.preventDefault();
}

function dragStart(e) {
  e.dataTransfer.setData('type', e.target.dataset.type);
}

function drop(e) {
  e.preventDefault();
  const type = e.dataTransfer.getData('type');
  let newElement;

  if (type === 'text') {
    newElement = document.createElement('p');
    newElement.textContent = 'Edit me!';
  } else if (type === 'image') {
    newElement = document.createElement('img');
    newElement.src = 'https://via.placeholder.com/150';
    newElement.style.maxWidth = '100%';
  } else if (type === 'button') {
    newElement = document.createElement('button');
    newElement.textContent = 'Click Me';
  }

  newElement.style.padding = '5px';
  newElement.style.margin = '5px';
  newElement.addEventListener('click', () => selectElement(newElement));
  e.target.appendChild(newElement);
  selectElement(newElement);
}

function selectElement(el) {
  selectedElement = el;

  if (el.tagName === 'IMG') {
    document.getElementById('editContent').value = el.src;
  } else {
    document.getElementById('editContent').value = el.textContent;
  }

  document.getElementById('fontSize').value = parseInt(window.getComputedStyle(el).fontSize) || '';
  document.getElementById('textColor').value = rgbToHex(window.getComputedStyle(el).color);
  document.getElementById('bgColor').value = rgbToHex(window.getComputedStyle(el).backgroundColor);
}

document.getElementById('editorForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!selectedElement) return;

  const content = document.getElementById('editContent').value;
  const fontSize = document.getElementById('fontSize').value;
  const textColor = document.getElementById('textColor').value;
  const bgColor = document.getElementById('bgColor').value;

  if (selectedElement.tagName === 'IMG') {
    selectedElement.src = content;
  } else {
    selectedElement.textContent = content;
  }

  if (fontSize) selectedElement.style.fontSize = fontSize + 'px';
  selectedElement.style.color = textColor;
  selectedElement.style.backgroundColor = bgColor;
});

function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  if (!result) return '#000000';
  return (
    '#' +
    result
      .slice(0, 3)
      .map(x => parseInt(x).toString(16).padStart(2, '0'))
      .join('')
  );
}

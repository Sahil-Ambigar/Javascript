// Allow the canvas to accept dropped items
function allowDrop(event) {
  event.preventDefault(); // Required to allow a drop
}

// Handle when an element starts dragging
document.querySelectorAll('.draggable').forEach(elem => {
  elem.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('type', event.target.dataset.type); // Store type (text, image, button)
  });
});

// Handle drop event: add new element to canvas
function drop(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData('type'); // Get the type dragged
  const newElement = createElement(type); // Create the actual element
  const canvas = document.getElementById('canvas');

  // Set element as draggable inside canvas
  newElement.setAttribute('draggable', 'true');
  newElement.classList.add('canvas-item');
  canvas.appendChild(newElement);

  // Allow selecting the element
  newElement.addEventListener('click', () => selectElement(newElement));
}

// Create and return a new DOM element based on type
function createElement(type) {
  let el;
  switch (type) {
    case 'text':
      el = document.createElement('p');
      el.innerText = 'Editable Text';
      break;
    case 'image':
      el = document.createElement('img');
      el.src = 'https://via.placeholder.com/150';
      el.style.width = '150px';
      break;
    case 'button':
      el = document.createElement('button');
      el.innerText = 'Click Me';
      break;
  }
  return el;
}

// Currently selected element reference
let selectedElement = null;

// Set the clicked element as selected, highlight it, and load its properties
function selectElement(el) {
  // Deselect previous
  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }

  selectedElement = el;
  selectedElement.classList.add('selected');

  // Load its values into the form
  document.getElementById('editContent').value =
    el.tagName === 'IMG' ? el.src : el.innerText;
  document.getElementById('fontSize').value = parseInt(window.getComputedStyle(el).fontSize) || '';
  document.getElementById('textColor').value = rgbToHex(window.getComputedStyle(el).color);
  document.getElementById('bgColor').value = rgbToHex(window.getComputedStyle(el).backgroundColor);
}

// Update the selected element's properties when form is submitted
document.getElementById('editorForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!selectedElement) return;

  const content = document.getElementById('editContent').value;
  const fontSize = document.getElementById('fontSize').value;
  const textColor = document.getElementById('textColor').value;
  const bgColor = document.getElementById('bgColor').value;

  if (selectedElement.tagName === 'IMG') {
    selectedElement.src = content;
  } else {
    selectedElement.innerText = content;
  }

  selectedElement.style.fontSize = fontSize ? `${fontSize}px` : '';
  selectedElement.style.color = textColor;
  selectedElement.style.backgroundColor = bgColor;
});

// Helper: Convert rgb() to hex
function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g);
  if (!result) return '#000000';
  return (
    '#' +
    result
      .map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

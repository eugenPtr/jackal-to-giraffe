console.info('chrome-ext template-react-ts content script')  

let dragging = false;
let mouseDownPos = { x: 0, y: 0 };

let button = document.createElement('button');
button.id = 'draggable-button';
button.textContent = 'Open Modal';

let modalButton = document.createElement('button');
modalButton.id = 'modal-button';
modalButton.textContent = 'Do Magic!';

let modalContent = document.createElement('div');
modalContent.id = 'modal-content';
modalContent.textContent = 'This is where we call the API';

let modal = document.createElement('div');
modal.id = 'modal';
modal.appendChild(modalContent);
modal.appendChild(modalButton);

let textarea = document.querySelector('textarea');

if (textarea) {
    var rect = textarea.getBoundingClientRect();
    button.style.left = rect.right + window.scrollX + 10 + 'px';
    button.style.top = rect.top + window.scrollY - 10 + 'px';
    button.style.display = 'block';

    console.log("Textarea positioning", textarea.offsetLeft, textarea.offsetTop)
    console.log("Button positioning", button.style.left, button.style.top)

    textarea.onmousedown = (event: MouseEvent) => {
        button.style.display = 'block';
        console.log("Click client position", event.clientX, event.clientY)
        console.log("Click page position", event.pageX, event.pageY)
    }

    textarea.onchange = (event) => {
        modalContent.textContent = textarea.value;
    }

    textarea.oninput = (event) => {
        modalContent.textContent = textarea.value;
    }

    modalButton.onclick = () => {
        textarea.value = 'Furrier and even more furrier hairball curl into a furry donut so stand in doorway'
    }
}

function onMouseMove(event: MouseEvent): void {
    button.style.left = event.pageX - button.offsetWidth / 2 + 'px';
    button.style.top = event.pageY - button.offsetHeight / 2 + 'px';
}

button.onmousedown = function(event: MouseEvent): void {
    // button.style.position = 'absolute';
    dragging = true;
    mouseDownPos = { x: event.clientX, y: event.clientY };

    document.addEventListener('mousemove', onMouseMove);
};

// Add modal functionality
button.onmouseup = function(event: MouseEvent): void {
    dragging = false;

    document.removeEventListener('mousemove', onMouseMove);
    
    const movementX = Math.abs(mouseDownPos.x - event.clientX);
    const movementY = Math.abs(mouseDownPos.y - event.clientY);

    // Consider it a click if the mouse didn't move more than 2px in either direction
    if (movementX <= 2 && movementY <= 2) {
        let rect = button.getBoundingClientRect();
        modal.style.display = 'block';
        modal.style.left = rect.left + button.offsetWidth/2 - modal.offsetWidth + 'px';
        modal.style.top = rect.top - modal.offsetHeight + 'px';
        
    }
};


document.addEventListener('mousedown', function(event) {
    // Check if the modal is displayed
    if (modal.style.display === 'block') {
        // Check if the click occurred outside the modal
        if (!modal.contains(event.target as Node) && (textarea && !textarea.contains(event.target as Node))) {
            // Hide the modal
            modal.style.display = 'none';
        }
    }

    if (button.style.display === 'block') {
        if (textarea && !textarea.contains(event.target as Node) && !button.contains(event.target as Node)) {
            button.style.display = 'none';
        }
    }
});

document.body.appendChild(button);
document.body.appendChild(modal);

export {}

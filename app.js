const thingsList = [
    "She loves spamming stickers.",
    "Shes the cutest",
    "I LOVE HER",
    "Shes the dreamiest",
    "I LOVE HER",
    "Obsession with pesto pasta",
    "I LOVE HER",
    "Lesbian",
    "I LOVE HER",
    "Her gentle soul"
];

function nextScreen(screenNumber) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const target = document.getElementById(`screen-${screenNumber}`);
    if (target) {
        target.classList.add('active');
        // Scroll to top of the new screen
        target.scrollTop = 0;
    }
}

function initAccordion() {
    const accordionContainer = document.querySelector('.accordion');
    
    thingsList.forEach((thing, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        
        const header = document.createElement('div');
        header.className = 'accordion-header';
        
        const number = document.createElement('span');
        number.className = 'accordion-number';
        number.textContent = index + 1;
        
        const title = document.createElement('span');
        title.textContent = "Show memory"; // or we could make it reveal the thing
        
        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.textContent = thing;
        
        header.appendChild(number);
        header.appendChild(title);
        item.appendChild(header);
        item.appendChild(content);
        
        header.addEventListener('click', () => {
            // Toggle active class
            const isActive = item.classList.contains('active');
            
            // Optional: Close other items
            // document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
                title.textContent = thing; // Show actual text on header too, based on screenshot
            } else {
                item.classList.remove('active');
                title.textContent = "Show memory";
            }
        });
        
        accordionContainer.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
});

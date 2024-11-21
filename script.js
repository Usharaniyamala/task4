// Sample data for products
const menuItems = {
    hot: [
        { name: "Espresso", description: "Strong and bold hot coffee.", image:"https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg" },
        { name: "Latte", description: "Smooth espresso with steamed milk.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNw7oOeCCCIv_D1ok78I61XqgUl1ZU_S2DA&s" },
        { name: "Cappuccino", description: "Espresso with frothed milk.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgX_b8QZ0-fQUiuCzL-lMT9QiEpRH1c9QNyQ&s" }
    ],
    cold: [
        { name: "Iced Coffee", description: "Refreshing iced coffee with a hint of sweetness.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgKj0cKSp-_v-uu_ZvcKCJIaI0_u-cqsEFw&s" },
        { name: "Iced Latte", description: "Chilled espresso with milk and ice.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRYswOglC6aCOMXiRmJ-P1b9bXwBnwqTRBQ&s" },
        { name: "Cold Brew", description: "Slow-brewed for a smooth, bold flavor.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvWtVM4N2r9x8zzsjhlwxXmTDVKUKtg9NYA&s" }
    ],
    pastry: [
        { name: "Croissant", description: "Flaky and buttery French pastry.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-B68HrwCIPxW6hzamXxTRt6EbBaQ-4v7O5A&s" },
        { name: "Muffin", description: "Freshly baked muffin with seasonal fruit.", image: "https://masabakery.in/cdn/shop/files/Croissant-min.jpg?v=1690781324" },
        { name: "Danish", description: "Buttery pastry filled with jam or custard.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4QMVnUHmRWs-7zYe1gPKa3hWi6eMKRLp_g&s" }
    ]
};

// Function to filter the menu items based on the category
function filterMenu(category) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';  // Clear existing items

    const items = menuItems[category];
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        
        menuContainer.appendChild(itemDiv);
    });
}

// Initially load hot coffee items
filterMenu('hot');


// Add Note Functionality
function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    const note = noteInput.value.trim();

    if (note) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note-item');
        noteElement.innerHTML = `
            <p>${note}</p>
            <button onclick="removeNote(this)">Remove</button>
        `;
        noteList.appendChild(noteElement);
        noteInput.value = '';  // Clear the input field
    }
}

function removeNote(button) {
    const noteItem = button.parentElement;
    noteItem.remove();
}

document.addEventListener("DOMContentLoaded", loadMenu);  // Load menu on page load

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit', submitItem);

function submitItem(e){
    e.preventDefault();
    let addItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = "list-group-item";
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.textContent = "X";
    li.appendChild(document.createTextNode(addItem));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}


itemList.addEventListener('click', deleteItem);

function deleteItem(e){
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure you want to delete?")){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
})
}
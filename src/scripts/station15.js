function displayList() {
    const List = document.getElementById('fruits');
    const ListItem = document.querySelectorAll('#fruits p');

    List.innerHTML = '';
    const ul = document.createElement('ul');
    ListItem.forEach((elem) => {
        const li = document.createElement('li');
        li.textContent = elem.textContent;
        ul.appendChild(li);
    });
    List.append(ul);
}
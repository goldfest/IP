export const imagePlaceholder = "https://via.placeholder.com/200";

export const cntrls = {
    button: document.getElementById("items-add"),
    table: document.querySelector("#items-table tbody"),
    form: document.getElementById("items-form"),
    lineId: document.getElementById("items-line-id"),
    itemsType: document.getElementById("item"),
    genre: document.getElementById("genre"),
    category: document.getElementById("category"),
    nick: document.getElementById("nick"),
    ocenka: document.getElementById("ocenka"),
    image: document.getElementById("image"),
    imagePreview: document.getElementById("image-preview"),
};

export function createItemsOption(name, value = "", isSelected = false){
    const option = document.createElement("option");
    option.value = value || "";
    option.selected = isSelected;
    option.text = name;
    return option;
}

function createTableAnchor(icon, callback){
    const i = document.createElement("i");
    i.classList.add("fa-solid", icon);

    const a = document.createElement("a");
    a.href = "#";
    a.appendChild(i);
    a.onclick = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        callback();
    };

    const td = document.createElement("td");
    td.appendChild(a);
    return td;
}

function createTableColumn(value){
    const td = document.createElement("td");
    td.textContent = value;
    return td;
}

export function createTableRow(item, index, editCallback, deleteCallback){
    const rowNumber = document.createElement("th");
    rowNumber.scope = "row";
    rowNumber.textContent = index + 1;

    const row = document.createElement("tr");
    row.id = `line-${item.id}`;

    row.appendChild(rowNumber);
    row.appendChild(createTableColumn(item.items.name));
    row.appendChild(createTableColumn(item.category));
    row.appendChild(createTableColumn(item.nick));
    row.appendChild(createTableColumn(item.genres.name));
    row.appendChild(createTableColumn(item.ocenka));

    const imageCell = document.createElement("td");

    const imageElement = document.createElement("img");

    imageElement.src = item.image;

    imageElement.alt = "Image"; 
    imageElement.style.width = "50px"; 

    imageCell.appendChild(imageElement);

    row.appendChild(imageCell);
    // редактировать в модальном окне
    row.appendChild(createTableAnchor("fa-pencil", editCallback));
    // удаление
    row.appendChild(createTableAnchor("fa-trash", deleteCallback));
    return row;
}
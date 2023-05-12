const div = document.createElement("div");
const createButton = document.createElement("button");
const list = document.createElement("ul");
const bodyElem = document.body;

div.classList.add("wrapper");
createButton.classList.add("creating_btn");
list.classList.add("list_container");

function createListItem() {
  const insertItem = prompt("Enter item to insert");
  const listItem = document.createElement("li");
  listItemAttr(listItem);
  const deleteButton = document.createElement("button");
  deleteButtonAttr(deleteButton);
  list.append(listItem);
  listItem.append(insertItem, deleteButton);
}

function deleteButtonAttr(elem) {
  elem.append("Delete");
  elem.classList.add("delete_button");
  elem.addEventListener("click", () => {
    elem.parentElement.remove();
  });
}

function listItemAttr(elem) {
  elem.classList.add("list_element");
}

createButton.append("Press to Add");
bodyElem.append(div);
div.append(createButton);
div.append(list);
createButton.addEventListener("click", createListItem);

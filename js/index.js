const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.append(wrapper);
const list = document.createElement("ul");
list.classList.add("list_container");
const createBtn = document.createElement("button");
createBtn.append("Click To Create");
createBtn.classList.add("creating_btn");
wrapper.append(createBtn, list);

function createListItem() {
  const userInfo = prompt("Enter data");
  const listItem = document.createElement("li");
  listItem.classList.add("list_element");
  listItem.append(userInfo);
  listItem.append(createDeleteBtn());
  list.append(listItem);
}

function createDeleteBtn(){
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete_button");
  deleteBtn.append("Click To Delete");
 return deleteBtn;
}

function delegatedDelete (e){
  if(e.target.tagName !== 'BUTTON'){
    return;
  }
  e.target.parentElement.remove();
}
// function deleteElem (event){ 
//   event.currentTarget.parentElement.remove();
// }
createBtn.addEventListener("click", createListItem);
list.addEventListener('click' , delegatedDelete)

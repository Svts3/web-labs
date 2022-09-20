export const EDIT_BUTTON_PREFIX = 'edit-button-';

export const DELETE_BUTTON_PREFIX = 'delete-button-';

let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let weightInput = document.getElementById("weight");
let typeInput = document.getElementById("type");

let findInput = document.getElementById("find-input");

let items = document.getElementById("items-table");

let table = document.getElementById("items-table");


const itemTemplate = ({ id, name, price, weight, type }) => `
    <tr id=${id} class="table-element">
    <td>${name}</td>
    <td>${price}</td>
    <td>${weight}kg</td>
    <td>${type}</td>
    <td><button id=${DELETE_BUTTON_PREFIX}${id}>Delete</button></td>
    <td><button id=${EDIT_BUTTON_PREFIX}${id}>Update</button></td>
    </tr>
    `


export const clearInputs = () => {
  nameInput.value = "";
  priceInput.value = "";
  weightInput.value = "";
  typeInput.value = "";
};

export const addItemToPage = ({ _id: id, name, price, weight, type }) => {
  items.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, price, weight, type })
  );

  const element = document.getElementById(id);
  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
};

export const renderItemsList = (items) => {
  items.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

export const getInputValues = () => {
  return {
    name: nameInput.value,
    price: priceInput.value,
    weight: weightInput.value,
    type: typeInput.value
  };
};

export const deleteTableRows = ()=>{

  for(var i = 1;i<table.rows.length;){
    table.deleteRow(i);
  }
}


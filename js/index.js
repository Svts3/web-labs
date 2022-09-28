const submitButton = document.getElementById("form-submit-button");
const findButton = document.getElementById("find-by-name");
const deleteButton = document.getElementById("cancel_find_button");
const sortItemsByASC = document.getElementById("sort-items-by-asc");
const sortItemsByDESC = document.getElementById("sort-items-by-desc");
const createButton = document.getElementById("create_button");

const updateForm = document.getElementById("update_device_form");
const formTitle = document.getElementById("items-info");
const createForm = document.getElementById("device_create_form");

let findInput = document.getElementById("find-input");

let totalPriceH2 = document.getElementById("device_list-total-price");



let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let weightInput = document.getElementById("weight");
let typeInput = document.getElementById("type");


let items = document.getElementById("items-table");

let itemDiv = document.getElementById("items-table");



let devices = [];


let totalPrice = 0;
const addDevice = ({ name, price, weight, type }) => {

  let generatedId = uuid.v1();

  const device = {
    id: generatedId,
    name,
    price,
    weight,
    type
  }

  devices.push(device);
  addItemToPage(device);

  createButton.style.display = "block";
  createForm.style.display = "none";
  formTitle.style.display = "block";
  totalPriceH2.style.display = "block";
}

const countTotalPrice = (devices) => {
  totalPrice = devices.reduce((accumulator, device) => accumulator + parseFloat(device.price), 0);
};







createButton.addEventListener("click", (event) => {

  event.preventDefault();

  createButton.style.display = "none";
  createForm.style.display = "block";
  formTitle.style.display = "none";

});



submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { name, price, weight, type } = getInputValues();

  clearInputs();

  addDevice({
    name,
    price,
    weight,
    type
  });
  countTotalPrice(devices);
  totalPriceH2.innerHTML = `Total Price: ${totalPrice}`;
  console.log(devices);
});

findButton.addEventListener("click", (event) => {
  deleteTableRows();
  event.preventDefault();
  let foundDevices = devices.filter(d => d.name === findInput.value);

  renderItemsList(foundDevices);

})


sortItemsByASC.addEventListener("click", (event) => {
  deleteTableRows();
  const sortedDevices = devices.sort((d1, d2) => {
    return d2.price - d1.price;
  });
  renderItemsList(sortedDevices);

})

sortItemsByDESC.addEventListener("click", (event) => {
  deleteTableRows();
  const sortedDevices = devices.sort((d1, d2) => {
    return d1.price - d2.price;
  });
  renderItemsList(sortedDevices);

})



const itemTemplate = ({ id, name, price, weight, type }) => `
      <div id=${id} class="item-card">
      <img class="item-image" src="./images/office_equipment_image.svg">
      <p id="name">${name}</p>
      <p id="price">${price}$</p>
      <p id="weight">${weight}kg</p>
      <p id="type">${type}</p>
      <button onclick="updateDevice('${id}')">Update</button>
      <button onclick="deleteDevice('${id}')">Delete</button>
      </div>`

function deleteDevice(id) {
  for (let i = 0; i < devices.length; i++) {
    deleteTableRows();
    if (devices[i].id === id) {
      devices.splice(i, 1);
      break;
    }

  }
  countTotalPrice(devices);
  totalPriceH2.innerHTML = `Total Price: ${totalPrice}`;
  renderItemsList(devices);
  console.log(devices)
}


function updateDevice(id) {


  let deviceToUpdated;
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === id) {
      deviceToUpdated = devices[i];
      break;
    }
  }
  console.log(devices)
  console.log(deviceToUpdated);

  createButton.style.display = "none";
  createForm.style.display = "block";
  formTitle.style.display = "none";
  totalPriceH2.style.display = "none";
  nameInput.value = deviceToUpdated.name;
  priceInput.value = deviceToUpdated.price;
  weightInput.value = deviceToUpdated.weight;
  typeInput.value = deviceToUpdated.type;

  deleteDevice(id);

  console.log(devices)
  console.log(deviceToUpdated);

}


const clearInputs = () => {
  nameInput.value = "";
  priceInput.value = "";
  weightInput.value = "";
  typeInput.value = "";
};

const addItemToPage = ({ id: id, name, price, weight, type }) => {
  items.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, price, weight, type })
  );


};

const renderItemsList = (items) => {
  items.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

const getInputValues = () => {
  if (validateInputForms()) {

    return {
      name: nameInput.value,
      price: priceInput.value,
      weight: weightInput.value,
      type: typeInput.value
    };
  }
};

const deleteTableRows = () => {

  while (itemDiv.firstChild) {
    itemDiv.innerHTML = "";
  }
}




const validateInputForms = () => {
  if (!nameInput.value.trim().length) {
    alert("Name cannot be empty")
    return false;
  }
  if (!priceInput.value.trim().length) {
    alert("Price cannot be empty")
    return false;
  }
  if (priceInput.value < 0) {
    alert("Price can't be negative")
    return false;
  }
  if (!weightInput.value.trim().length) {
    alert("Weight cannot be empty")
    return false;
  }
  if (weightInput.value < 0) {
    alert("Weight can't be negative")
    return false;
  }
  if (!typeInput.value.trim().length) {
    alert("Type cannot be empty")
    return false;
  }

  return true;
};






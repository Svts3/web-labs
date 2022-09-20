import {
    EDIT_BUTTON_PREFIX,
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    deleteTableRows
} from "./dom_util.js"

const submitButton = document.getElementById("form-submit-button");
const findButton = document.getElementById("find-by-name");
const DeleteButton = document.getElementById("cancel_find_button");
const sortItemsByASC = document.getElementById("sort-items-by-asc");
const sortItemsByDESC = document.getElementById("sort-items-by-desc");

let findInput = document.getElementById("find-input");

let totalPriceH2 = document.getElementById("device_list-total-price");

let devices = [];


let id = 0;
let totalPrice = 0;
const addDevice = ({ name, price, weight, type }) => {
    
    const generatedId = id++;

    const device = {
        id: generatedId,
        name,
        price,
        weight,
        type
    }

    devices.push(device);
    addItemToPage(device);
}

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
    totalPrice+= parseInt(price);
    totalPriceH2.innerHTML=`Total Price: ${totalPrice}`;
  
  });

findButton.addEventListener("click", (event)=>{
    deleteTableRows();
    event.preventDefault();
    let foundDevices = devices.filter(d=>d.name === findInput.value);
    
    renderItemsList(foundDevices);

}) 


sortItemsByASC.addEventListener("click", (event)=>{
    deleteTableRows();
   const sortedDevices = devices.sort((d1, d2)=>{
        return d2.price - d1.price;
   });
    renderItemsList(sortedDevices);

}) 

sortItemsByDESC.addEventListener("click", (event)=>{
    deleteTableRows();
    const sortedDevices = devices.sort((d1, d2)=>{
         return d1.price - d2.price;
    });
     renderItemsList(sortedDevices);
 
 }) 






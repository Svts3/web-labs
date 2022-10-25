import React from 'react';
import "./Catalogue.css";
import ItemTemplate from './Catalogue-item/Catalogue-item';
import CatalogueSelects from './Catalogue-selects/Catalogue-selects';

const items = [
  {
    id: 1,
    image: require("../../images/scanner-image.jpg"),
    name: 'Kodak i940',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 13000
  },
  {
    id: 2,
    image:  require("../../images/scanner2-image.jpg"),
    name: "Canon P-208II",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 5999
  },
  {
    id: 3,
    image:  require("../../images/shredder-image.jpg"),
    name: 'Shredder 2E S-509CC',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1662
  },
  {
    id: 4,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3900
  },
  {
    id: 5,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3900
  },
  {
    id: 6,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3900
  },
  {
    id: 7,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3900
  },
  {
    id: 8,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3900
  },
  {
    id: 9,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3900
  }
];
function RenderItems() {
  console.log(items)
  return items.map(item => <ItemTemplate {...item} />);
}

export default function Catalogue() {
  return (
    <><div className='catalogue-header'>
      <CatalogueSelects/>
    </div><hr></hr>
      <div className='catalogue'>
        <RenderItems />
      </div></>






  )
}
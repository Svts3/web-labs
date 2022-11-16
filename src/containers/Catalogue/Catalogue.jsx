import React, { useEffect } from 'react';
import "./Catalogue.css";
import ItemTemplate from './Catalogue-item/Catalogue-item';
import CatalogueSelects from './Catalogue-selects/Catalogue-selects';
import { getFilteredList } from './Catalogue-selects/Catalogue-selects';
import { useState } from 'react';

export const items = [
  {
    id: 1,
    image: require("../../images/scanner-image.jpg"),
    name: 'Kodak i940',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 13000,
    type: "Scanner",
    color: "Grey"
  },
  {
    id: 2,
    image: require("../../images/scanner2-image.jpg"),
    name: "Canon P-208II",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 5999,
    type: "Scanner",
    color: "Black"
  },
  {
    id: 3,
    image: require("../../images/shredder-image.jpg"),
    name: 'Shredder 2E S-509CC',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1662,
    type: "Shredder",
    color: "Black"
  },
  {
    id: 4,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1200,
    type: "Printer",
    color: "Black"
  },
  {
    id: 5,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 1250,
    type: "Printer",
    color: "Black"
  },
  {
    id: 6,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3500,
    type: "Printer",
    color: "Black"
  },
  {
    id: 7,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 2960,
    type: "Printer",
    color: "Black"
  },
  {
    id: 8,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 3000,
    type: "Printer",
    color: "Black"
  },
  {
    id: 9,
    image: require("../../images/printer-image.jpg"),
    name: 'Canon Pixma E3440 Wi-Fi',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: 7200,
    type: "Printer",
    color: "Black"
  }
];
export function RenderItems(items) {

  return items.items.map((item) => <ItemTemplate {...item} />);
}

export default function Catalogue() {
  return (
    <>
      <CatalogueSelects />
      </>






  )
}
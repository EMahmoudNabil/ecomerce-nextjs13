'use client'

import { useEffect, useState } from "react";
import { getProducts, searchProducts } from "@/helpers";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products, StateProps } from "../type";

import { useSelector } from "react-redux";


const Products =  () => {
  const [searching, setSearching] = useState([])
  const searchString = useSelector((state: StateProps) => state.shopping.searchString);

  useEffect(() => {
    const fetchData = async () => {
      if (searchString !== "") {
        const searchResults = await searchProducts(searchString);
        setSearching(searchResults); // Assuming setSearching should store an array
        console.log(searchResults);
      } else {
        const products = await getProducts();
        setSearching(products); // Assuming setSearching should store an array
      }
    };
    fetchData();
  }, [searchString]);



  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {searching?.map((item: Products) => (
        <ProductsData item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;

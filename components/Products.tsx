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

  useEffect(  () => {
    const get = async () => {
      if(searching !== ""){
        const search= await searchProducts(searchString)
        setSearching(search)
        console.log(searching) }
        else{
          const products =  await getProducts();
          setSearching(products)
        }
  }
  get();
    
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

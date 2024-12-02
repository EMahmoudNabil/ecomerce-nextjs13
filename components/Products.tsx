'use client';

import { useEffect, useState } from "react";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products, StateProps } from "../type";
import { useSelector } from "react-redux";
import { productData } from "@/constants/data";

const Products = () => {
  const [searching, setSearching] = useState<Products[]>([]);

  // الحصول على نص البحث من Redux
  const searchString = useSelector(
    (state: StateProps) => state.shopping.searchString
  );

  useEffect(() => {
    if (searchString !== "") {
      // تصفية المنتجات بناءً على نص البحث
      const searchResults = productData.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
      );
      setSearching(searchResults);
    } else {
      // في حالة عدم وجود نص بحث، عرض جميع المنتجات
      setSearching(productData);
    }
  }, [searchString]);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {searching.length > 0 ? (
        searching.map((item: Products) => (
          <ProductsData item={item} key={item._id} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </Container>
  );
};

export default Products;

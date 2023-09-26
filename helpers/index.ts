import { productData } from "@/constants/data";

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }
  return res.json();
};
export const getTrendingProducts = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/smarttrending"
  );
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }
  return res.json();
};


// Define a function to filter products based on the search string
export const searchProducts = (searchString:any) => {
  // Convert the search string to lowercase for case-insensitive matching
  const normalizedSearchString = searchString.toLowerCase();

  // Use the filter method to find products that match the search string
  const matchingProducts = productData.filter((product) => {
    // Convert the product name to lowercase for case-insensitive matching
    const normalizedProductName = product.title.toLowerCase();

    // Check if the product name contains the normalized search string
    return normalizedProductName.includes(normalizedSearchString);
  });

  return matchingProducts;
};



export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};

export const getSingleProudct = (_id: number) => {
  const item = productData.find((product) => product._id === _id);
  return item;
};

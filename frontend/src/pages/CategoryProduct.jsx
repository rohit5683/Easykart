import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);

  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="container mt-3">
        <h1>{category?.name}</h1>
      </div>
    </Layout>
  );
};

export default CategoryProduct;

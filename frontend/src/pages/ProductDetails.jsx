import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initial details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get Product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container mt-3">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h1>Product Details</h1>
          <h4>Name : {product.name}</h4>
          <h6>Description : {product.description}</h6>
          <h6>Price : Rs.{product.price}</h6>
          <h6>Category : {product.category?.name}</h6>
          <button className="btn btn-primary ms-2">ADD TO CART</button>
          <button className="btn btn-primary ms-2">BUY NOW</button>
        </div>
      </div>
      <div className="row container">
        <h1>Similar Products</h1>
        {relatedProducts.length < 1 && <h6>No Similar Products Found</h6>}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                style={{
                  height: "60%",
                  padding: "10px",
                }}
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}</p>
                <p className="card-text">Rs. {p.price}</p>
                <button className="btn btn-primary ms-2">ADD TO CART</button>
                <button className="btn btn-primary ms-2">BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

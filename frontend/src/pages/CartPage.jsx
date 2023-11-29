import React from "react";
import Layout from "../Components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  //Total Price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Remove Cart items
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center bg-light p-2">
              {`Hello, ${auth?.token && auth?.user?.name}`}
            </h2>
            <h4 className="text-center">
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "Please login to checkout"
                  }`
                : "Your Cart is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              {cart?.map((p) => (
                <div className="row  card flex-row mb-2">
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top p-4"
                      alt={p.name}
                    />
                  </div>
                  <div className="col-md-8 p-4">
                    <h4>{p.name}</h4>
                    <h5>{p.description.substring(0, 30)}</h5>
                    <h4>
                      Price:{" "}
                      {p.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h4>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summery</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()}</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

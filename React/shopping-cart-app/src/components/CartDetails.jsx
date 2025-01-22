import React, { useEffect, useState } from "react";
import "./cartstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, removeSingleItem, emptyCart } from "../redux/features/cartSlice";
import toast from 'react-hot-toast';


const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  const handleDecerement = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item removed from your cart");
  }

  const handleSingleDecerement = (e) => {
    dispatch(removeSingleItem(e));
  }

  const emptyCartFunc = () => {
    dispatch(emptyCart());
    toast.success("Cart is empty now");
  }

  const totalPriceCalculation = () => {
    let totalPrice = 0;
    carts.map((element, id) => {
        totalPrice = totalPrice + element.qnty * element.price;
    });
    setTotalPrice(totalPrice);
  }

  const totalQtyCalculation = () => {
    let totalQty = 0;
    carts.map((element, id) => {
        totalQty = totalQty + element.qnty;
    });
    setTotalQty(totalQty);
  }

  useEffect(() => {
    totalPriceCalculation();
  }, [totalPriceCalculation])

  useEffect(() => {
    totalQtyCalculation();
  }, [totalQtyCalculation])

  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5 cardsdetails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h5 className="text-white m-0">Cart Calulation{carts.length > 0 ? `(${carts.length})` : ''}</h5>
              {carts.length > 0 ? (
                <button className="btn btn-danger mt-0 btn-sm" onClick={() => emptyCartFunc()}>
                  <i className="fa fa-trash-alt mr-2"></i>
                  <span>Empty Cart</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card-body p-0">
            {carts.length === 0 ? (
              <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart Is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table cart-table mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">
                      <span className="amount" id="amount">
                        Total Amount
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((data, index) => {
                    return (
                      <tr>
                        <td>
                          <button className="prdct-delete" onClick={() => handleDecerement(data.id)}>
                            <i className="fa fa-trash-alt"></i>
                          </button>
                        </td>
                        <td>
                          <div className="product-img">
                            <img src={data.imgdata}></img>
                          </div>
                        </td>
                        <td>
                          <div className="product-name">
                            <p>{data.dish}</p>
                          </div>
                        </td>
                        <td>{data.price}</td>
                        <td>
                          <div className="prdct-qty-container">
                            <button className="prdct-qty-btn" type="button" onClick={data.qnty <= 1 ? () => handleDecerement(data.id) : () => handleSingleDecerement(data)}>
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              className="qty-input-box"
                              type="text"
                              value={data.qnty}
                              disabled
                              name=""
                              id=""
                            ></input>
                            <button className="prdct-qty-btn" type="button" onClick={()=>handleIncrement(data)}> 
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="text-right">₹ {data.qnty * data.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th>
                      Items In Cart <span className="ml-2 mr-2">:</span>
                      <span className="text-danger">{totalQty}</span>
                    </th>
                    <th className="text-right">
                      Total Price<span className="ml-2 mr-2">:</span>
                      <span className="text-danger">₹ {totalPrice}</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

import React, { useState } from "react";
import "./style.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import CardsData from "./Cardsdata";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import toast from 'react-hot-toast';

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added to cart")
  };
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Places to have meal near you
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, id) => {
            return (
              <Card
                className="hove mb-4"
                style={{ width: "22rem", border: "none" }}
              >
                <Card.Img src={element.imgdata} className="cd" variant="top" />

                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{element.dish}</h4>
                    <span>{element.rating}&nbsp;★</span>
                  </div>
                  <div className="lower_data d-flex justify-content-between ">
                    <h5>{element.address}</h5>
                    <span>{element.price}&nbsp;₹</span>
                  </div>
                  <div className="extra"></div>
                  <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={element.arrimg} className="limg"></img>
                    <Button
                      onClick={() => send(element)}
                      className="mt-2 mb-2"
                      variant="outline-light"
                      style={{
                        width: "150px",
                        background: "#ff3054db",
                        border: "none",
                      }}
                    >
                      Add to cart
                    </Button>
                    <img src={element.delimg} className="laimg"></img>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import api from "../ApiConfig/index";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Allproducts = () => {
  const [products, setProducts] = useState();
  const router = useNavigate();


  useEffect(() => {
    async function getProducts() {
      try {
        // const response = await axios.get("http://localhost:8000/all-products", { token });

         const response = await api.get("/all-products");

        console.log(response);
        // if (response.data.success)
        if (response.status === 200) {

          setProducts(response.data.products);
        }
      } catch (error) {
        console.log(error, "error in all prdouctd");
        toast.error(error.response.data.message);
      }
    }
    getProducts();
  }, []);

  console.log(products)

  return (
    <div>
      <h1 style={{paddingTop:"100px",color:"red"}}>All Products</h1>
      <div>
        {products?.length ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
           {products.map((pro) => (
              <div
                onClick={() => router(`/singleproduct /${pro._id}`)}
                style={{
                  width: "23%",
                  height: "450px",
                  cursor: "pointer",
                  border: "2px solid black",
                }}
                key={pro._id}
              >
                <img
                  style={{ width: "100%", height: "300px" }}
                  src={pro.image}
                />
                <h2>Name:{pro.name}</h2>
                <h4>Price:{pro.price}</h4>
              </div>
            ))}
          </div>
        ) : (
          <div style={{paddingTop:"100px",color:"red"}}>Loading!!..</div>
        )}
      </div>
    </div>
  );
};

export default Allproducts;
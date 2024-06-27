import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { Link, useNavigate, useParams } from "react-router-dom";

const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: Float!
    $stock: Int!
  ) {
    createProduct(
      name: $name
      description: $description
      price: $price
      stock: $stock
    ) {
      product {
        id
        name
        description
        price
        stock
      }
    }
  }
`;

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, description, price, stock);
    try {
      await createProduct({
        variables: {
          name,
          description,
          price: parseFloat(price),
          stock: parseInt(stock),
        },
      });

      navigate(`/products/${data.createProduct.product.id}`);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const isFormValid = () => {
    return name && description && price && stock;
  };

  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1  mt-5">
      <div className="text-gray-700 ">
        <div className="font-medium text-3xl">Product Details</div>
        <div>Please fill out all the fields.</div>
      </div>

      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 m-auto">
          <div className="md:col-span-5 ">
            <input
              type="text"
              placeholder="Product title"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="md:col-span-5">
            <input
              type="text"
              placeholder="Product description"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="md:col-span-5">
            <input
              type="number"
              placeholder="Price"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="md:col-span-5">
            <input
              type="number"
              placeholder="Stock"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="md:col-span-5 mt-4">
            <div className="flex items-center justify-between ">
              <button
                type="button"
                onClick={() => navigate("/")}
                class="border-2 border-black p-6 py-2 rounded-3xl font-bold duration-300  hover:bg-yellow-900/30 "
              >
                <div class="flex flex-row align-middle">
                  <svg
                    class="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p class="ml-2">Prev</p>
                </div>
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className={`border-2 border-black  px-10 py-2  rounded-3xl font-bold duration-300  hover:bg-gray-900/30 text-black ${
                  !isFormValid() && "opacity-50 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
              <button
                onClick={() => navigate("/products")}
                className="border-2 border-black p-3 rounded-3xl font-bold duration-300  hover:bg-yellow-900/30 "
              >
                View Product List
              </button>
              {loading && <p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;

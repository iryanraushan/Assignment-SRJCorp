import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-center">
      <img
        className="rounded-3xl m-auto  h-96"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBI75G2daZOMFK7xXgM455L5Hcf7EniKsYg&s"
        alt=""
      />

      <h2 className="text-5xl font-bold text-center py-4">
        Assignment Completed
      </h2>
      <h2 className="text-4xl pb-10 font-bold">Let's find out!</h2>
      <div className="text-center gap-6 flex max-w-md mx-auto">
        <div>
          <Link
            to="products"
            className="border-2 border-black p-3 rounded-3xl font-bold duration-300  hover:bg-yellow-900/30 "
          >
            <button>View Product List</button>
          </Link>
        </div>

        <div>
          <Link
            to="products/new"
            className="border-2 border-black p-3 rounded-3xl font-bold duration-300  hover:bg-yellow-900/30 "
          >
            <button>Create New Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

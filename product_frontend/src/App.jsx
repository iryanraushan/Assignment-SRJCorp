import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/new" element={<ProductForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

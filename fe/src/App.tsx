import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/Home";
import { CatalogPage } from "./pages/Catalog";
import { ProductDetailsPage } from "./pages/ProductDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Layout>
  )
}

export default App

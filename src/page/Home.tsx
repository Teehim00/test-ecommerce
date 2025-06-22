"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Pagination,
} from "@mui/material";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import BarCenter from "../components/BarCenter";

export default function Home() {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

  const promoProducts = products
    .slice(0, 8)
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const [currentPagePromo, setCurrentPagePromo] = useState(1);
  const promoItemsPerPage = 4;
  const indexLastPromo = currentPagePromo * promoItemsPerPage;
  const indexFirstPromo = indexLastPromo - promoItemsPerPage;
  const currentPromoItems = promoProducts.slice(
    indexFirstPromo,
    indexLastPromo
  );
  const totalPromoPages = Math.ceil(promoProducts.length / promoItemsPerPage);

  const [currentPageAll, setCurrentPageAll] = useState(1);
  const itemsPerPage = 8;
  const indexLastAll = currentPageAll * itemsPerPage;
  const indexFirstAll = indexLastAll - itemsPerPage;
  const currentAllItems = products.slice(indexFirstAll, indexLastAll);
  const totalAllPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <div className="bg-gray-700 pb-10">
        <Navbar
          onSearch={(term) => {
            setSearchTerm(term);
            setCurrentPagePromo(1);
            setCurrentPageAll(1);
          }}
        />
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mt-6 rounded-2xl">
          <BarCenter />
        </div>

        <div className="mt-10 px-8 pt-10 max-w-screen-2xl mx-auto bg-amber-50 rounded-2xl pb-5">
          
          {/* โค๊ดของส่วนโปรโมชั่น */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left inline-block relative">
              สินค้าโปรโมชั่น
              <span className="block mt-1 w-30 h-1 bg-orange-600/40"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentPromoItems.map((product) => (
                <Card
                  key={product.id}
                  className="transition-transform hover:scale-105 duration-300"
                >
                  <Link to={`/product/${product.id}`}>
                    <CardMedia sx={{ height: 160 }} image={product.image} />
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                    </CardContent>
                  </Link>
                  <CardActions className="flex justify-between px-3 pb-2">
                    <Typography>{product.price} บาท</Typography>
                    <Button
                      variant="contained"
                      className="rounded-full"
                      onClick={() => addToCart(product, 1)}
                    >
                      เพิ่มลงตะกร้า
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>

            <Pagination
              count={totalPromoPages}
              page={currentPagePromo}
              onChange={(_, page) => setCurrentPagePromo(page)}
              color="primary"
              sx={{ mt: 4, display: "flex", justifyContent: "center" }}
            />
          </section>

          {/* โค๊ดของส่วนสินค้าทั้งหมด */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left inline-block relative">
              สินค้าทั้งหมด
              <span className="block mt-1 w-30 h-1 bg-orange-600/40"></span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentAllItems.map((product) => (
                <Card
                  key={product.id}
                  className="transition-transform hover:scale-105 duration-300"
                >
                  <Link to={`/product/${product.id}`}>
                    <CardMedia sx={{ height: 160 }} image={product.image} />
                    <CardContent>
                      <Typography variant="h6">{product.name}</Typography>
                    </CardContent>
                  </Link>
                  <CardActions className="flex justify-between px-3 pb-2">
                    <Typography>{product.price} บาท</Typography>
                    <Button
                      variant="contained"
                      className="rounded-full"
                      onClick={() => addToCart(product, 1)}
                    >
                      เพิ่มลงตะกร้า
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>

            <Pagination
              count={totalAllPages}
              page={currentPageAll}
              onChange={(_, page) => setCurrentPageAll(page)}
              color="primary"
              sx={{ mt: 4, display: "flex", justifyContent: "center" }}
            />
          </section>
        </div>
      </div>
    </>
  );
}

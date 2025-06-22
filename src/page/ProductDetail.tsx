"use client";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Container, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ProductImageCard from "../components/ProductImageCard";
import ProductInfoCard from "../components/ProductInfoCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Typography>ไม่พบสินค้านี้</Typography>;
  }

  return (
    <>
      <div className="bg-gray-700 pb-10">
        <Navbar />
        <div className="flex flex-col w-auto px-6 pt-10">
          <div className="mt-10 px-8 pt-10 max-w-screen-2xl mx-auto bg-amber-50 rounded-2xl pb-5">
            <Container sx={{ mt: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <ProductImageCard image={product.image} name={product.name} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ProductInfoCard
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    product={product}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

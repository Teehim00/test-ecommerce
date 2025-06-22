"use client";

import { useCart } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="bg-gray-700 pb-10">
        <Navbar />

        <div className="mt-10 px-8 pt-10 max-w-screen-2xl mx-auto bg-amber-50 rounded-2xl pb-5">
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom className="mb-6">
              ตะกร้าสินค้า
            </Typography>

            <Grid container spacing={4}>
              {cart.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card className="flex flex-col sm:flex-row">
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        width: { xs: "100%", sm: 120 },

                        height: { xs: 200, sm: 120 },
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: 1,
                      }}
                      onClick={() => navigate(`/product/${item.id}`)}
                    />

                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div>
                        <Typography
                          variant="h6"
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          {item.name}
                        </Typography>
                        <Typography className="mt-1">
                          {item.price} บาท
                        </Typography>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <TextField
                          label="จำนวน"
                          type="number"
                          size="small"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          inputProps={{ min: 1 }}
                          sx={{ width: 80 }}
                        />
                        <IconButton onClick={() => removeFromCart(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <Typography variant="h6">
                รวมทั้งหมด: {subtotal.toLocaleString()} บาท
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="mt-4 sm:mt-0"
                href="/payment"
              >
                ไปชำระเงิน
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

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

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-auto px-6 pt-10">
        <div className="bg-gray-200/20 px-4 flex flex-col pb-10  border-white rounded-2xl">
          <div>
            <Container sx={{ mt: 4 }}>
              <Typography variant="h4" gutterBottom>
                ตะกร้าสินค้า
              </Typography>
              <Grid container spacing={2}>
                {cart.map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 150 }}
                        image={item.image}
                      />
                      <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography>{item.price} บาท</Typography>
                        <TextField
                          label="จำนวน"
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          inputProps={{ min: 1 }}
                          sx={{ width: 100, mt: 1 }}
                        />
                        <IconButton onClick={() => removeFromCart(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="h6" sx={{ mt: 4 }}>
                รวมทั้งหมด: {subtotal.toLocaleString()} บาท
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                href="/checkout"
              >
                ไปชำระเงิน
              </Button>
            </Container>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

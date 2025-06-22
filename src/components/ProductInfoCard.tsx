import { Typography, CardContent, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type ProductInfoCardProps = {
  name: string | undefined;
  description: string | undefined;
  price: number;
  product: any;
};

export default function ProductInfoCard({
  name,
  description,
  price,
  product,
}: ProductInfoCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div>
      <CardContent>
        <div>
          <Typography variant="h4">{name}</Typography>
        </div>
        <div>
          <Typography variant="body1" sx={{ my: 2 }}>
            {description}
          </Typography>
        </div>
        <div>
          <Typography variant="h5" color="primary">
            {price} บาท
          </Typography>
        </div>
        <div>
          <TextField
            type="number"
            label="จำนวน"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            sx={{ mt: 2, mb: 2 }}
            inputProps={{ min: 1 }}
            className="bg-white"
          />
        </div>

        <div>
          <Button
            variant="contained"
            onClick={() => {
              addToCart(product, quantity);
            }}
          >
            เพิ่มลงตะกร้า
          </Button>
        </div>
      </CardContent>
    </div>
  );
}

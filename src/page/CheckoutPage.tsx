import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import ErrorModal from "../components/modals/ErrorModal";
import SuccessModal from "../components/modals/SuccessModal";
import { isPhoneNumberValid, isFormComplete } from "../ีutils/validateForm";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("cash");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [invalidPhoneModal, setInvalidPhoneModal] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    if (!isFormComplete(name, address, phone)) {
      setShowModal(true);
      return;
    }
    if (!isPhoneNumberValid(phone)) {
      setInvalidPhoneModal(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-auto px-40 pt-10">
        <div className="bg-gray-200/20 flex flex-col pb-10 border-white rounded-2xl">
          <Container sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              รายการสินค้า
            </Typography>
            {cart.map((item) => (
              <Card key={item.id} sx={{ display: "flex", my: 1 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{ width: 120 }}
                />
                <CardContent>
                  <Typography>{item.name}</Typography>
                  <Typography>
                    {item.quantity} ชิ้น × {item.price} บาท ={" "}
                    {item.quantity * item.price} บาท
                  </Typography>
                </CardContent>
              </Card>
            ))}
            <Typography variant="h6" sx={{ mt: 2 }}>
              รวมทั้งหมด: {total.toLocaleString()} บาท
            </Typography>

            <Typography variant="h5" sx={{ mt: 4 }}>
              ข้อมูลการจัดส่ง
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="ชื่อผู้รับ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="ที่อยู่"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-white"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="เบอร์โทร"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>วิธีชำระเงิน</FormLabel>
                  <RadioGroup
                    row
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                  >
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label="เก็บเงินปลายทาง"
                    />
                    <FormControlLabel
                      value="qr"
                      control={<Radio />}
                      label="QR Code"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  ยืนยันการสั่งซื้อ
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>

        <ErrorModal
          open={showModal}
          onClose={() => setShowModal(false)}
          title="กรอกข้อมูลไม่ครบ"
        />
        <ErrorModal
          open={invalidPhoneModal}
          onClose={() => setInvalidPhoneModal(false)}
          title="เบอร์โทรไม่ถูกต้อง"
          description="กรุณากรอกเฉพาะตัวเลขเท่านั้น (0-9)"
        />
        <SuccessModal open={submitted} onClose={() => setSubmitted(false)} />
      </div>
    </>
  );
}

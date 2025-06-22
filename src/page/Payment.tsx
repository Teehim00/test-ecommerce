"use client";
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

export default function Payment() {
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
      <div className="bg-gray-700 pb-10">
        <Navbar />

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8">
          <Container maxWidth="md">
            <div className="bg-amber-50 p-4 sm:p-6 md:p-8 rounded-2xl">
              <Typography variant="h5" gutterBottom className="mb-4">
                รายการสินค้า
              </Typography>

              {cart.map((item) => (
                <Card
                  key={item.id}
                  sx={{ display: "flex", mb: 2 }}
                  className="flex-col sm:flex-row"
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    sx={{ width: { xs: "100%", sm: 120 }, height: 120 }}
                  />
                  <CardContent className="flex-1">
                    <Typography>{item.name}</Typography>
                    <Typography>
                      {item.quantity} ชิ้น × {item.price} บาท ={" "}
                      {item.quantity * item.price} บาท
                    </Typography>
                  </CardContent>
                </Card>
              ))}

              <Typography variant="h6" className="mt-4">
                รวมทั้งหมด: {total.toLocaleString()} บาท
              </Typography>

              <Typography variant="h5" className="mt-8 mb-4">
                ข้อมูลการจัดส่ง
              </Typography>

              <Grid container spacing={2}>
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
                  <FormControl component="fieldset" className="w-full">
                    <FormLabel component="legend">วิธีชำระเงิน</FormLabel>
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
                <Grid item xs={12} className="text-center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    ยืนยันการสั่งซื้อ
                  </Button>
                </Grid>
              </Grid>
            </div>
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

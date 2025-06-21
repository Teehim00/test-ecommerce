import { Modal, Box, Typography, Button } from "@mui/material";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="success.main">
          สั่งซื้อสำเร็จ
        </Typography>
        <Typography sx={{ mt: 2 }}>ขอบคุณที่ใช้บริการ!</Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={onClose}>
          ปิด
        </Button>
      </Box>
    </Modal>
  );
}

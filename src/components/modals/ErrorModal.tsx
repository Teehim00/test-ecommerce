import { Modal, Box, Typography, Button } from "@mui/material";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  color?: "error" | "primary";
}

export default function ErrorModal({
  open,
  onClose,
  title,
  description,
  color = "error",
}: ErrorModalProps) {
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
        <Typography variant="h6" component="h2" color={color}>
          {title}
        </Typography>
        {description && <Typography sx={{ mt: 1 }}>{description}</Typography>}
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained">
          ปิด
        </Button>
      </Box>
    </Modal>
  );
}

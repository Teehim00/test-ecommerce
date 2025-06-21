import { Card, CardMedia } from "@mui/material";

type ProductImageCardProps = {
  image: string | undefined;
  name: string | undefined;
};

export default function ProductImageCard({
  image,
  name,
}: ProductImageCardProps) {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={name} height="300" />
    </Card>
  );
}

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";
import { useCart } from "../context/CartContext";
import { Link as RouterLink } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const options = [
  { label: "Home", path: "/" },
  { label: "Cart", path: "/cart" },
  { label: "Payment", path: "/checkout" },
];

const ITEM_HEIGHT = 48;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { cart } = useCart();
  return (
    <div className="flex flex-row gap-4 bg-gray-900 justify-between items-center px-10 text-white">
      <div className="w-[80px] h-[60px] items-center">
        <h1 className="text-center text-5xl">Logo</h1>
      </div>
      <div className="flex ml-auto ">
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Box>
      </div>
      <div className="mr-2">
        <Link
          underline="hover"
          color="inherit"
          href="/cart"
          sx={{ color: "white" }}
        >
          <Badge badgeContent={cart.length} color="error">
            <div className="transform -scale-x-100">
              <ShoppingCartTwoToneIcon />
            </div>
          </Badge>
        </Link>
      </div>

      {/* จอ Desktop */}
      <div role="presentation" className="hidden xl:block">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ color: "white" }}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/cart"
            sx={{ color: "white" }}
          >
            Cart
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/checkout"
            sx={{ color: "white" }}
          >
            Payment
          </Link>
        </Breadcrumbs>
      </div>

      {/* จอ moblie */}
      <div className="xl:hidden justify-end ">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ color: "white" }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              <Link
                component={RouterLink}
                to={option.path}
                underline="none"
                color="inherit"
                sx={{ width: "100%", display: "block" }}
              >
                {option.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

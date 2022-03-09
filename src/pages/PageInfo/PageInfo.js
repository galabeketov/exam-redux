import {
  Container,
  Grid,
  Typography,
  Box,
  Skeleton,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetDataBook, getNewsByCategory } from "../../api";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function BookInfo() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { category } = params;

  const { news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    GetDataBook(category);
  }, [category]);

  const changeCategory = (categoryName) => {
    // setCategory(categoryName);
    navigate(`/category/${categoryName}`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      Galimjan
    </Container>
  );
}

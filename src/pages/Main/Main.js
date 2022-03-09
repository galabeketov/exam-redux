import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  setCategory,
  setBooksByCategory,
} from "../../redux/actions/newsActions";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Pagination, Stack, Typography } from "@mui/material";
import { GetCategory, GetDataBook } from "../../api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function Main() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("hardcover-fiction");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(async () => {
    setLoading(true);
    setError(false);
    const obj = await GetCategory();
    if (obj.success) setData(obj.data.results);
    else setError(true);

    setLoading(false);
  }, [category]);

  const _ = require("lodash");
  const data2 = _.chunk(data, 12);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const changeCategory = (bookName) => {
    // setCategory(bookName);
    navigate(`/category/${bookName}`);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box sx={{ flexGrow: 1, py: 6 }}>
          <Typography
            align="center"
            variant="h3"
            sx={{ color: "#0B0B0B", fontSize: "48px" }}
          >
            Categories
          </Typography>
          <Grid container spacing={3}>
            {loading ? (
              <Typography>loading...</Typography>
            ) : (
              data.map((item, index) => (
                <Grid md={4} lg={3} sx={{ px: 1 }} key={index}>
                  <Card
                    sx={{
                      px: 2,
                      py: 2,
                      mt: 3,
                      minHeight: "250px",
                      display: "flex",
                      // alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {item.list_name}
                      </Typography>
                      <Typography color="text.secondary" component="div">
                        Published Date
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.newest_published_date}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() =>
                          changeCategory(item.list_name_encoded.toLowerCase())
                        }
                        color="secondary"
                      >
                        Know more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={data2.length}
            variant="outlined"
            align="center"
            onChange={(e, p) => console.log(p)}
          />
        </Stack>
      </Container>
    </React.Fragment>
  );
}

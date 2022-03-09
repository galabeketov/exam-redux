import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GetDataBook } from "../../api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import Loader from "../../components/Loader/Loader";
import Dialogs from "../../components/Dialog/Dialog";
import BuyDialog from "../../components/BuyDialog/Buydialog.js";
import Responsivedialog from "../../components/BuyDialog/Buydialog.js";

export default function BookInfo() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { category } = params.bookName;

  const { books, loading, error } = useSelector((state) => state.books);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const obj = await GetDataBook(params.bookName);
    setData(obj);
  }, [params.bookName]);

  console.log("books data", data);
  const changeCategory = (categoryName) => {
    // setCategory(categoryName);
    navigate(`/category/${categoryName}`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {data.success ? (
        <Container maxWidth="xl">
          <Typography variant="h3" align="center" my={"40px"}>
            {data.data.results.list_name ? data.data.results.list_name : ""}
          </Typography>
          <Grid container spacing={2}>
            {data.data.results.books ? (
              data.data.results.books.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      flexGrow: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <CardMedia
                        component="img"
                        image={item.book_image}
                        sx={{
                          width: "100%",
                          height: "400px",
                          objectFit: "cover",
                        }}
                        alt="green iguana"
                      />
                    </Box>
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#0B0B0B",
                        }}
                        component="div"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Author : {item.author}
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Typography variant="body2" color="text.secondary">
                          Price :
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.price}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Box>
                      {" "}
                      <CardActions
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: 2,
                          gap: 2,
                          mb: 3,
                        }}
                      >
                        <Responsivedialog props={item} />
                        <Dialogs props={item} />
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ))
            ) : (
              <Loader />
            )}
          </Grid>
        </Container>
      ) : (
        <Loader />
      )}
    </Container>
  );
}

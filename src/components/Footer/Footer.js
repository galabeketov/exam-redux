import { Box, Container, Link, Typography } from "@mui/material";
import { Toolbar } from "material-ui";
import AppBar from "material-ui/AppBar";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ background: "#C4C4C4", py: 3 }}>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box component={"img"} src={"Logo.png"} width="180px" />
          </Typography>
          <Box>
            <Link target="_blank" href="https://www.algorismic.uz/">
              <Box
                component={"img"}
                src="https://www.algorismic.uz/images/algorismic-02.svg"
                width={"150px"}
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

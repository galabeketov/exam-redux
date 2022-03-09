import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Loader from "../Loader/Loader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { Box, Link } from "@mui/material";

export default function Responsivedialog({ props }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="blue"
        sx={{ color: "white" }}
        onClick={handleClickOpen}
      >
        Buy
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Buy From"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.buy_links ? (
              props.buy_links.map((item, index) => (
                <Box
                  sx={{
                    width: "100%",
                    minWidth: 400,
                    bgcolor: "background.paper",
                  }}
                >
                  <nav aria-label="main mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <Link
                          sx={{ color: "black" }}
                          target="_blank"
                          href={item.url}
                        >
                          {item.name}
                        </Link>
                      </ListItem>
                    </List>
                  </nav>
                  <Divider />
                </Box>
              ))
            ) : (
              <Loader />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button
            variant="contained"
            color="blue"
            sx={{ color: "white" }}
            onClick={handleClose}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

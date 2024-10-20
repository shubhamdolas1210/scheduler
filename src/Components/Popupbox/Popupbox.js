import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const Popupbox = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        p: 2,
        borderRadius: " 25px",
        boxShadow: 4,
        backgroundColor: "white",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <CalendarTodayIcon
            color="#FFFFFF"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#F1B942",
              height: "35px",
              width: "35px",
            }}
          />
          <Box display="flex" alignItems="center">
            <Box display="flex" flexDirection="column" sx={{ ml: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  fontFamily: `"Open Sans", sans-serif`,
                  color: "#000000",
                }}
              >
                15 November
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: `"Open Sans", sans-serif`,
                  color: "#000000",
                }}
              >
                10:00 - 11:00 AM
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            fontFamily: `"Open Sans", sans-serif`,
            color: "#000000",
          }}
        >
          Upcoming song for morning prayers
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            fontFamily: `"Open Sans", sans-serif`,
            color: "#A8A8A8",
          }}
        >
          Lorem Ipsum Dolor Sit Amet Consectetur. Ultrices Consectetur Est Orci
          Elementum Commodo Velit Nec At Egestas.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            mb: 2,
            fontWeight: "400",
            fontSize: "14px",
            fontFamily: `"Open Sans", sans-serif`,
            color: "#000000",
          }}
        >
          To be played in{" "}
          <Typography component="span" color="green">
            (15 min)
          </Typography>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "700",
            fontSize: "14px",
            fontFamily: `"Open Sans", sans-serif`,
            color: "#000000",
          }}
        >
          Playlist
        </Typography>

        <Stack spacing={2}>
          {[...Array(2)].map((_, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              sx={{ backgroundColor: "#f9f9f9", borderRadius: "8px", p: 1 }}
            >
              <CardMedia
                component="img"
                image="./assets/kesariya.png"
                alt="Kesariya"
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    fontFamily: `"Open Sans", sans-serif`,
                    color: "#000000",
                  }}
                >
                  Kesariya
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    fontFamily: `"Open Sans", sans-serif`,
                    color: "#000000",
                  }}
                >
                  Pritam Chakraborty - kesariya (from "brahmastra")
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Button
          variant="text"
          color="primary"
          sx={{
            mt: 2,

            fontWeight: "400",
            fontSize: "16px",
            fontFamily: `"Open Sans", sans-serif`,
            color: "#F1B942",
            textTransform: "none",
            marginLeft: "230px",
          }}
        >
          Show More
        </Button>
      </CardContent>
    </Card>
  );
};

export default Popupbox;

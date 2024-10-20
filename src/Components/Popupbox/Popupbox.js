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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const Popupbox = () => {
  return (
    <Card sx={{ maxWidth: 400, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <CalendarTodayIcon color="primary" />
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            15 November
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 1 }}>
            10:00 - 11:00 AM
          </Typography>
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
        <Typography variant="h6" gutterBottom>
          Upcoming song for morning prayers
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Lorem Ipsum Dolor Sit Amet Consectetur. Ultrices Consectetur Est Orci
          Elementum Commodo Velit Nec At Egestas.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
          To be played in{" "}
          <Typography component="span" color="primary">
            15 min
          </Typography>
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          {[...Array(2)].map((_, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              sx={{ backgroundColor: "#f9f9f9", borderRadius: 1, p: 1 }}
            >
              <CardMedia
                component="img"
                image="./assets/kesariya.jpg"
                alt="Kesariya"
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1">Kesariya</Typography>
                <Typography variant="body2" color="text.secondary">
                  Pritam Chakraborty - kesariya (from "brahmastra")
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Button variant="text" color="primary" sx={{ mt: 2 }}>
          Show More
        </Button>
      </CardContent>
    </Card>
  );
};

export default Popupbox;

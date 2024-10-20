import React from "react";
import {
  Paper,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Switch,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { CalendarToday, Share } from "@mui/icons-material";
import { Chip } from "@mui/material";
import "./Scheduler.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarPage = () => {
  const activities = [
    "Listen",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
    "Study",
    "Listen",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
  ];

  const tagStyles = {
    Listen: { backgroundColor: "#E9E9E9", color: "#212121" },
    Learn: { backgroundColor: "#FFDCDC", color: "#212121" },
    "Work-Out": { backgroundColor: "#FFEBD4", color: "#212121" },
    Study: { backgroundColor: "##EAFFDC", color: "#212121" },
    Practice: { backgroundColor: "#E2DBC1", color: "#212121" },
    Other: { backgroundColor: "#B3B1B7", color: "#212121" },
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "80%",
        height: "100%",
        padding: 1,
        marginLeft: "250px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Header Section */}
      <Box
        width="65%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              color: "#3B3E45",
              fontWeight: "700",
              fontSize: "24px",
              fontFamily: `"Open Sans", sans-serif`,
              borderBottom: "1px solid #A8A8A8",
            }}
          >
            Calendar
          </Typography>
          <img
            src="./assets/lock.png"
            alt="lock-logo"
            style={{ marginLeft: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              color: "#312522",

              fontSize: "16px",
              fontFamily: ` "Raleway","Open Sans", sans-serif`,
            }}
          >
            Google Calender
          </Typography>
          <Switch
            sx={{
              "& .MuiSwitch-thumb": {
                color: "#FFFFFF",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#312522",
                border: "1px solid #312522",
              },
              "&.Mui-checked .MuiSwitch-thumb": {
                color: "#312522",
              },
              "&.Mui-checked .MuiSwitch-track": {
                backgroundColor: "#312522",
              },

              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#312522",
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button variant="outlined" startIcon={<CalendarToday />}>
          May 27, 2022 Today
        </Button>
        <ToggleButtonGroup value="day" exclusive aria-label="calendar view">
          <ToggleButton value="day">Day</ToggleButton>
          <ToggleButton value="week">Week</ToggleButton>
          <ToggleButton value="month">Month</ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F1B942",
            borderRadius: "30px",
            textTransform: "none",
            fontSize: "14px",
            width: "190px",
            height: "40px",
            fontFamily: `"Raleway","Open Sans", sans-serif`,
          }}
        >
          <img
            src="./assets/plus.png"
            alt="plus"
            style={{ width: "20px", height: "20px" }}
          />
          Schedule session
        </Button>
      </Box>
      {/* Main Content Section */}
      <Box display="flex" gap={2} sx={{ height: "calc(100% - 60px)" }}>
        {/* Calendar Section */}
        <Box
          flex={2}
          sx={{ borderRight: "1px solid #e0e0e0", paddingRight: 2 }}
        >
          <Typography variant="body2" align="center" sx={{ paddingTop: 10 }}>
            Calendar Events Placeholder
          </Typography>
        </Box>

        <Box
          flex={1}
          sx={{
            paddingLeft: 2,
            "& .MuiTypography-root.MuiDayCalendar-weekDayLabel": {
              fontFamily: '"Open Sans", sans-serif',
              color: "#000000",
              fontWeight: "700",
            },
          }}
        >
          {/* Calendar Widget */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
          </LocalizationProvider>

          {/* Schedule Section */}
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#000000",
              fontWeight: "700",
              fontFamily: `"Open Sans", sans-serif`,
            }}
          >
            Schedule
          </Typography>
          <List>
            <ListItem disableGutters>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {activities.map((activity, index) => (
                  <Chip
                    key={index}
                    label={activity}
                    sx={{
                      ...tagStyles[activity],
                      borderRadius: "16px",
                      padding: "1px 1px",
                      fontFamily: `"Open Sans", "Arial", sans-serif`,
                      fontSize: "14px",
                    }}
                  />
                ))}
              </Box>
            </ListItem>
          </List>

          {/* Music Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="subtitle1"
              mt={2}
              gutterBottom
              sx={{
                color: "#000000",
                fontWeight: "700",
                fontFamily: `"Open Sans", sans-serif`,
              }}
            >
              Music
            </Typography>
            <img
              src="./assets/setting logo.png"
              alt="ert"
              style={{ marginRight: "20px" }}
            />
          </Box>
          <List>
            <ListItem
              sx={{
                backgroundColor: " #f6f6f6",
                marginBottom: "10px",
                borderRadius: "15px",
              }}
            >
              <ListItemText
                primary="Ronald Rich Playlist"
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: `"Open Sans", "Arial", sans-serif`,
                  },
                }}
              />
              <Switch
                sx={{
                  "& .MuiSwitch-thumb": {
                    color: "#F1B942",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#F1B942",
                    border: "1px solid #F6F6F6",
                  },
                  "&.Mui-checked .MuiSwitch-thumb": {
                    color: "#F1B942",
                  },
                  "&.Mui-checked .MuiSwitch-track": {
                    backgroundColor: "#F1B942",
                  },
                }}
              />
              <img
                src="./assets/delete-icon.png"
                alt="delete-icon"
                style={{ marginLeft: "10px" }}
              />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: " #f6f6f6",
                marginBottom: "10px",
                borderRadius: "15px",
              }}
            >
              <ListItemText
                primary="Ronald Rich Playlist"
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: `"Open Sans", "Arial", sans-serif`,
                  },
                }}
              />
              <Switch
                sx={{
                  "& .MuiSwitch-thumb": {
                    color: "#F1B942",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#F1B942",
                    border: "1px solid #F6F6F6",
                  },
                  "&.Mui-checked .MuiSwitch-thumb": {
                    color: "#F1B942",
                  },
                  "&.Mui-checked .MuiSwitch-track": {
                    backgroundColor: "#F1B942",
                  },

                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#1976d2",
                  },
                }}
              />
              <img
                src="./assets/delete-icon.png"
                alt="delete-icon"
                style={{ marginLeft: "10px" }}
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            startIcon={
              <Share style={{ marginRight: "2px", fontSize: "26px" }} />
            }
            fullWidth
            sx={{
              width: "114px",
              mt: 2,
              backgroundColor: "#F1B942",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "16px",
              display: "flex",
              height: "35px",
              marginLeft: "100px",
              marginTop: "0px",
              marginBottom: "60px",
            }}
          >
            Share
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CalendarPage;

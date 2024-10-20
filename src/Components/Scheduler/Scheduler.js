import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Switch,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
} from "@mui/material";
import { Share } from "@mui/icons-material";
import { Chip } from "@mui/material";
import "./Scheduler.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import Popupbox from "../Popupbox/Popupbox";

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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        {/* Left side: Calendar Typography */}
        <Typography
          variant="h6"
          sx={{
            display: "flex",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "auto",
          }}
        >
          <img
            src="./assets/lock.png"
            alt="lock-logo"
            style={{ marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#312522",
              fontSize: "16px",
              fontFamily: `"Raleway", "Open Sans", sans-serif`,
              marginRight: "10px",
            }}
          >
            Google Calendar
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
      <Divider
        sx={{ borderBottomWidth: 1, backgroundColor: "#A8A8A8", my: 2 }}
      />
      <Box>
        <Button
          sx={{ width: "10px", height: "45px", border: "2px solid #DCDFE3" }}
        >
          <img src="./assets/left-arrow.png" alt="l-arrow" />
        </Button>
        <Button
          sx={{
            color: "#3B3E45",
            fontSize: "16px",
            fontFamily: `"Open Sans", sans-serif`,
            textTransform: "none",
            fontWeight: "600",
          }}
        >
          Oct 21, 2024 &nbsp;
          <Box
            component="span"
            sx={{
              color: "#666E7D",
              fontWeight: "400",
            }}
          >
            Today
          </Box>
        </Button>
        <Button
          sx={{ width: "10px", height: "45px", border: "2px solid #DCDFE3" }}
        >
          <img src="./assets/right-arrow.png" alt="r-arrow" />
        </Button>

        <ToggleButtonGroup
          value="day"
          exclusive
          aria-label="calendar view"
          sx={{
            marginRight: "180px",
            marginBottom: "10px",
            justifyContent: "flex-start",

            justifyContent: { xs: "center", sm: "space-around" },
            flexBasis: { xs: "100%", sm: "auto" },
            flexGrow: 2,
          }}
        >
          <ToggleButton
            value="day"
            sx={{
              "&.Mui-selected": {
                fontFamily: '"Open Sans", sans-serif',
                color: "#fffaef",
                backgroundColor: "#f1b942",
                marginLeft: "150px",
              },
              fontSize: { xs: "14px", sm: "16px" },
              marginLeft: { xs: "20px" },
            }}
          >
            Day
          </ToggleButton>
          <ToggleButton value="week">Week</ToggleButton>
          <ToggleButton value="month">Month</ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="contained"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            width: { xs: "100%", sm: "190px" },
            backgroundColor: "#F1B942",
            borderRadius: "30px",
            textTransform: "none",
            fontSize: "14px",
            width: "190px",
            height: "40px",
            fontFamily: `"Raleway","Open Sans", sans-serif`,
            flexBasis: { xs: "100%", sm: "auto" },
            flexGrow: 1,
            marginTop: { xs: "10px", sm: "0" },
          }}
          onClick={handleOpen}
        >
          <img
            src="./assets/plus.png"
            alt="plus"
            style={{ width: "20px", height: "20px" }}
          />
          Schedule session
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: { borderRadius: "30px", marginTop: "100px" },
          }}
          onClick={handleClose}
        >
          <Popupbox />
        </Dialog>
      </Box>

      {/* Main Content Section */}
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
          gap: 1,
          height: "calc(100% - 60px)",
          "@media (max-width: 900px)": {
            flexDirection: "column", // Force vertical stacking below 800px
          },
        }}
      >
        <Box
          flex={2}
          sx={{ borderRight: "1px solid #e0e0e0", paddingRight: 1 }}
        >
          <ScheduleComponent style={{ fontFamily: "Open Sans, sans-serif" }}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
          ;
        </Box>

        <Box
          flex={1}
          sx={{
            paddingLeft: 1,
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

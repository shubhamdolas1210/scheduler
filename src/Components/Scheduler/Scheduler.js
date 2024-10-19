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
import {
  CalendarToday,
  ArrowForward,
  ArrowBack,
  Share,
} from "@mui/icons-material";
import { Chip } from "@mui/material";

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
    Listen: { backgroundColor: "#e0e0e0" },
    Learn: { backgroundColor: "#f8bbd0", color: "#d32f2f" },
    "Work-Out": { backgroundColor: "#ffe082", color: "#ef6c00" },
    Study: { backgroundColor: "#c5e1a5", color: "#388e3c" },
    Practice: { backgroundColor: "#d7ccc8", color: "#5d4037" },
    Other: { backgroundColor: "#b0bec5", color: "#424242" },
  };

  return (
    <Paper
      elevation={3}
      sx={{ width: "80%", height: "100%", padding: 2, marginLeft: "250px" }}
    >
      {/* Header Section */}
      <Box
        width="65%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Calendar</Typography>
        <Button variant="outlined" startIcon={<CalendarToday />}>
          May 27, 2022 Today
        </Button>
        <ToggleButtonGroup value="day" exclusive aria-label="calendar view">
          <ToggleButton value="day">Day</ToggleButton>
          <ToggleButton value="week">Week</ToggleButton>
          <ToggleButton value="month">Month</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" color="warning">
          + Schedule session
        </Button>
      </Box>

      {/* Main Content Section */}
      <Box display="flex" gap={2} sx={{ height: "calc(100% - 60px)" }}>
        {/* Calendar Section */}
        <Box
          flex={2}
          sx={{ borderRight: "1px solid #e0e0e0", paddingRight: 2 }}
        >
          {/* Calendar Grid (simplified for example) */}
          <Typography variant="body2" align="center" sx={{ paddingTop: 10 }}>
            Calendar Events Placeholder
          </Typography>
        </Box>

        {/* Sidebar Content */}

        <Box flex={1} sx={{ paddingLeft: 2 }}>
          {/* Calendar Widget */}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
          </LocalizationProvider>

          {/* Schedule Section */}
          <Typography variant="subtitle1" gutterBottom>
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
                    }}
                  />
                ))}
              </Box>
            </ListItem>
          </List>
          {/* Music Section */}
          <Typography variant="subtitle1" mt={2} gutterBottom>
            Music
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Ronald Rich Playlist" />
              <Switch defaultChecked />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ronald Rich Playlist" />
              <Switch />
            </ListItem>
          </List>
          <Button
            variant="contained"
            startIcon={<Share />}
            fullWidth
            sx={{
              width: "124px",
              mt: 2,
              backgroundColor: "#F1B942",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

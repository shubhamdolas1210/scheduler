import React, { useState } from "react";
import "./Sidebar.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Raleway","Open Sans", serif',
  },
});

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [stationsOpen, setStationsOpen] = useState(false);
  const [performanceOpen, setPerformanceOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleCollectionClick = () => {
    setCollectionOpen(!collectionOpen);
  };

  const handleStationsClick = () => {
    setStationsOpen(!stationsOpen);
  };

  const handlePerformanceClick = () => {
    setPerformanceOpen(!performanceOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer} edge="start" color="inherit">
        <MenuIcon sx={{ color: "#312522", marginLeft: "20px" }} />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#FFFFFF",
            width: "250px",
            borderRadius: "0px 30px 30px 0px",
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <img src="./assets/homelogo.png" alt="homelogo" />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                style={{
                  color: "#ffad00",
                  fontWeight: "600",
                }}
              />
            </ListItem>

            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "var(--css-primary, #f0c987)",
                  opacity: 0.5,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <img
                  src="./assets/personlogo.png"
                  alt="personlogo"
                  sx={{ color: "#312522" }}
                />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ color: "#312522" }} />
            </ListItem>

            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "var(--css-primary, #f0c987)",
                  opacity: 0.5,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <img src="./assets/lib.png" alt="liblogo" />
              </ListItemIcon>
              <ListItemText primary="Library" sx={{ color: "#312522" }} />
            </ListItem>

            <Divider />

            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "var(--css-primary, #f0c987)",
                  opacity: 0.5,
                },
              }}
              onClick={handleCollectionClick}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <img src="./assets/collection.png" alt="collectionlogo" />
              </ListItemIcon>
              <ListItemText primary="Collection" sx={{ color: "#312522" }} />
              {collectionOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={collectionOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/playlist.png" alt="playlistlogo" />
                  <ListItemText
                    inset
                    primary="Playlists"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  {" "}
                  <img src="./assets/track.png" alt="tracklogo" />
                  <ListItemText
                    inset
                    primary="Tracks"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  {" "}
                  <img src="./assets/artist.png" alt="decades-artistlogo" />
                  <ListItemText
                    inset
                    primary="Artists"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/album.png" alt="albumlogo" />
                  <ListItemText
                    inset
                    primary="Albums"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/genres.png" alt="genreslogo" />
                  <ListItemText
                    inset
                    primary="Genres"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/decades-icon.png" alt="decades-iconlogo" />
                  <ListItemText
                    inset
                    primary="Decades"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/geos.png" alt="geoslogo" />
                  <ListItemText
                    inset
                    primary="Geos"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "var(--css-primary, #f0c987)",
                  opacity: 0.5,
                },
              }}
              onClick={handleStationsClick}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <img src="./assets/comm.png" alt="commlogo" />
              </ListItemIcon>
              <ListItemText primary="Community" sx={{ color: "#312522" }} />
              {stationsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={stationsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/schedule.png" alt="schedulelogo" />
                  <ListItemText
                    inset
                    primary="Scheduled listening"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/music.png" alt="musiclogo" />
                  <ListItemText
                    inset
                    primary="Music discovery"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  {" "}
                  <img src="./assets/positive.png" alt="positivelogo" />
                  <ListItemText
                    inset
                    primary="Positive music"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/mood.png" alt="moodlogo" />
                  <ListItemText
                    inset
                    primary="Mood regulation"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "var(--css-primary, #f0c987)",
                  opacity: 0.5,
                },
              }}
              onClick={handlePerformanceClick}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <img src="./assets/perform.png" alt="performlogo" />
              </ListItemIcon>
              <ListItemText primary="Performance" sx={{ color: "#312522" }} />
              {performanceOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={performanceOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/calender.png" alt="calenderlogo" />
                  <ListItemText
                    inset
                    primary="Calendar"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img src="./assets/group.png" alt="grouplogo" />
                  <ListItemText
                    inset
                    primary="Groups"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--css-primary, #f0c987)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img
                    src="./assets/musicanalysis.png"
                    alt="musicanalysislogo"
                  />
                  <ListItemText
                    inset
                    primary="Music analysis"
                    sx={{ color: "#A8A8A8", paddingLeft: "10px" }}
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </ThemeProvider>
      </Drawer>
    </div>
  );
};

export default Sidebar;

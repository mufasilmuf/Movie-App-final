import Typography from "@material-ui/core/Typography";
import { Box, Button, Card, Modal, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import LoginDetails from "./login";
import Registor from "./registor";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

const cardStyle = {
  with: "100%",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

let logoutStyle = {
  display: "none",
};

let loginStyle = {
  display: "visible",
};

var LoginModule = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Typography>
      <Button variant="contained" Style={loginStyle} onClick={handleOpen}>
        Login
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={cardStyle}>
            <div style={{ padding: "6%", width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Register" {...a11yProps(1)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <LoginDetails LoginBtn={loginStyle} LogoutBtn={logoutStyle} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registor />
              </TabPanel>
            </div>
          </Card>
        </Box>
      </Modal>
    </Typography>
  );
};
export default LoginModule;

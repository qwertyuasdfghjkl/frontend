import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "./Login.module.css";
import Box from "@material-ui/core/Box";

import { auth } from "../../firebase";
import { Typography } from "@material-ui/core";

export default function FormDialog() {
  // state for login form
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
    clearState();
  };

  // state for signup form
  const [signupOpen, setSignupOpen] = useState(false);
  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
    clearState();
  };

  // state for email/password
  const [emailState, setEmail] = useState("");

  const [passwordState, setPassword] = useState("");

  // clear values
  const clearState = () => {
    setEmail("");
    setPassword("");
    setErrorMsg("");
  };

  // update values
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // error message
  const [errorMsg, setErrorMsg] = useState("");
  // login/signup

  const handleLogin = (e) => {
    const email = emailState;
    const password = passwordState;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("logged in", user);
        handleLoginClose();
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  const handleSignup = (e) => {
    const email = emailState;
    const password = passwordState;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("registered", user);
        handleSignupClose();
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  // logout
  const handleLogout = () => {
    auth.signOut().then(() => console.log("Logged out"));
  };

  // auth listener
  const [authState, setAuthState] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) {
      setAuthState(true);
      setLoginUser("Logged in as: " + user.email);
    } else {
      setAuthState(false);
      setLoginUser("Please login or sign up to save colors");
    }
  });

  var logButtons;
  if (!authState) {
    logButtons = (
      <Box display="flex" flexDirection="row-reverse">
        <Box order={2}>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={handleLoginOpen}
          >
            Login
          </Button>
        </Box>
        <Box order={1}>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={handleSignupOpen}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    );
  } else {
    logButtons = (
      <Box display="flex" flexDirection="row-reverse">
        <Box>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <div>
      {logButtons}
      <Typography className={styles.text}>{loginUser}</Typography>
      <Dialog
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Login to use previously saved player colors.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={onChangeEmail}
          />
          <TextField
            margin="dense"
            id="standard-password-input"
            label="Password"
            type="password"
            fullWidth
            onChange={onChangePassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
          <Button onClick={handleLoginClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        <Typography className={styles.error}>{errorMsg}</Typography>
      </Dialog>

      <Dialog
        open={signupOpen}
        onClose={handleSignupClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign up to save your player colors.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={onChangeEmail}
          />
          <TextField
            margin="dense"
            id="standard-password-input"
            label="Password"
            type="password"
            fullWidth
            onChange={onChangePassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignup} color="primary">
            Signup
          </Button>
          <Button onClick={handleSignupClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        <Typography className={styles.error}>{errorMsg}</Typography>
      </Dialog>
    </div>
  );
}

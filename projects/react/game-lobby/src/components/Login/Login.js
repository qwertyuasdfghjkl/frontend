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
  const [emailState, setEmail] = useState("")

  const [passwordState, setPassword] = useState("")

  // clear values
  const clearState = () => {
    setEmail("")
    setPassword("")
  }

  // update values
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  // login/signup

  const handleLogin = (e) => {
    const email = emailState;
    const password = passwordState;
    console.log("email", email, "password:", password)
  }

  const handleSignup = (e) => {
    const email = emailState;
    const password = passwordState;
    console.log("email", email, "password:", password)
  }

  return (
    <div>
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
        <p className="error"></p>
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
        <p className="error"></p>
      </Dialog>
    </div>
  );
}

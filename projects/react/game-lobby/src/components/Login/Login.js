import React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "./Login.module.css";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import { auth } from "../../firebase";
import { storage } from "../../firebase";
import { usePlayers } from "../PlayerContext/PlayerContext";

import axios from "axios";

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

  const { players, setPlayers } = usePlayers();
  // login/signup
  const handleLogin = (e) => {
    const email = emailState;
    const password = passwordState;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
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
        const newPlayers = players.map((p) => p.color);
        console.log("newPlayers", newPlayers[0]);
        axios
          .post(
            `https://us-central1-game-lobby-13650.cloudfunctions.net/setColors?uid=${user.user.uid}&p1=${newPlayers[0]}&p2=${newPlayers[1]}&p3=${newPlayers[2]}&p4=${newPlayers[3]}`
          )
          .then((response) => {
            console.log(response.data);
          });
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  // logout
  const handleLogout = async () => {
    await auth.signOut().then(() => window.location.reload());
  };

  // auth listener
  const [authState, setAuthState] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [userInitial, setUserInitial] = useState("");
  const [uid, setUid] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const initial = user.email.charAt(0).toUpperCase();
        setUserInitial(initial);
        setAuthState(true);
        setUid(user.uid);
        setLoginUser("Logged in as: " + user.email);

        var storageRef = storage.ref();
        var imagesRef = storageRef.child("images");
        imagesRef
          .child(user.uid)
          .getDownloadURL()
          .then((urlDownload) => {
            setUrl(urlDownload);
          })
          .catch((error) => {
            setUrl("");
          });

        axios
          .get(
            `https://us-central1-game-lobby-13650.cloudfunctions.net/getColors?uid=${user.uid}`
          )
          .then((response) => {
            //   setPlayers(
            //     players.map((p) => {
            //       console.log(p)
            //       // p.color = response.data.p + p.id
            //     }
            // ));
            setPlayers([
              {
                id: 1,
                text: "P1",
                color: response.data.p1,
              },
              {
                id: 2,
                text: "P2",
                color: response.data.p2,
              },
              {
                id: 3,
                text: "P3",
                color: response.data.p3,
              },
              {
                id: 4,
                text: "P4",
                color: response.data.p4,
              },
            ]);
          });
      } else {
        setAuthState(false);
        setUrl("");
        setLoginUser("Please login or sign up to save colors");
        setUid("");
        setUserInitial("");
      }
    });
  }, []);

  // cloud storage
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${uid}`).put(image);
    uploadTask.on(
      "stage_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(uid)
          .getDownloadURL()
          .then((urlNew) => {
            setUrl(urlNew);
            console.log(url)
          });
      }
    );
  };

  // changing photo
  // var avatar;
  // if (url !== "") {
  //   avatar = <Avatar src={url}>{userInitial}</Avatar>;
  // } else {
  //   avatar = <Avatar src={url}>{userInitial}</Avatar>;
  // }

  // changing jsx because authState
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
      <>
        <Box display="flex" flexDirection="row-reverse">
          <Box order={1}>
            <Button
              size="small"
              variant="outlined"
              className={styles.btn}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
          <Box order={2}>
            <Avatar src={url}>{userInitial}</Avatar>
            {console.log("asdf", url, userInitial)}
            {/* <Avatar>{userInitial}</Avatar> */}
          </Box>

          <Box order={3} className={styles.uploadBtn}>
            <Button
              size="small"
              variant="outlined"
              className={styles.btn}
              onClick={handleUpload}
            >
              Upload Photo
            </Button>
          </Box>
          <Box order={4}>
            <input type="file" onChange={handleImage} />
          </Box>
        </Box>
        <Box display="flex"></Box>
      </>
    );
  }

  // changing image

  return (
    <>
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
    </>
  );
}

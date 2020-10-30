import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { postUser } from "../../methods";

// components
import Btn from "../Btn/Btn";

const useStyles = makeStyles({
  root: {
    marginTop: 32,
    marginBottom: 32,
  },
  content: {
    textAlign: "center",
  },
  input: {
    marginTop: 16,
  },
  actions: {
    justifyContent: "center",
    marginBottom: 16,
  },
});

const AddUser = () => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    postUser("http://localhost:8000/addUser", name);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography>Add User</Typography>
        <TextField
          variant="outlined"
          placeholder="Name"
          className={classes.input}
          value={name}
          onChange={handleChange}
        />
      </CardContent>
      <CardActions className={classes.actions}>
        <Btn
          color="primary"
          text="Submit"
          variant="contained"
          onClick={handleSubmit}
        />
      </CardActions>
    </Card>
  );
};

export default AddUser;

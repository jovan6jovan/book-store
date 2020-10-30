import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { postBook } from "../../methods";

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
    display: "block",
  },
  actions: {
    justifyContent: "center",
    marginBottom: 16,
  },
});

const AddBook = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = () => {
    postBook("http://localhost:8000/addBook", title, author, year);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography>Add Book</Typography>
        <TextField
          variant="outlined"
          placeholder="Title"
          className={classes.input}
          value={title}
          onChange={handleTitle}
        />
        <TextField
          variant="outlined"
          placeholder="Author"
          className={classes.input}
          value={author}
          onChange={handleAuthor}
        />
        <TextField
          variant="outlined"
          placeholder="Year"
          className={classes.input}
          value={year}
          onChange={handleYear}
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

export default AddBook;

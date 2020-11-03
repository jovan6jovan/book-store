import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// components
import SelectBook from "../SelectBook/SelectBook";
import ReadingList from "../ReadingList/ReadingList";
import FavoriteBook from "../FavoriteBook/FavoriteBook";

const useStyles = makeStyles({
  margin: {
    margin: "3rem 0",
  },
});

const EditUser = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [readingList, setReadingList] = useState([]);
  const [favBook, setFavBook] = useState({});

  const userId = props.match.params.id;
  const API = `http://localhost:8000/users/${userId}`;

  useEffect(() => {
    fetch(API, {
      headers: {
        Accept: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data[0]);
        setReadingList(data[0].Reading);
        setFavBook(data[0].Favorite);
      });
  }, [API]);

  return (
    <>
      <Typography variant="h2" className={classes.margin}>
        {user.name}
      </Typography>
      <div>
        <SelectBook label="Add to reading" userId={userId} />
      </div>
      <div className={classes.margin}>
        <SelectBook label="Favorite Book" userId={userId} />
      </div>
      <Grid
        container
        spacing={3}
        justify="space-around"
        className={classes.margin}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="textSecondary">
            Favorite Book
          </Typography>
          <FavoriteBook favBook={favBook} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="textSecondary">
            Reading List
          </Typography>
          <ReadingList readingList={readingList} />
        </Grid>
      </Grid>
    </>
  );
};

export default EditUser;

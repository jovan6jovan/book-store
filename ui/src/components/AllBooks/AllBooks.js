import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { AppConsumer } from "../../context";

const useStyles = makeStyles({
  margin: {
    margin: "2rem 0",
  },
});

const AllBooks = () => {
  const classes = useStyles();

  return (
    <AppConsumer>
      {(value) => {
        const { books } = value;

        const booksList = books.map((book, idx) => {
          return (
            <Grid item key={idx} xs={12} md={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">Title: {book.title}</Typography>
                  <p>
                    <em>Author: {book.author}</em>
                  </p>
                  <p>Year: {book.year}</p>
                </CardContent>
              </Card>
            </Grid>
          );
        });

        return (
          <>
            <Typography variant="h2" className={classes.margin}>
              Books
            </Typography>
            <Grid container spacing={5}>
              {booksList}
            </Grid>
          </>
        );
      }}
    </AppConsumer>
  );
};

export default AllBooks;

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Create } from "@material-ui/icons";

// components
import { AppConsumer } from "../../context";
import Btn from "../Btn/Btn";

const useStyles = makeStyles({
  margin: {
    margin: "2rem 0",
  },
});

const AllUsers = () => {
  const classes = useStyles();

  return (
    <AppConsumer>
      {(value) => {
        const { users } = value;

        return (
          <>
            <Typography variant="h2" className={classes.margin}>
              Users
            </Typography>
            <Grid container spacing={5}>
              {users.map((user) => {
                return (
                  <Grid item xs={12} md={4} key={user.id}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography
                          variant="h3"
                          color="textSecondary"
                          gutterBottom
                        >
                          {user.name}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link to={`/edit-user/${user.id}`}>
                          <Btn
                            icon={<Create />}
                            text="Edit"
                            color="primary"
                            variant="contained"
                          />
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </>
        );
      }}
    </AppConsumer>
  );
};

export default AllUsers;

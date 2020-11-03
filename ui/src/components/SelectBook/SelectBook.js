import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { postBookToReadingList, updateUserFavBook } from "../../methods";

// components
import { AppConsumer } from "../../context";
import Btn from "../Btn/Btn";

const useStyles = makeStyles({
  formControl: {
    marginBottom: 16,
    minWidth: 240,
  },
});

const SelectBook = ({ label, userId }) => {
  const classes = useStyles();
  const [bookId, setBookId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setBookId(e.target.value);
  };

  const handleClick = () => {
    const idOfTheUser = Number(userId);

    if (label === "Add to reading") {
      postBookToReadingList("http://localhost:8000/saveBookToUserReadingList", bookId, idOfTheUser);
    }
    if (label === "Favorite Book") {
      updateUserFavBook(
        "http://localhost:8000/saveUserFavBook",
        bookId,
        bookTitle,
        idOfTheUser
      );
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppConsumer>
      {(value) => {
        const { books } = value;

        return (
          <>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="controlled-open-select-label">
                  {label}
                </InputLabel>
                <Select
                  labelId="controlled-open-select-label"
                  id="controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={bookId}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {books.map((book) => {
                    return (
                      <MenuItem
                        key={book.id}
                        value={book.id}
                        onClick={() => setBookTitle(book.title)}
                      >
                        {book.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Btn
              color="primary"
              text="Submit"
              variant="contained"
              onClick={handleClick}
            />
          </>
        );
      }}
    </AppConsumer>
  );
};

export default SelectBook;

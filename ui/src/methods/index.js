export const postUserBook = (url, bookId, userId) => {
  fetch(`${url}?bookId=${bookId}&userId=${userId}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      'text': 'UserBook posted successfully'
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const updateUserBook = (url, bookId, bookTitle, userId) => {
  fetch(`${url}?bookId=${bookId}&bookTitle=${bookTitle}&userId=${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'text': 'UserBook updated successfully'
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const postUser = (url, name) => {
  fetch(`${url}?name=${name}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      'text': 'User added successfully'
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const postBook = (url, title, author, year) => {
  fetch(`${url}?title=${title}&author=${author}&year=${year}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      'text': 'Book added successfully'
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

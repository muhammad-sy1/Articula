export function UsersFetch() {
  const cred = localStorage.getItem("credentials");
  return fetch(
    `https://tamkeen-dev.com/api/users-list?_format=json&name=&field_name=&mail&field_gender=9&status=1&field_surname=`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${cred}`,
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("err");
    }
    return response.json();
  });
}

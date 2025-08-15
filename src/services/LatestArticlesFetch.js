export function LatestArticlesFetch() {
  const cred = localStorage.getItem("credentials");
  return fetch(
    `https://tamkeen-dev.com/api/blogs-api?items_per_page=10&page=0&category=6&tag=3&sort_by=created_date&sort_order=DESC`,
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

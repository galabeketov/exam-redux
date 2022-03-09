import axios from "axios";
// https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du
const instanceAxios = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3",
});
//  kvwTMgzSqnPCjAXEPj0GSrc2lIMLVNdl
export const GetDataBook = async (bookName) => {
  try {
    const res = await instanceAxios.get(
      `/lists/current/${bookName}.json?api-key=kvwTMgzSqnPCjAXEPj0GSrc2lIMLVNdl`
    );

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const GetCategory = async () => {
  try {
    const res = await instanceAxios.get(
      `/lists/names.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`
    );

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

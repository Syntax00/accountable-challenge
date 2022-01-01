import staticListData from "./listData.json";

const fetchListData = (forceError: boolean): any =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (forceError) {
        reject("Something went wrong while trying to fetch the list data!");
      } else {
        resolve(staticListData);
      }
    }, 2000);
  });

export default fetchListData;

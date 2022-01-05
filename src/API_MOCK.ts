import staticListData from "./listData.json";

// Send the forceError parameter as (true) in order to throw error, i.e. await fetchListData(true);
const fetchListData = (forceError: boolean = false): any =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!forceError) {
        resolve(staticListData);
      } else {
        reject({ message: "Couldn't get list data!" });
      }
    }, 2000);
  });

export default fetchListData;

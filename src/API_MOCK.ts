import staticListData from "./listData.json";

const fetchListData = (): any =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(staticListData);
    }, 2000);
  });

export default fetchListData;

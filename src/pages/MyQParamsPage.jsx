import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MyQParamsPage = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location", location);
    let newSearch = location.search.substring(1); //remove the first char
    console.log("newSearch", newSearch);
    let keyValsArr = newSearch.split("&");
    console.log("keyValsArr", keyValsArr);
    let searchObj = {};
    for (let item of keyValsArr) {
      let arr = item.split("=");
      console.log("arr", arr);
      searchObj[arr[0]] = arr[1];
    }
    console.log("searchObj", searchObj);
    objToQParams();
  }, []);
  const objToQParams = () => {
    let obj = {
      name: "kenny",
      lastname: "mccormic",
      phone: "050500550505",
    };
    let qparamsStr = "?";
    for (let [key, val] of Object.entries(obj)) {
      qparamsStr += `${key}=${val}&`;
    }
    qparamsStr = qparamsStr.slice(0, -1);
    console.log("qparamsStr", qparamsStr);
  };
  return <h1>MyQParams</h1>;
};

export default MyQParamsPage;

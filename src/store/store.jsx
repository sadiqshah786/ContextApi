import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
 const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [data,setData] = useState({});

    const objData = {
      name: "sadiq",
      profile:"https://media.licdn.com/dms/image/D4D03AQGhlI8dX3nYoA/profile-displayphoto-shrink_100_100/0/1703941221572?e=1709769600&v=beta&t=z5djoI5M_ul5RCgPmrSP2PR8XzQPBBwoRsJjctbiDhg"
  };
   const fetchData = ()=>{
         const apiUrl = [{
           url: 'https://fakestoreapi.com/products' , 
           key: 1
         },
         {
           url: 'https://fakestoreapi.com/users',
           key: 2
         }
        ]
        Promise.all(apiUrl.map((item) => {
            return fetch(item.url)
              .then((res) => {
                return res.json();
              })
              .then((apiData) => {
                return apiData;
              });
              
          }))
          .then((combinedData) => {
            setData(combinedData);
          });
           
   }
   useEffect(()=>{
    fetchData();
   },[])
  return <AppContext.Provider  value={[data,objData]} >{children}</AppContext.Provider>;
};


AppProvider.propTypes = {
    children : PropTypes.node.isRequired
}


export {AppContext,AppProvider}

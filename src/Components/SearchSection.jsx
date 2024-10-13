// import React, { useEffect, useState } from "react";

// export default function SearchSection() {
//   const [inputValue, setInputValue] = useState("");
//   const [srestaurantData, setsRestaurantData] = useState([]);

//   async function inputDataFetch() {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.660882&lng=77.160885"
//     );
//     const data = await response.json();
//     console.log(data);
//     setsRestaurantData(data?.data);
//     console.log(setsRestaurantData);
//   }

//   useEffect(() => {
//     inputDataFetch();
//   }, []);

//   return (
//     <div className="w-full h-screen flex flex-col justify items-center gap-4">
//       <div
//         id="searchInput"
//         style={{ border: "2px solid gray" }}
//         className="flex justify-between items-center gap-3 w-[90%] p-3 py-8 overflow-hidden h-10 rounded-lg relative top-20 bottom-2 border-black"
//       >
//         <input
//           type="text"
//           onChange={(elemValue) => {
//             setInputValue(elemValue.target.value);
//             console.log(elemValue.target.value);
//           }}
//           value={inputValue}
//           placeholder="Enter for restaurant and food"
//           className="tracking-wide text-xl rounded-xl border-none outline-none w-full h-full font-semibold px-4 py-8"
//         />
//         <i className="ri-search-line text-2xl"></i>
//       </div>
//       <div>
//         {/* {srestaurantData.map((item, index) => (
//           <h1 key={index}>{item.name}</h1> 
//         ))} */}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";

export default function SearchSection() {
  const [inputValue, setInputValue] = useState("");
  const [srestaurantData, setsRestaurantData] = useState([]);
  const [error, setError] = useState(null);

  async function inputDataFetch() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.660882&lng=77.160885"
      );
      const data = await response.json();
      setsRestaurantData(data?.data);
      console.log(setsRestaurantData);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    inputDataFetch();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify items-center gap-4">
      <div
        id="searchInput"
        style={{ border: "2px solid gray" }}
        className="flex justify-between items-center gap-3 w-[90%] p-3 py-8 overflow-hidden h-10 rounded-lg relative top-20 bottom-2 border-black"
      >
        <input
          type="text"
          onChange={(elemValue) => {
            setInputValue(elemValue.target.value);
            console.log(elemValue.target.value);
          }}
          value={inputValue}
          placeholder="Enter for restaurant and food"
          className="tracking-wide text-xl rounded-xl border-none outline-none w-full h-full font-semibold px-4 py-8"
        />
        <i className="ri-search-line text-2xl"></i>
      </div>
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div>
          {/* {srestaurantData.map((item, index) => (
            <h1 key={index}>{item.name}</h1>
          ))} */}
        </div>
      )}
    </div>
  );
}
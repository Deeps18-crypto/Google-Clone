import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
import axios from "axios"

const CONTEXT_KEY = "88cfa81aca9eed393";

function useGoogleSearch(term) {
  const [data, setdata] = useState(null);

  useEffect(() => {
  //   async function fetchdata() {
  //     const request = await axios
  //       .get(
  //         `https://www.googleapis.com/customsearch/vi?key=
  //         ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
  //       )
  //       .then((response) => response.json());
  //     setdata(request);
  //   }
  //   fetchdata();
  // }, [term]);
  async function fetchdata() {
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=
        ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then((response) => response.json())
      .then((result)=> {
        setdata(result)
      })
  }
  fetchdata();
}, [term]);
  return { data };
}

export default useGoogleSearch;

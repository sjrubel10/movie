// import React from "react";

const WpApiData = async () => {


    console.log("Entry Ok");

    const response = await fetch('http://localhost:8888/wpapi/wp-json/wp/v2/posts', {
        headers: {
            'Authorization': 'Basic YWRtaW46cGFzczEyMzQ='
        }
    });

    const data = await response.json();

    console.log(data);

    // const movies = data.Search;

    // // console.log(movies);

    // setMovies( movies );

}

export default WpApiData;
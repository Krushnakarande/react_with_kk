import React, { use, useEffect, useState } from 'react';
import { useLoaderData,Link } from 'react-router-dom';

function Github() {

  const data = useLoaderData();

  // const [data, setData] = useState({}); // start as object

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Krushnakarande')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //         setData(data);
  //     })
  //     .catch(err => console.error("Error fetching GitHub data:", err));
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 rounded-lg">
      <h2>Github followers: {data.followers}</h2>
      {data.avatar_url && (
        <img src={data.avatar_url} alt="GitHub avatar" width={300} />
      )}
    </div>


  );
}

export default Github;

export const githubInfoLoder = async () => {
  const res = await fetch('https://api.github.com/users/Krushnakarande');
  return res.json();
}

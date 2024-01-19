import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  // to fetch the followers from github on component load/mount
  //   useEffect(() => {
  //     fetch("https:/api.github.com/users/Saadhya")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-500 text-white text-3xl p-3">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="gihub photo" width={300} />
      </div>
    </>
  );
};

export default Github;

// though its not a good practice to keep the function here.
export const githubInfoLoader = async () => {
  const response = await fetch("https:/api.github.com/users/Saadhya");
  return response.json(); //this is a promise response
};

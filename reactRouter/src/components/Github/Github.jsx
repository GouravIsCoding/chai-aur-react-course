import React from "react";
import { useLoaderData } from "react-router-dom";
export function Github(props) {
  const data = useLoaderData();
  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https;//api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setdata(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="text-3xl bg-gray-600 text-white text-center">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="" />
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  const data = await res.json();
  console.log(res);
  return data;
};

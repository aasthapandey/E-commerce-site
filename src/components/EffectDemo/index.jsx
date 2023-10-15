import { useState, useEffect } from "react";

export const EffectDemo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((result) => {
        return result.json();
      })
      .then((final) => {
        setUserInfo(final);
      });
  }, [userId]);

  return (
    <h6>
      This is Effect Demo {JSON.stringify(userInfo)}{" "}
      <button
        onClick={(e) => {
          setUserId(2);
        }}
      >
        Click
      </button>
    </h6>
  );
};

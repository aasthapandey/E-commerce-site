import React, { useState, useEffect } from "react";

function LazyDemo({ userId }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
    }, []);
  }, [userId]);

  if (!user) {
    return <div>Loading user....</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export default LazyDemo;

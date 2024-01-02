import React, { useEffect, useState } from "react";

const Albums = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=50"
        );

        if (!res.ok) {
          throw new Error("Xatolik yuz berdi!");
        }
        let data = await res.json();
        setImages(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Albums</h1>
      {images.map((image) => {
        return (
          <div key={image.id}>
            <h2>{image.title}</h2>
            <img src={image.url} alt="" width={100} />
          </div>
        );
      })}
      {error && <h1>Not Found:)</h1>}
    </div>
  );
};

export default Albums;

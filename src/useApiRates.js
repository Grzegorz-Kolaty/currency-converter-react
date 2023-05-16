import { useState } from "react";

const fetchData = () => {
  const [data, setData] = useState({ hits: [] });

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default fetchData;
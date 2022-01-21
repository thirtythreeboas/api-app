import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './css/main.scss';
import SearchField from './components/SearchField';
import Items from './components/Items';
import Item from './components/Item';

function App() {

  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);

  const url = 'https://fortnite-api.com/v2/cosmetics/br/new';

  useEffect(() => {
    if (data.length !== 0) return;
    fetch(url)
    .then(res => res.json())
    .then(res => setData(data.concat(res.data.items)))
    .catch(err => console.log('failed'))
  }, [data]);

  const onChange = e => {
    let value = e.target.value;
    if (data.length === 0) return;
    let arr = [];
    const input = value.toLowerCase();
    arr = data.filter(item => item.name.toLowerCase().includes(input));
    if (value === '') {
      setContent([]);
    } else {
      setContent([...arr]);
    }
  }

  if (!data) return "No post!";

  return (
    <div className="main">
      <SearchField
        onChange={onChange}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Items
            data={data}
            content={content}/>} />
          {
            data.map((item, i) => (
              <Route
                path={`/${item.path}`}
                key={item.id}
                element={<Item item={item} />}
              />
              )
            )
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;

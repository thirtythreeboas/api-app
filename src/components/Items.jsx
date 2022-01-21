import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Items({ data, content }) {

  const [value, setValue] = useState('');

  useEffect(() => {
    const input = document.getElementById('value').value;
    setValue(input)
  })

  return (
    <div className="links">
      {
        content.length === 0 && value === '' ?
          data.map(item => (
            <Link to={`/${item.path}`} key={item.id}>{item.name}</Link>
          ))
        :
          (
            content.length !== 0 && value.length !== 0 ?
              content.map(item => (
                <Link to={`/${item.path}`} key={item.id}>{item.name}</Link>
              ))
            :
              null
          )
      }
    </div>
  )
}

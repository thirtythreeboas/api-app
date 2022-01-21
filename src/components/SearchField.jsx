import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchField({ onChange }) {

  return (
    <div className="nav">
      <button><Link to="/">Home</Link></button>
      <form>
        <input
          type="text"
          id="value"
          onChange={e => onChange(e)}
        />
      </form>
    </div>
  )
}

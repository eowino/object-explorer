import React from 'react';

export default function Title({ title }) {
  return (
    <h1 className="title">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://mdn.io/${encodeURI(title)}`}
      >
        {title}
      </a>
    </h1>
  );
}

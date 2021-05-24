import React from 'react';

interface GenreResponseProps {
  title: string;
}

export function Header(props: GenreResponseProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.title}</span></span>
    </header>
  )
}
import React from 'react';

type Hit_Gallery = {
  name: string;
};

const Greetings: React.FC<Hit_Gallery> = ({ name }) => (
  <div>Hello, {name}</div>
);

export default Greetings;
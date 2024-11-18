import React from 'react';
import Accordion from '../components/Accordion';

const Home = () => {
  const accordionItems = [
    {
      header: 'Section 1',
      content: 'Contenu de la section 1',
    },
    {
      header: 'Section 2',
      content: 'Contenu de la section 2',
    },
    {
      header: 'Section 3',
      content: 'Contenu de la section 3',
    },
  ];

  return (
      <div>
        <h1>Accordéon Accessible</h1>
        <Accordion items={accordionItems} />
      </div>
  );
};

export default Home;

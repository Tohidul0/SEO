import React from 'react';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer';
import AttachmentModal from './components/AttachmentModal';


function App() {

  const data = [
    {
      id: 1,
      title: 'Card 1',
      content: 'This is the content of Card 1.',
      subCards: [
        { id: 1, title: 'Sub Card 1' },
        { id: 2, title: 'Sub Card 2' },
        { id: 3, title: 'Sub Card 3' },
        { id: 4, title: 'Sub Card 4' },
        { id: 5, title: 'Sub Card 5' }
      ]
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'This is the content of Card 2.',
      subCards: [
        { id: 1, title: 'Sub Card 1' },
        { id: 2, title: 'Sub Card 2' },
        { id: 3, title: 'Sub Card 3' }
      ]
    },
    {
      id: 3,
      title: 'Card 3',
      content: 'This is the content of Card 3.',
      subCards: [
        { id: 1, title: 'Sub Card 1' },
        { id: 2, title: 'Sub Card 2' },
        { id: 3, title: 'Sub Card 3' },
        { id: 4, title: 'Sub Card 4' }
      ]
    }
  ];
 

  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="p-8">
      <div className="flex justify-end mb-4">
        <AttachmentModal />
      </div>
      <CardContainer data={data} />
    </div>
      
    </div>
  )
}

export default App

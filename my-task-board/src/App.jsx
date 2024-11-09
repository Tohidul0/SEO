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
        { id: 1, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 2, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 3, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 4, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 5, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        
        
      ]
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'This is the content of Card 2.',
      subCards: [
        { id: 1, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 2, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 3, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 4, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 5, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        
        
      ]
    },
    {
      id: 3,
      title: 'Card 3',
      content: 'This is the content of Card 3.',
      subCards: [
        { id: 1, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 2, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 3, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 4, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 5, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        
        
      ]
    },
    {
      id: 4,
      title: 'Card 4',
      content: 'This is the content of Card 4.',
      subCards: [
        { id: 1, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 2, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 3, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 4, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 5, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', img2:'https://img.freepik.com/premium-photo/young-happy-handsome-men-portrait-yellow-background-model_758367-124474.jpg?w=740', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        
        
      ]
    },
    {
      id: 5,
      title: 'Card 5',
      content: 'This is the content of Card 1.',
      subCards: [
        { id: 1, title: 'Sub Card 1',img1: 'https://t3.ftcdn.net/jpg/03/28/26/86/360_F_328268657_OSSRDoZeO6isXj3QxRUTaXlmGF6lLmyZ.jpg', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 2, title: 'Sub Card 1', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 3, title: 'Sub Card 1', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        { id: 4, title: 'Sub Card 1', ClientName: "Client Name", CusName: "Sadik Istiak" , Lorem: "lorem god practice do going...", weght : "1/2", date:"30-12-2022", num :"15" ,plus:"12+"},
        
        
      ]
    },
    
  ];
 

  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="p-8">
      <div className="flex  mb-4">
        <AttachmentModal />
      </div>
      <CardContainer data={data} />
    </div>
      
    </div>
  )
}

export default App

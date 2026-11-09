 import React from 'react'
 import Section1 from './components/Section1/Section1.jsx'
 

 const App = () => {

    const users=[
      {
        img :'https://plus.unsplash.com/premium_photo-1661575201264-959798ecc47a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        tag:'Satisfied',
        intro:''
      },
      {
        img :'https://plus.unsplash.com/premium_photo-1661600540194-205f71a1e537?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        tag:'Underserved',
        intro:''
      },
      {
        img :'https://media.istockphoto.com/id/2196870531/photo/making-decision-on-the-move.jpg?s=2048x2048&w=is&k=20&c=EvS5kbgHC1Y97b4d6_WDYlrX4maHCtdHBZu4KX5Uv5k=',
        tag:'Underbanked',
        intro:''
      }
    ]


   return (
     <div>
        <Section1 users={users}/>
     </div>
   )
 }
 
 export default App
 
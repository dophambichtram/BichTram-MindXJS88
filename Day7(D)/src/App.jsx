import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header';
import Content from './component/Content';
import Title from './component/Title';
import Footer from './component/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='background'>
        <Header />
        <Title />
        <Content />
        <Footer />

      </div>
    </>

  );
}

export default App;


import './App.css';
import Header from './component/Header/Header';
import Content from './component/Content/Content';
import Title from './component/Title/Title';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <div className='background'>
        <Header />
        <Content />
        <Title />
      </div>
      <Footer />
    </>

  );
}

export default App;
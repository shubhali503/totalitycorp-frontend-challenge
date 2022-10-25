import './App.css';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import ImageSliderSection from './components/ImageSliderSection';
import { newSlidesData, dreamersData } from './components/Data';
import './sass/styles.scss';
import Browse from './components/Browse';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [colorChange, setColorchange] = useState(false);
  const changeHeaderColor = () => {
     if(window.scrollY >= 79){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeHeaderColor);

  return (
    <>
    <header className={colorChange ? 'header header-colored' : 'header'}>
      <Navbar/>
    </header>

    <main>
      <Explore/>
      <Trending/>
      <ImageSliderSection sectionclass={"newnotable"} heading={"New and notable"} data={newSlidesData}/>
      <ImageSliderSection sectionclass={"dreamers"} heading={"Dreamers spotlight"} data={dreamersData}/>
      <Browse/>
    </main>

    <Footer/>
    </>
  );
}

export default App;

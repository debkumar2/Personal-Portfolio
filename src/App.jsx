
import { useEffect, useState } from 'react'
import './App.css'
import ArrowDown from './assets/arrow-down.svg';
import AboutMe from './components/AboutMe'
import AdditonalSkill from './components/AdditonalSkill'
import Banner from './components/Banner'
import Footer from './components/Footer'

import Header from "./components/Header"
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])
  return (
    <>
      <Header scrolling={scrolling} />
      <Banner />
      <Projects scrolling={scrolling} />
      <Technologies scrolling={scrolling} />
      <AdditonalSkill />
      <AboutMe scrolling={scrolling} />
      <Footer />
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </>
  )
}

export default App

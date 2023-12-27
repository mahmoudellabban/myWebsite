  import React, {useState, useEffect } from 'react'
  import {RiCloseLine} from "react-icons/ri"
  import {AiOutlineMenu} from "react-icons/ai"
  import {BsGithub, BsLinkedin, BsFacebook, BsInstagram} from "react-icons/bs"
  import "./header.css"
  const Menu = () => (
    <>
      <p><a href="#navbar">Home</a></p>
      <p><a href="#about">About</a></p>
      <p><a href="#skills">Skills</a></p>
      <p><a href="#work">Portfolio</a></p>
      <p><a href="#services">Services</a></p>
    </>
  )
  const Typewriter = ({ textArray }) => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      const interval = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 2000);

      return () => clearTimeout(interval);
    }, [index, textArray.length]);

    useEffect(() => {
      let currentIndex = 0;
      let currentText = '';
      const typeInterval = setInterval(() => {
        if (currentIndex <= textArray[index].length) {
          currentText = textArray[index].slice(0, currentIndex);
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }, [index, textArray]);

    return <span style={{color:'#f1f1f1'}}> {displayedText}</span>;
;
  };

  const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const roles = ['Front End Developer', 'Designer', 'Freelancer'];
    return (
      <div className="header">
        <div className="navbar" id='navbar'>    
          <div className="links"> 
            <div className="container">
              <Menu />
            </div>
          </div>
          <div className="menu">
            {toggleMenu ? 
            (<RiCloseLine color="#f8482f" size={27} onClick={() => setToggleMenu(false)} />)
            :(<AiOutlineMenu color="#f8482f" size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div className='container scale-up-tr'>
                <div className='links'>
                  <Menu />
                </div>
              </div>)}
          </div>
        </div>
        <div id='home' className='hero'>
          <div className="container">
            <h1>Mahmoud Fathy Ellabban</h1>
            <p className="role-text">
              I'm a <Typewriter textArray={roles} />
            </p>
            <div className="icons">
              <p><a href="https://github.com/mahmoudellabban" target='_blank' rel='noreferrer'> <BsGithub /> </a></p>
              <p><a href="https://www.linkedin.com/in/mahmoud-ellabban/" target='_blank' rel='noreferrer'> <BsLinkedin /> </a></p>
              <p><a href="https://www.facebook.com/mahmoud.ellabban.7" target='_blank' rel='noreferrer'> <BsFacebook /> </a></p>
              <p><a href="https://www.instagram.com/mahmoud.ellabban.74/" target='_blank' rel='noreferrer'> <BsInstagram /> </a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Header
import * as React from 'react';









import me from '../assets/me.png'
import siera from '../assets/siera.png'
import rylee from '../assets/rylee.jpg'
import sankritya from '../assets/sankritya.png'
import './HomePage.css'
const HomePage = () => {
  return (
    <div class="pageContent2">
      <div class="pageContent">
















        <h3> Cal Craft </h3>
        <div class="info"> 
          <p>Opt either to take a photo of the food you will eat, or select from our friendly menu, and we'll tell you how many units of fast-acting insulin to injest!</p>
        </div>
        <h2> Our team </h2>
        <div class="team">
          <div>
            <a href="https://www.linkedin.com/in/ryan-ni/" target="_blank" rel="noreferrer">
              <img src={me} alt="Ryan Ni"></img>
            </a>Ryan Ni
            <br>
            </br>
            ML • Backend • DB
          </div>
          <div>
            <a href="https://www.linkedin.com/in/sankritya-rai-002a40261/" target="_blank" rel="noreferrer">
              <img src={sankritya} alt="Sankritya Rai"></img>
            </a>
            Sankritya Rai
            <br></br>
            ML • Backend
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ryleebao/" target="_blank" rel="noreferrer">
              <img src={rylee} alt="Rylee Bao"></img>
            </a>
            Rylee Bao
            <br>
            </br>
            Frontend • Backend
          </div>
          <div>
            <a href="https://www.linkedin.com/in/sierra-j-06175b216/" target="_blank" rel="noreferrer">
              <img src={siera} alt="Sierra Janson"></img>
            </a>
            Sierra Janson
            <br>
            </br>
            Frontend
          </div>
          
        
        </div>
      </div>
    </div>
  );
};






































export default HomePage;
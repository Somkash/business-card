import logo from './logo.svg';
import './App.css';
import dp from "./working-woman.jpg"
function App() {
  return (
    <div className="App">
      <div className = "business-card">
        <section className = "sec-info">
          <div className = "image">
            <img src={dp} className="dp"></img>
          </div>
          <h2>Somia Kashif</h2>
          <h4>Frontend Developer</h4>
          <h5><a className = "website" href="https://github.com/Somkash">github.com/Somkash</a></h5>
          <div className="buttons">
            <div>
              <a href="emailto:som.kashif@gmail.com">
                <i class="fas fa-envelope ico"></i>
                <button className="email-btn btn">Email</button>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/somia-kashif-057985230/">
                <i class="fab fa-linkedin-in ico"></i>
                <button  className = "Linkedin-btn btn">Linkedin</button>
              </a>
            </div>
          </div>
        
        
        </section>
        <section className = "sec-about">
          <h3>About</h3>
          <p>I am a frontend Developer with a prarticular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn</p>
        </section>

        <section className = "sec-interests">
          <h3>Interests</h3>
          <p>Food and Nutrition Expert. Reader. Internet fanatic. Behavioural Expert. Good Listener</p>
        </section>

        <section className = "sec-social">
        <a href="https://twitter.com/som_codes">
          <i class="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/som.codes/">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/som.codes/">
          <i class="fab fa-instagram-square  fa-2x"></i>
        </a>
        <a href = "https://github.com/Somkash">
          <i class="fab fa-github-square  fa-2x"></i>
        </a>
        </section>
      </div>
    </div>
  );
}

export default App;

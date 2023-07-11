import profilePicture from './assets/Gina-avatar.jpeg'
import './App.css'

function App() {
  
    return (
        <>
        <div className="wrapper">
            <div className="container">
                <img src={profilePicture} alt="picture of Gina's Scrimba avatar" />
                <h1>Gina Russo</h1>
                <h2>Full Stack Web Developer</h2>
                <div className="info">
                    <h3>About me</h3>
                    <hr />
                    <p>With 5 years experience as a web developer for Long Island University and an additional 5 years as a certified New York State School Library Media and Educational Technology Specialist, I’m an experienced Frontend Web Developer with a passion for creating visually appealing and user-friendly websites. With a solid understanding of modern web development principles and best practices, I specialize in crafting dynamic and responsive user interfaces.</p>
                </div>
                <div className="info">
                    <h3>Contact me</h3>
                    <hr />
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/gina-p-russo/" target="_blank">https://www.linkedin.com/in/gina-p-russo/</a></p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default App;

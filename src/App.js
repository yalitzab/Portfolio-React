import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import projects from './db/projects.json';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {

  const [cards, setCards] = useState(projects);
  const [categories] = useState([
    { name: 'about', description: 'About Me', component: <About/>},
    { name: 'contact', description: 'contact me', component: <ContactForm/>},
    { name: 'portfolio', description: 'Projects I have worked on', component: <Portfolio cards={cards} />},
    {
      name: "resume", description: 'Download my resume', component: <Resume/>
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        categories={categories}
      ></Nav>
      <main>
          <>
            {currentCategory.component}
          </>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;

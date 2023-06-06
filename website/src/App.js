import Assignment from './components/Assignment.js'
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Board Game Buddy";
  })
  return (
    <div className="App">
      <div className="project">
        <div className='intro-image'></div>
        <div className='intro-text'>
          <h1>Board Game Buddy: Making a One-Stop Shop for Mobile Board Gaming</h1>
          <h2>A user interface/user experience project by <a href='https://github.com/SNTPG'>Satsuki Liu</a>!</h2>
        </div>
      </div>
      <div className='introduction'>
        <h3>Introduction</h3>
        <p>This project was the quarter-long endeavor for Digital Humanities 110 @ UCLA, Spring '23. Throughout the academic term, we employed various UI and UX methods to investigate and design an application to address a specific user market for "family connection." My project focused on board games as a medium for family connection, and ultimately sought to design a high-fidelity prototype of an Android app that would aid families in learning and playing board games, either in-person or remotely.</p>
        <h3>Design Statement</h3>
        <p>For this project, I sought to build an interface for a mobile application dedicated to both teaching and playing board games, specifically for families. Many existing solutions provide one or the other, but are plagued by various issues, i.e. they're desktop only, they're paywalled, etc. My goal was to create a unified experience for users of all ages to both learn and play board games, such that a younger family member would have no issue teaching their elderly family members new rulesets without too much hassle, then jump right into playing with the games built into this application.</p>
      </div>
      <div className="timeline-box">
        <Assignment
          number="1"
          title="1. Competitor Analysis"
          image="https://cdn.discordapp.com/attachments/528751706973143043/1115493682183946401/a1.png"
          link="https://github.com/SNTPG/DH110/blob/main/Assignment%2002/README.md"
          description="Early on into the project, I conducted a heuristics evaluation of two popular chess applications available on the Play Store as a general investigation into the existing solutions for potential digital board gamers. Through both this analysis and usability testing with my roommate, I was able to identify a few deficiencies in both of them, namely navigational in nature. Using this as a base, I sought to provide a more general, more accessible solution."
        />
        <Assignment
          number="2"
          title="2. User Research"
          image="https://cdn.discordapp.com/attachments/528751706973143043/1115507320064049232/a2.png"
          link="https://github.com/SNTPG/DH110/blob/main/Assignment%2003/README.md"
          description="For user research, I employed participatory observation and interview to gain a greater understanding of the needs of users who would get use out of this application. Fortunately for me, one of my friends is a board game fanatic, so I had the privilege of conducting a very thorough interview regarding his hobbies, as well as watching him do a live demonstration of hosting board games over the Internet. The greatest takeaways I had from this were other existing solutions for teaching board games, as well as learning that the greatest frustration he had regarding this hobby was the difficulty in teaching new users."
        />
        <Assignment
          number="3"
          title="3. UX Storytelling"
          image="https://cdn.discordapp.com/attachments/528751706973143043/1115507997309939762/a3.png"
          link="https://github.com/SNTPG/DH110/blob/main/Assignment%2004/README.md"
          description="From the information I had gathered from user research, I devised two hypothetical UX personas to build tasks for: Albert Smith, a grandfather who was strategically sharp but technologically confused, and Molly Chang, a university-aged board game aficionado who was pressed for time to explain sets of rules to her aunts. Both of these personas served to outline latent desires and tasks potential users would want to accomplish using my application. From this stage, I was able to describe two task flows and specifically inform my prototypical design decisions."
        />
        <Assignment
          number="4"
          title="4. Low-fidelity Prototype"
          image="https://cdn.discordapp.com/attachments/528751706973143043/1115508790574456942/a4.png"
          link="https://github.com/SNTPG/DH110/blob/main/Assignment%2005/README.md"
          description="After the task flows were complete, the next step in the process was to design a low-fidelity prototype for the applications. This was created in an art program, paint.net, and contained wireflows for both tasks described in the personas from the previous step. Due to illness and other constraints, I was not able to conduct proper user testing during this step."
        />
        <Assignment
          number="5"
          title="5. Wireframe & Graphic Design"
          image="https://cdn.discordapp.com/attachments/528751706973143043/1115509385247076413/a5.png"
          link="https://github.com/SNTPG/DH110/blob/main/Assignment%2006/README.md"
          description="Using the diagrams I drew in the lo-fi prototype, I digitized a few screens to a more finalized version of the product. In this step, I experimented with a few visual variations, changing the typography, the shapes, and the colors to generate various samples. A five-second impression test was conducted to determine how to fine-tune the design to be most accessible and appealing."
        />
        <Assignment
          number="6"
          title="6. High-fidelity Prototype"
          image="https://cdn.discordapp.com/attachments/528751706973143043/1115509942082879518/a7.png"
          link="https://github.com/SNTPG/DH110/blob/main/Assignment%2007/README.md"
          description="The high-fidelity prototype is the final product for this project, and is the culmination of all of the previous steps. Using the low-fidelity prototype as a general framework, I converted the wireflows to a more presentable medium using Figma as my design tool. Taking in feedback from impression tests from the previous step and cognitive walkthrough data from this step, I was able to iteratively change the flow of my prototype and inform changes to my design, be they typographical or logical."
        />
      </div>
      <div className="hifi-container"> 
        <h1>High-fidelity Prototype</h1>
        <p>Ultimately, Board Game Buddy is designed with three main tasks in mind: learning how to use the app (for those who may be more technologically illiterate), learning how to play a board game (for those who want to teach others but aren't sure how to), and being able to play these games (for those who may not be able to play with their family in person).</p>
        <p>Below is an embed of my high-fidelity prototype. Please explore it as you see fit.</p>
        <iframe title="Hi" style={{border: "1px solid rgba(0, 0, 0, 0.1)", height: "80vh", width: "min(1200px, 75vw)"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMmlQK8HKhxU5z8IVgiOM92%2FSatsuki-Liu---Board-Game-Buddy%3Ftype%3Ddesign%26node-id%3D39-32%26scaling%3Dscale-down%26page-id%3D2%253A10%26starting-point-node-id%3D39%253A32" allowfullscreen></iframe>
        <h1>Pitch Video</h1>
        <iframe style={{width: "min(1200px, 75vw)", height: "min(675px, 42vw)"}} src="https://www.youtube.com/embed/RI_yxGDBDwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1>Conclusion</h1>
        <p>This entire process has been invaluable and incredibly informative throughout the entire quarter. As an aspiring front-end developer, my previous projects are often generated from scratch with consultation with graphic designers, so the world of UX has always been a bit of a black box to me. Thus, through the ten weeks of this course, the process has been demystified for me and I believe I will be able to be both a better humanist and a better programmer because of it.</p>
        <p>Throughout this quarter, I was beset on multiple fronts by illness and family issues, so it was not without its challenges. I have learned that the social aspects of UX can be rather difficult and awkward without proper preparation, as a lot of my testing and feedback sessions were conducted ad hoc because of my limited availability and lack of mental wherewithal, but I was able to still get necessary feedback throughout the process. Even if I did not have these setbacks, however, this was the most difficult portion of the process by far, as fielding volunteers for this was much more difficult than I had anticipated. It's definitely food for thought for future endeavors.</p>
        <p>All in all, I am proud of what I have created and believe that I have done an adequate job through this project. In the future, I would obviously want to dedicate more time and effort to this project, hopefully during a period of my life when I did not fall sick twice during one quarter, but c'est la vie. Future changes I would make to this design would include more features regarding social networking and friends lists so that users would not be forced to share a URL with each other every time they wanted to play a game, as well as adding a lists feature to save favorite games instead of having to search up the game every time.</p>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

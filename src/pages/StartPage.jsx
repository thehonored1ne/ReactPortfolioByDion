// src/pages/StartPage.jsx
import LetterGlitch from '../components/LetterGlitch';

const About = () => {
  return (
        <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        />
  );
};

export default About;
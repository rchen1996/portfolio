import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <section>
        <h1>
          Hi, I'm <strong>Rebecca Chen</strong>
        </h1>
        <p>Full-stack Developer</p>
      </section>

      <section>
        <h2>My Skills</h2>
        <div>{/* include skills/tech stack here */}</div>
        <Link to='/about'>Learn More About Me</Link>
      </section>

      <section>
        <h2>My Work</h2>
      </section>

      <section>
        <h2>My Contact Information</h2>
      </section>
    </div>
  );
}

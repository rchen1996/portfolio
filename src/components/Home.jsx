import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <section>
        <h1>
          Hi, I am <strong>Rebecca Chen</strong>
        </h1>
        <p>Full-stack Developer</p>
      </section>

      <section>
        <h2>My Skills</h2>
        <div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
        <Link>Learn More</Link>
      </section>
    </div>
  );
}

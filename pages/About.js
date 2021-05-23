import Link from "next/link";


const About = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <Link href='/'>
        <a>Acessar página home</a>
      </Link>
    </div>
  );
}

export default About;
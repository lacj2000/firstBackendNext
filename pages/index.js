import Link from 'next/link';

const Home = () => {
  cosole.log('nothing')
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>
        <a>Acessar página sobre</a>
      </Link>
    </div>
  );
}

export default Home;
import styles from '../styles/Home.module.css'
import IconDisplay from '../components/IconDisplay';

const Home = () => {
  return (
    <div className={styles.container}>

      <h2 className="font-sm text-sm">Front End
        <span className='font-md text-md'> <br />
          Software Developer
        </span>
      </h2>

      <p className={`${styles.intro} font-sm`}>
        I am a self taught programmer always looking to add new tools to my skillset.
      </p>

      <IconDisplay />

    </div>
  );
}

export default Home;

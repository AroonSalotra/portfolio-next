import styles from '../styles/Home.module.css'
import IconDisplay from '../components/IconDisplay';
import Button from '../components/Button';

const Home = () => {
  return (
    <section className={`${styles.container} fade-up`}>

      <h2 className="font-sm text-sm">
        Front End
        <span className='font-md text-md'>
          <br />
          Software Developer
        </span>
      </h2>

      <p className={`${styles.intro} font-sm`}>
        Self-taught UK based developer -
        I build applications focusing on responsiveness & functionality.
      </p>

      <div className={styles.skills}>
        <h2 className='font-sm' >My Skillset</h2>
        <IconDisplay />
      </div>

      <Button />

    </section>
  );
}

export default Home;

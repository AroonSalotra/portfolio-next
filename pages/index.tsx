import styles from '../styles/Home.module.css'
import IconDisplay from '../components/IconDisplay';
import Button from '../components/Button';

const Home = () => {
  return (
    <section className={`${styles.container} fade-up`}
      tabIndex={0}>

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



      <Button linkTo='/projects'
        body='My Projects'
        addClass="btn-project"
      />

      <div className={styles.skills}>
        <div className="break" />
        <h3 className='font-sm' >My Skillset</h3>
        <IconDisplay />
      </div>

      <div className="break" />

    </section>
  );
}

export default Home;

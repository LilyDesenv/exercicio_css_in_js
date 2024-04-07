// import styles from './Hero.module.css'
import { FormHero, ContainerHero, TitleHero } from './styles'

const Hero = () => (
  // <form className={styles.form}>
  //   <div className="container">
  //     <h2 className={styles.heroTitle}>
  //       As melhores vagas para tecnologia, design e artes visuais.
  //     </h2>
  //   </div>
  // </form>

  <FormHero>
    <ContainerHero>
      <TitleHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TitleHero>
    </ContainerHero>
  </FormHero>
)

export default Hero

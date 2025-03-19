import styles from './Hero.module.css'
import { Container } from '../../styles'

const Hero = () => (
  <form className={styles.form}>
    <Container>
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </Container>
  </form>
)

export default Hero

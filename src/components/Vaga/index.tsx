// import styles from './Vaga.module.css'
import { Vaga as VagaStyle, TitleVaga, LinkVaga } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  // <li className={styles.vaga}>
  //   <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
  //   <ul>
  //     <li>Localizacao: {props.localizacao}</li>
  //     <li>Senioridade: {props.nivel}</li>
  //     <li>Tipo de contratacao: {props.modalidade}</li>
  //     <li>
  //       Salário: {props.salarioMin} - {props.salarioMax}
  //     </li>
  //     <li>Requisitos: {props.requisitos.join(', ')}</li>
  //   </ul>
  //   <a className={styles.vagaLink} href="#">
  //     Ver detalhes e candidatar-se
  //   </a>
  // </li>

  <VagaStyle>
    <TitleVaga>{props.titulo}</TitleVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
  </VagaStyle>
)

export default Vaga

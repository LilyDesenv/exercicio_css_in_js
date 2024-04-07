import { FormEvent, useState } from 'react'
import { FormVagas as FormVagasStyle, BotaoVagas, CampoVagas } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagasStyle onSubmit={aoEnviarForm}>
      <CampoVagas
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoVagas type="submit">Pesquisar</BotaoVagas>
    </FormVagasStyle>
  )
}
export default FormVagas

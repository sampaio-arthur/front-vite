interface TituloProps {
  nome: string
  cor?: string
}

const Titulo = ({ nome, cor = 'black' }: TituloProps) => {
  return (
    <div>
      <h1 style={{ color: cor }}>Yo soy francisco virgulino {nome}</h1>
    </div>
  )
}

export default Titulo

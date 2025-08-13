interface ParagrafoProps {
  paragrafo: boolean
}

const Paragrafo = ({ paragrafo }: ParagrafoProps) => {
  const soma = 5 + 5

  return (
    <div>
      {paragrafo ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          doloribus quod ad odio! Suscipit eum quas eaque esse dolorem ad iste,
          laudantium fugiat, harum impedit voluptates nemo qui aperiam!
          {soma}
        </p>
      ) : (
        <p>Vazio</p>
      )}
    </div>
  )
}

export default Paragrafo
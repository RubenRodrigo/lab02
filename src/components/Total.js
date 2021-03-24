export const Total = ({parts}) => {
  // Usamos esta funcion para devolver el atributo exercises del objeto en la iteracion.
  const amount = (item) => {
    return item.exercises
  }

  // Usamos esta función para devolver los valores prev y next sumados
  const sum = (prev, next) => {
    return prev + next
  }

  const total = parts.map(amount).reduce(sum)
  return(
    <>
      <p>Number of exercises {total} </p>
    </>
  )
}


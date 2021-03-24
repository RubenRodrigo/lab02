export const Total = (props) => {
  const {part1, part2, part3} = props
  const total = part1.exercises + part2.exercises + part3.exercises
  return(
    <>
      <p>Number of exercises {total} </p>
    </>
  )
}


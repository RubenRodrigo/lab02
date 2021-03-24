import { Part } from "./Part"

export const Content = ({parts}) => {
  return(
    <>
    {parts.map((part) => {
      return(
        <Part
          part={part}
        />
      )
    })}
    </>
  )
}

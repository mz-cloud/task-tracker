import Name from './Name'

const Names = ({ names }) => {
  return (
    <>
      {names.map((name) => (
        <Name name={name} />,
        console.log(name)
      ))}
    </>
  )
}

export default Names

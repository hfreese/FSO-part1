const Header = (props) => {
  /* takes care of rendering the name of the course */
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  /* renders the name and number of exercises of one part */
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  /* renders the parts and their nubmer of exercises */
  return (
    <>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </>
  )
}

const Total = (props) => {
  /* renders the total number of exercises */
  let sum = 0
  props.course.parts.forEach(part => {sum += part.exercises})
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
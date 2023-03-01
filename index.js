import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a components'
  const exercises3 = 14

  return (
   <div>
    <h1> {course}</h1>
    <p>
      {part1} {exercises1}
    </p>
    <p>
      {part2} {exercises2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
    <p>Numer of exercises {exercises1 + exercises2 + exercises3}</p>
   </div>
  )
}
 const root = ReactDOM.render(<App />, document.getElementById('root'))
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
 );
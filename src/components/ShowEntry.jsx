import React from 'react'

const ShowEntry = ({entry}) => {
  
// use ternary conditional to display 404 message if entry is undefined
  return entry ? (
    <div className="container">
    <h3 className="is-size-4">{entry.content}</h3>
    <p className="is-size-7">posted in {entry.category.name}</p>
    </div>
    
  ) : (
    <h3 className="is-size-4">Entry not found!</h3>
  )

}

export default ShowEntry
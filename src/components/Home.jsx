// import React from 'react'

import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Home = ({entries, categories}) => {
  return (
    <div>
      <h3>Journal Entries</h3>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <Link to={`/entry/${index}`}>{entry.content}</Link>
          </li>
        ))}
      </ul>

      {/* {categories.map((cat, index) => (
          <div key={index}>
            <h1>{cat}</h1>
            <ul>
              {entries.map((entry, index) => (
                <>
                {categories[entry.category] === cat ? <li key={index}>{entry.content}</li> : null}
                </>
              ))}
            </ul> */}
            

          {/* </div>
          )
        )} */}
      

    </div>

  )
}

Home.propTypes = {
  entries: PropTypes.array,
  categories: PropTypes.array
}

export default Home
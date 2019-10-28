import React from 'react'

const Cannabislist = (props) => {
  return props.weed.map(strain => 
      
      <div>
        <p>{strain.name}</p>
      </div>

  )
}

export default Cannabislist;
import React, {useContext}from 'react'
import Item from './Item'

import Context from '../Context/context'

// ListPage.jsx - Add grid layout
function ListPage() {
  const{responseData}=useContext(Context)
  console.log(responseData)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {responseData.map((data)=><Item data={data}/>)}
        
      </div>
    )
  }
export default ListPage
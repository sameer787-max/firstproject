import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from './utils/Button'
import Table from './Table'
function Dashboard() {

const[search,setSearch]=useState("");


  
  return (
    <>
    <div className='bg-gray-100 shadow h-12 flex  justify-between items-center  text-black'> 
        <h2 className='font-bold ml-2'>cyberbells</h2>
        <Button btnName={"logout"}  color={"bg-blue-500"} hovercolor={"bg-blue-500"}></Button>
    
    </div>
  

<div className=' flex justify-center'>

    <Table ></Table>
</div>


    </>
  )
}

export default Dashboard
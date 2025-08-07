import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function product() {
    const { id } = useParams()
    const [data, setdata] = useState([]);
    const [product, setproduct] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then((res) => res.json())
            .then((json) => {
                setdata(json)
            })

    }, [])


    useEffect(() => {
        const filterproduct = data.find((iteam) => iteam.id == id)
        setproduct(filterproduct)
        console.log(data)

    }, [data])
    useEffect(() => {
        console.log(product)
    },)




    return (
        <div className=' flex justify-center h-[100vh]'>
            {product ? (<div className='flex mt-10 gap-10' >
                
                { product?.image?.medium ?  (<img  className="h-[70vh] w-[25vw]" src={product?.image?.medium} alt= "productimg" />):(<div className='h-[70vh] bg-gray-400 w-[25vw]'>

                </div>)
                }
                <div className='flex flex-col'>
                <h1 className='text-2xl'>{product.name}</h1>
                 <p>{`Type: ${product.type}`}</p>
                </div>
            </div>) : (<div>
                Loading....
            </div>)}
        </div>
    )
}

export default product
import React, { Fragment, useEffect, useState } from 'react'
import { use } from 'react';
import { Link } from 'react-router-dom';


function Table() {

    const [modal, setModal] = useState(false);
    let statingindex
    let endindex
    const [showdetail, setShowdetail] = useState(false)
    const [data, setData] = useState([])
    const [newdata, setNewdata] = useState([])
    const [currentdata, setCurrentdata] = useState([])
    const [perpage, setPerpage] = useState(25)


    const [currentpage, setCurrentpage] = useState(1)

    let totalpage = Math.round(data.length / perpage)
    if (endindex + perpage > 240) {
        statingindex = 0
    } else {
        statingindex = ((currentpage - 1) * perpage)
    }

    endindex = statingindex + perpage
    let currentindex = endindex - statingindex

    const [search, setSearch] = useState("");
    const [form, setForm] = useState('')
    const [date, setDate] = useState(new Date())
    const [column, setColumn] = useState(["id", "name", "type", "language", "premiered"]);


    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then(response => response.json())
            .then(json => {
                setData(json);
                setNewdata(currentdata)

                console.log("Fetched data:", json);

            })
            .catch((error) => {
                console.error("Fetch error:", error);
                alert("Error fetching data");
            });
    }, []);


    useEffect(() => {
        if (statingindex > data.length) {
            setCurrentpage(1)
        }
    }, [perpage])


    useEffect(() => {

        totalpage = Math.round(data.length / perpage)

        statingindex = ((currentpage - 1) * perpage)
        endindex = (statingindex + perpage)
        currentindex = endindex - statingindex

        setCurrentdata(data.slice(statingindex, endindex))
        setNewdata(data.slice(statingindex, endindex))


        console.log(`total page:${totalpage} startindex:${statingindex} endingindex:${endindex} currentindex:${currentindex}`)
        console.log(totalpage)
    }, [currentpage, data, perpage])






    const handlesubmit = (e) => {
        e.preventDefault()
        setForm(search)
        setSearch("")

    }

    const togglecol = (col) => {
        if (col == "all") {
            setColumn(["id", "name", "type", "language", "premiered"])
        }
        setColumn((prev) =>
            prev.includes(col) ? prev.filter((item) => item !== col) : [...prev, col]
        );
    }

    const filterdate = () => {
        const datafiltered = newdata.filter(item =>
            item.premiered.slice(0, 10) === date)
        setNewdata(datafiltered)
    }
    useEffect(() => {
        if (search == "") {

            const datafiltered = data.slice(0, perpage)
            setNewdata(datafiltered)
        }
    }, [search])



    return (<>
        <div className='flex justify-center   items-center flex-col'>

            <div className=' bg-[#193c62] w-full px-4 flex justify-between items-center mt-3 h-12 shadow-md rounded'>

                <div className='flex items-center gap-2'>

                </div>


                <div>
                    <button
                        onClick={() => setModal(true)}
                        className='bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-1 rounded text-white font-medium shadow'
                    >
                        Add
                    </button>
                </div>


                <form
                    onSubmit={handlesubmit}
                    className='flex items-center gap-2'
                >
                    <input
                        type="text"
                        id='search'
                        value={search}
                        onInput={(e) => {
                            setSearch(e.target.value);
                            setForm(e.target.value);
                            const filter = data.filter((item) =>
                                item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                item.type.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                item.premiered.toLowerCase().includes(e.target.value.toLowerCase())
                            );
                            if (filter.length === 0) {
                                setNewdata(data);
                            } else {
                                setNewdata(filter);
                            }
                        }}
                        className='bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        placeholder='Search...'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-1 rounded text-white font-medium shadow'
                    >
                        Search
                    </button>
                </form>
            </div>




            <div className={`h-[70vh] w-[70vw] rounded-xl shadow-2xl mt-3 z-30 transition-all duration-300 ease-out absolute ${modal ? "flex" : "hidden"} flex-col bg-gray-100`}>

                
                <div className='flex items-center justify-between px-4 h-12 bg-[#193c62] text-white rounded-t-xl'>
                    <p className='text-xl font-semibold'>Modal</p>
                    <button
                        className='hover:bg-gray-300 text-white bg-[#193c62] rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200'
                        onClick={() => setModal(false)}
                    >
                        ✕
                    </button>
                </div>


                <div className='flex-1 p-6 overflow-auto'>

                    <p className='text-gray-700'>Modal body goes here...</p>
                </div>

                <div className='flex justify-end items-center px-4 h-14 bg-[#193c62] text-white rounded-b-xl gap-4'>
                    <button className='bg-[#DC3545] hover:bg-red-600 px-4 py-1 rounded text-white font-medium transition'>
                        Discard
                    </button>
                    <button className='bg-[#4CAF50] hover:bg-green-600 px-4 py-1 rounded text-white font-medium transition'>
                        Save
                    </button>
                </div>
            </div>




            <div className='bg-gray-300 w-[85vw]  h-[80vh] p-4 pb-2 pl-0 items-center pr-0 mb-1 mt-5 shadow-2xl flex flex-col '>

                <div className='flex overflow-auto' >
                    <table className='min-w-[80vw] relative border-gray-300'>
                        { }
                        <thead className=' text-white   '>
                            <tr className='bg-gray-100 text-left text-black '>
                                <th className=' p-1 rounded-tl' >
                                    <label htmlFor="column">COLUMN</label>
                                    <select id="column" onChange={(e) => { togglecol(e.target.value) }} className='w-5'>
                                        <option value="all">unhide all col</option>
                                        <option value="id">Id</option>
                                        <option value="name">Name</option>
                                        <option value="type">Type</option>
                                        <option value="language">Language</option>
                                        <option value="premiered">Premiered</option>


                                    </select></th>


                                <th className='p-1'>
                                    <label htmlFor="date">DATE</label>
                                    <input id='date' onChange={(e) => setDate(e.target.value)} type="date" />
                                    <button onClick={filterdate}>sortby date</button>
                                </th>
                                <th>

                                </th>


                                <th className='p-1'></th>
                                <th className='rounded-tr p-1'></th>
                            </tr>
                            <tr className='bg-blue-400'>
                                {column.includes("id") && (<th className='text-left cursor-pointer p-2 '>Id</th>)}
                                {column.includes("name") && <th className='text-left p-2'>Name</th>}
                                {column.includes("type") && <th className='text-left p-2'>Type</th>}
                                {column.includes("language") && <th className='text-left p-2'>language</th>}
                                {column.includes("premiered") && <th className='text-left p-2 '>Premiered</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(newdata) && newdata.length > 0 ? (
                                newdata.map((item, index) => (
                                    <Fragment key={item.id}>
                                        <tr className={`  ${item.id / 2 == 0 ? "bg-gray-50" : "bg-gray-200 border-b"}`} >
                                            <div className='flex'>
                                                {column.includes("id") &&
                                                    <Link to={`/productpage/${item.id}`}><td className=' flex p-2'>
                                                        {`${item.id}  `}</td></Link>}
                                                <div className='flex justify-center items-center'>{showdetail == item.id ? (<img className='pl-2 cursor-pointer' onClick={() => { setShowdetail(false) }} src='/src/assets/up.svg'></img>) : (<img className='pl-2 cursor-pointer' onClick={() => { setShowdetail(item.id) }} src='/src/assets/down.svg'></img>)}</div></div>
                                            {column.includes("name") && <td className=' p-2'>{item.name}</td>}
                                            {column.includes("type") && <td className=' p-2'>{item.type || "-"}</td>}
                                            {column.includes("language") && <td className=' p-2'>{item.language || "-"}</td>}
                                            {column.includes("premiered") && <td className=' p-2'>{item.premiered || "-"}</td>}
                                        </tr>
                                        {showdetail == item.id && (<><div className=' pt-1 pl-1 absolute flex flex-col h-42 w-45 bg-gray-100 rounded-sm ml-3 shadow-2xl  border-gray-500  z-10'>
                                            <td>
                                            <div className='flex h-12 border-gray-300 border-b gap-2'>
                                                <img className='h-10 mt-1 mr-1 rounded-full w-10 ' src={item.image.medium} alt="img" />
                                                <div className='flex items-center h-10'>{item.name}</div>
                                            </div>

                                            <div className='flex h-10 border-gray-300 border-b gap-2'>
                                                <div className='flex items-center h-10'>{`published : ${item.ended}`}</div>
                                            </div>

                                            <div className='flex h-10 border-gray-300 border-b gap-2'>
                                                <div className='flex items-center h-10'>{`status : ${item.status}`}</div>
                                            </div>

                                            <div className='flex h-10 border-gray-300 border-b gap-2'>
                                                <div className='flex items-center h-10'>{`rating : ${item.rating.average}`}</div>
                                            </div>
</td>

                                        </div>

                                        </>)}
                                    </Fragment>

                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className='border p-4 text-center'>No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>



                <div className='flex w-[100%] mt-2 justify-between items-center pl-4 pr-4'>
                    <div>
                        showing {statingindex + 1} to {endindex}
                    </div>
                    <div className='flex gap-2'>


                        <button className='hover:bg-gray-400 p-1 text-white rounded-full' onClick={() => setCurrentpage(1)}>
                            <img src='/src/assets/left.svg'></img>
                        </button>




                        <button className='hover:bg-gray-400 p-1 text-white rounded-full' onClick={() => setCurrentpage((prev) => {
                            if (prev == 1) {
                                return (totalpage)
                            }
                            else {
                                return (prev - 1)
                            }
                        })}>
                            <img src='/src/assets/prev.svg'></img>
                        </button>

                        <button className='hover:bg-gray-400 p-1 text-white rounded-full' onClick={() => setCurrentpage((prev) => {
                            if (prev == totalpage) {
                                return (1)
                            }
                            else {
                                return (prev + 1)
                            }
                        })}> <img src='/src/assets/next.svg'></img></button>

                        <button className='hover:bg-gray-400 p-1 text-white rounded-full' onClick={() => setCurrentpage(totalpage)}>
                            <img src='/src/assets/right.svg'></img>
                        </button>





                        <select onChange={(e) => {

                            console.log(statingindex)
                            setPerpage(Number(e.target.value))

                        }
                        } name="" id="pagecount">
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>

                </div>

            </div>



        </div>


    </>
    )
}

export default Table
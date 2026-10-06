import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
    const [userData, setUserData] = useState([])
    const [num, setNum] = useState(1)
    const getImg = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=24`)

        setUserData(response.data)

        console.log(num)


    }
    useEffect(() => {
        getImg()
    }, [num])

    return (
        <div className='bg-black min-h-screen  text-white p-5' >
            <div className='flex flex-wrap m-5 gap-5' >
                {userData.map(function (elem, idx) {
                    return (<div key={elem.id} >
                        <a href={elem.url} target='_blank' rel="norereferrer">
                            <img className='w-60 h-60 object-cover rounded-xl overflow-hidden' src={elem.download_url} />
                        </a>
                

                        <h1 className='text-semibold text-gray-300' >{elem.author}</h1>
                    </div>
                    )

                })}

            </div>
            <div className='flex justify-center items-center'>

                <button 
                style={{opacity: num ===1 ? 0.5 :1, cursor:num ===1 ? 'not-allowed': 'pointer' }} 
                className='bg-amber-500 rounded-xl px-5 py-3 m-5 active:scale-95  text-center font-semibold ' 
                onClick={() => {
                    if (num > 1) {
                        setNum(num - 1)
                    }
                }} 
                >Prev
                </button>

                <button
                 className='bg-amber-500 rounded-xl px-5 py-3 m-5  active:scale-95 text-center font-semibold' 
                  onClick={() => {
                    if (num > 0) {
                        setNum(num + 1)
                    }
                }}
                >Next
                </button>
            </div>

        </div>
    )
}

export default App

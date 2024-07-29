import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

function Home() {
    
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://finalspaceapi.com/api/v0/character`)
        .then(function(res){
            setData(res.data)            
        })
        .catch(function(error){
            console.log(error)
        })
        .finally(function () {});
        
    }, [])
    
    const deleteItem = (id) => {
        // const newData = data.filter(item => { item.id!==id })
        setData(data.filter(item => {return item.id!==id }))
        // console.log(newData);
    }
        
    
    


  return (
    <div className='grid grid-cols-3 max-sm:grid-cols-1 bg-zinc-50'>
        <Nav/>
        <p className='font-bold text-emerald-800 text-3xl col-span-3 text-center py-2'>Sweet Characters</p>
        <p className='font-bold text-emerald-800 text-xl col-span-3 text-center py-2'>View your favorate Characters & Delete the unliked ones</p>

        {
            data.map((item)=>{
                return(
                    <div key={item.id} className='flex flex-col gap-4 items-center mx-auto px-8 py-4 rounded-lg shadow-lg w-fit bg-white m-4 max-sm:col-span-3'>

                        <img className='rounded-md' src={item.img_url} alt={item.name}/>
                        <p className='font-bold text-emerald-800 text-lg'>{item.name}</p>

                        <div className='flex flex-row gap-4 text-white font-bold'>

                            <button className='bg-emerald-700 hover:bg-emerald-800 px-2 py-1 rounded-lg shadow-sm shadow-emerald-900'
                            onClick={()=>{navigate(`/Info/${item.id}`)}}>view detailes</button>
                            
                            <button className='bg-rose-700 hover:bg-rose-800 px-2 py-1 rounded-lg shadow-sm shadow-rose-900 bg-'
                            onClick={()=>{deleteItem(item.id)}}>Delete</button>

                        </div>

                    </div>
            )
            })
        }
        <Footer/>
    </div>
  )
}

export default Home
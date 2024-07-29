import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Nav from '../component/Nav'
import Footer from '../component/Footer'


function Info() {
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [bool, setBool] = useState([])
    const [abilities, setAbilities] = useState('')
    const id = params.id

    useEffect(() => {
      axios.get(`https://finalspaceapi.com/api/v0/character/${id}`)
      .then(function(res){
        setData(res.data)
        function checkAbilities(){
            if(data.abilities.length==0){
                setBool([])
                setAbilities('Abilities: none')
            } else if(data.abilities.length==1){
                setBool([data.abilities[0]])
                setAbilities('Abilities: ')
            } else {
                setBool([data.abilities[0],data.abilities[1]])
                setAbilities('Abilities: ')
            }
        }checkAbilities()
      })
      .catch(function(err){
        console.log(err);
      })
    
    }, [data,bool])

  return (
    <div className='flex flex-col bg-zinc-50  min-h-screen'>
    <Nav/>
    <div className="hero m-auto">
    <div className="hero-content gap-8 flex-col lg:flex-row text-emerald-800 px-8">
        <img src={data.img_url} className="max-w-sm max-sm:w-1/2 rounded-lg shadow-2xl" />
        <div className='flex flex-col gap-2'>
        <h1 className="text-5xl font-bold max-sm:text-2xl">{data.name}</h1>
        <p className='text-l text-emerald-800'><span className='font-bold'>Status: </span>{data.status}</p>
         <p className='text-l text-emerald-800'><span className='font-bold'>Species: </span>{data.species}</p>
        <p className='text-l text-emerald-800'><span className='font-bold'>Gender: </span>{data.gender}</p>
        <p className='text-l text-emerald-800'><span className='font-bold'>Origin Planet: </span>{data.origin}</p>
        <div className='flex flex-row gap-8 items-center pb-2'>
        <span className='font-bold text-l text-emerald-800'>{abilities} </span>
        <ul className='list-none inline'>
            {
                bool.map((item) => {
                    return(
                        <li className='px-2 py-1 bg-emerald-50 shadow-sm shadow-emerald-800 hover:bg-zinc-100 rounded-md w-fit m-1 inline'>{item}</li>
                    )
                })
            }
            </ul>
            
            </div> 

        <button onClick={()=>{navigate('/')}} className='bg-emerald-700 hover:bg-zinc-800 px-8 py-1 rounded-lg shadow-sm shadow-emerald-900 text-white font-bold'>Back</button>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Info
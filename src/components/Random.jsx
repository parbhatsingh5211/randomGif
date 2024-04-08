import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  // const [gif, setGif] =useState('') ;
  // const [loading, setLoading] = useState(false);
  
  // async function fetchData(){
  //   setLoading(true);
  //   try{
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const {data} = await axios.get(url)
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     // console.log(imageSource)
  //   }
  //   catch(e){
  //     console.error(e)
  //   }
  //   setLoading(false);
   
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);

  // function clickHandler(){
  //   fetchData();
  // }

  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

        {
          loading ? (<Spinner/>) : 
          ( <img src={gif} alt='gif' width={450} className='rounded-lg'/>)
        }
       
        <button onClick={() => fetchData()}
        className='w-10/12 bg-green-200 rounded-lg text-lg py-2 font-semibold mb-[12px]'>
          Generate
        </button>
    </div>
  )
}

export default Random
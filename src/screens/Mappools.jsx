import { React, useState, useEffect } from 'react';
import transition from '../transition';
import PoolMap from '../components/PoolMap';
import LoadingScreen from './LoadingScreen';
import PoolCategory from '../components/PoolCategory';
import RegisterButton from '../components/RegisterButton';

const Mappools = (props) => {
  const [loading, setLoading] = useState(true);
  const [mappools, setMappools] = useState(null);
  const stage = props.stage === 0 ? "Qualifiers" : props.stage === 1 ? "Grand Finals" : "Testing";
  useEffect(() => {
    const fetchMappools = async (stage) => {
      const response = await fetch(`https://ocbs.rrex.cc/api/getMappools?stage=${stage}`);
      const data = await response.json();
      console.log('Response from server:', data);
      if (data.error) {
        console.log('Error:', data.error);
      } else {
        setMappools(data);
      }
      setLoading(false);
    }
    if(mappools === null){
      fetchMappools(props.stage);
    }
  })

  if(loading){
    return <LoadingScreen />;
  }
  
  return (
    <div className='h-full'>
      <div className='bg-logan-500 bg-register-bg bg-cover'>
        <div className="flex justify-between items-center pt-24 mx-32 space-x-8 font-head text-4xl text-logan-700">
          <div>{stage} Mappool</div>
          <button className='rounded-full bg-logan-600 hover:bg-logan-700 text-white-50 font-body font-extrabold text-xl mt-4 px-8 py-4 transition-colors duration-300'>ZIP</button>
        </div>
        <div className="flex-col justify-center items-center mx-32 my-4">
          <PoolCategory pick="NM" text="NO MOD" bgcolor="bg-logan-600" mappools={mappools.NM}/>
          <PoolCategory pick="HD" text="HIDDEN" bgcolor="bg-banana-mania-300" mappools={mappools.HD}/>
          <PoolCategory pick="HR" text="HARD ROCK" bgcolor="bg-carnation-pink-400" mappools={mappools.HR}/>
          <PoolCategory pick="DT" text="DOUBLE TIME" bgcolor="bg-lilac-800" mappools={mappools.DT}/>
          {stage === 2 && <PoolCategory pick="TB" text="TIEBREAKER" bgcolor="bg-white-300" mappools={mappools.TB}/>}
        </div>
      </div>
    </div>
  )
};

export default Mappools;

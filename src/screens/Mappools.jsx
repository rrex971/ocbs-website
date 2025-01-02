import { React, useState, useEffect } from 'react';
import transition from '../transition';
import PoolMap from '../components/PoolMap';
import LoadingScreen from './LoadingScreen';
import PoolCategory from '../components/PoolCategory';
import RegisterButton from '../components/RegisterButton';
import { NavLink } from 'react-router-dom';

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
    if (mappools === null) {
      fetchMappools(props.stage);
    }
  }, [props.stage, mappools]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-full">
      <div className="bg-logan-500 bg-register-bg bg-no-repeat bg-contain min-h-lvh">
        <div className="flex justify-center items-center space-x-4 font-head text-xl md:text-3xl text-white-50 pt-12 pb-12 2xl:pb-0">
          <NavLink
            to="/mappools/qualifiers"
            className={({ isActive }) => isActive ? "bg-carnation-pink-400 px-4 py-2 rounded-full" : "rounded-full px-4 py-2 transition-colors duration-300 bg-carnation-pink-300 hover:bg-white-50 hover:text-carnation-pink-400"}
          >
            Qualifiers
          </NavLink>
          <NavLink
            to="/mappools/grandfinals"
            className={({ isActive }) => isActive ? "bg-carnation-pink-400 px-4 py-2 rounded-full" : "rounded-full px-4 py-2 transition-colors duration-300 bg-carnation-pink-300 hover:bg-white-50 hover:text-carnation-pink-400"}
          >
            Grand Finals
          </NavLink>
        </div>
        <div className="flex flex-col 2xl:flex-row justify-between items-center pt-12 px-4 2xl:px-32 space-y-4 2xl:space-y-0 2xl:space-x-8 font-head text-4xl text-logan-700">
          <div className="2xl:mt-0 -mt-16 lg">{stage} Mappool</div>
          <a href= {`https://ocbs.rrex.cc/api/mappacks?stage=${props.stage}`} className="2xl:mt-0 mt-8 lg">
            <button className="rounded-full bg-logan-700 hover:bg-logan-500 text-white-50 font-body font-extrabold text-xl mt-auto sm:mt-0 px-8 py-4 transition-colors duration-300">
              ZIP
            </button>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center px-4 sm:px-16 my-4">
          <PoolCategory pick="NM" text="NO MOD" bgcolor="bg-logan-600" mappools={mappools.NM} />
          <PoolCategory pick="HD" text="HIDDEN" bgcolor="bg-banana-mania-300" mappools={mappools.HD} />
          <PoolCategory pick="HR" text="HARD ROCK" bgcolor="bg-carnation-pink-400" mappools={mappools.HR} />
          <PoolCategory pick="DT" text="DOUBLE TIME" bgcolor="bg-lilac-800" mappools={mappools.DT} />
          {mappools.TB[0] !== undefined && <PoolCategory pick="TB" text="TIEBREAKER" bgcolor="bg-white-700" mappools={mappools.TB} />}
        </div>

      </div>
    </div>
  );
};

export default Mappools;

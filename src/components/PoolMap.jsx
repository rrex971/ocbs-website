import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { FaClock, FaStar } from 'react-icons/fa';
import { PiClockBold, PiStarBold, PiMetronomeBold } from 'react-icons/pi';



const PoolMap = (props) => {
    const theme = resolveConfig(tailwindConfig).theme
    const data = props.data
    var bgcol;
    var twcol;
    switch(props.pick){
        case "NM":
            bgcol=theme.colors.logan[600];
            twcol='logan-600';
            break;
        case "HD":
            bgcol=theme.colors['banana-mania'][300];
            twcol='banana-mania-300';
            break;
        case "HR":
            bgcol=theme.colors['carnation-pink'][400];
            twcol='carnation-pink-400';
            break;
        case "DT":
            bgcol=theme.colors.lilac[800];
            twcol='lilac-800';
            break;
        case "TB":
            bgcol=theme.colors.white[300];
            twcol='white-300';
            break;
        default:
            bgcol=theme.colors.white[50];
            twcol='white-50';
            break;
    }

    return(
        <div className={`flex justify-between items-center w-full my-4 h-40 bg-white-50 rounded-xl`}>
                <div style={{backgroundImage: `linear-gradient(to right, ${bgcol}, transparent), url(${data.bg})`}} 
                className={`bg-cover bg-center w-1/3 rounded-xl my-4 font-body font-extrabold text-6xl text-left text-white-50 p-4 flex items-end h-full`}>
                        {data.pick}
                </div>
                <div className='content flex w-full justify-between items-center font-body font-bold text-logan-700'>
                    <div className='titleinfo flex-col px-4'>
                        <div className='font-extrabold text-white-900 text-4xl'>{data.title}</div>
                        <div style={{color: `${bgcol}`}} className={`text-2xl italic`}>{data.artist}</div>
                        <div className='text-white-900 mt-4'><span style={{color: `${bgcol}`}}>Mapper:</span> {data.creator}</div>
                        <div className='text-white-900'><span style={{color: `${bgcol}`}}>Difficulty:</span> {data.diff}</div>
                    </div>
                    <div className='flex text-2xl justify-between items-center align-middle w-1/3'>
                        <div className='mapinfo flex-col w-1/2 space-y-2 grow-0 px-4'>
                            <div className='flex items-center space-x-2'><PiClockBold style={{color: `${bgcol}`}}/><span className="font-normal text-white-900">{data.length}</span></div>
                            <div className='flex items-center space-x-2'><PiStarBold style={{color: `${bgcol}`}}/><span className="font-normal text-white-900">{data.sr}</span></div>
                            <div className='flex items-center space-x-2'><PiMetronomeBold style={{color: `${bgcol}`}}/><span className="font-normal text-white-900">{data.bpm}</span></div>
                        </div>
                        <div className='mapstats flex-col w-1/2 grow-0 px-4'> 
                            <div style={{color: `${bgcol}`}}>AR <span className="font-normal text-white-900">{data.ar}</span></div>
                            <div style={{color: `${bgcol}`}}>OD <span className="font-normal text-white-900">{data.od}</span></div>
                            <div style={{color: `${bgcol}`}}>CS <span className="font-normal text-white-900">{data.cs}</span></div>
                            <div style={{color: `${bgcol}`}}>HP <span className="font-normal text-white-900">{data.hp}</span></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PoolMap;
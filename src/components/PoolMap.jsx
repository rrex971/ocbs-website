import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import { PiClockBold, PiStarBold, PiMetronomeBold } from 'react-icons/pi';

const PoolMap = (props) => {
    const theme = resolveConfig(tailwindConfig).theme;
    const data = props.data;
    let bgcol;
    let twcol;

    switch (props.pick) {
        case "NM":
            bgcol = theme.colors.logan[600];
            twcol = 'logan-600';
            break;
        case "HD":
            bgcol = theme.colors['banana-mania'][300];
            twcol = 'banana-mania-300';
            break;
        case "HR":
            bgcol = theme.colors['carnation-pink'][400];
            twcol = 'carnation-pink-400';
            break;
        case "DT":
            bgcol = theme.colors.lilac[800];
            twcol = 'lilac-800';
            break;
        case "TB":
            bgcol = theme.colors.white[700];
            twcol = 'white-700';
            break;
        default:
            bgcol = theme.colors.white[50];
            twcol = 'white-50';
            break;
    }

    return (
        <a href={data.link} target='_blank'>
            <div className={`flex flex-col 2xl:flex-row hover:cursor-pointer justify-between items-center w-full my-4 transform 2xl:h-40 bg-white-50 rounded-xl`}>
                <div className="shrink-0 w-full 2xl:w-1/3 rounded-xl my-4 relative overflow-hidden h-48 2xl:h-full transform -translate-y-5 2xl:translate-y-0">
                    <img 
                        src={data.bg ? data.bg.replace('raw.jpg', 'cover.jpg') : ''}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        alt=""
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div 
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to right, ${bgcol}, transparent)` }}
                    />
                    <div className="relative z-10 p-4 flex items-end w-full h-full font-body font-extrabold text-4xl 2xl:text-6xl text-left text-white-50">
                        {data.pick}
                    </div>
                </div>


                <div className="content flex min-w-0 flex-col pb-4 2xl:pb-0 2xl:flex-row w-full justify-between items-start 2xl:items-center font-body font-bold text-logan-700">
                    <div className="titleinfo flex-col min-w-0 shrink px-4 mb-4 2xl:mb-0">
                        <div className="truncate font-extrabold grow-0 text-white-900 text-2xl 2xl:text-4xl pb-2 ">{data.title}</div>
                        <div style={{ color: `${bgcol}` }} className="text-xl 2xl:text-2xl italic">{data.artist}</div>
                        <div className="text-white-900 mt-4">
                            <span style={{ color: `${bgcol}` }}>Mapper:</span> {data.creator}
                        </div>
                        <div className="text-white-900">
                            <span style={{ color: `${bgcol}` }}>Difficulty:</span> {data.diff}
                        </div>
                    </div>
                    <div className="flex shrink-0 text-lg 2xl:text-2xl justify-between items-center align-middle w-full 2xl:w-1/3">
                        <div className="mapinfo flex-col w-1/2 space-y-2 px-4">
                            <div className="flex items-center space-x-2">
                                <PiClockBold style={{ color: `${bgcol}` }} />
                                <span className="font-normal text-white-900">{data.length}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <PiStarBold style={{ color: `${bgcol}` }} />
                                <span className="font-normal text-white-900">{data.sr}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <PiMetronomeBold style={{ color: `${bgcol}` }} />
                                <span className="font-normal text-white-900">{data.bpm}</span>
                            </div>
                        </div>

                        <div className="mapstats flex-col w-1/2 px-4">
                            <div style={{ color: `${bgcol}` }}>
                                AR <span className="font-normal text-white-900">{data.ar}</span>
                            </div>
                            <div style={{ color: `${bgcol}` }}>
                                OD <span className="font-normal text-white-900">{data.od}</span>
                            </div>
                            <div style={{ color: `${bgcol}` }}>
                                CS <span className="font-normal text-white-900">{data.cs}</span>
                            </div>
                            <div style={{ color: `${bgcol}` }}>
                                HP <span className="font-normal text-white-900">{data.hp}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default PoolMap;

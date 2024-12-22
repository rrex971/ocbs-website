import { React } from "react";

const Player = (props) => {
    
    return (
        <div className="bg-logan-600 hover:scale-105 ease-in-out transition-all duration-300 rounded-3xl mt-4">
            <a href={`https://osu.ppy.sh/users/${props.id}`} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center space-x-2 px-8 py-4">
                        <img src={"https://a.ppy.sh/" + props.id} className="rounded-full" alt="User Avatar" width={100} />
                        <div className="flex-col font-body text-logan-700 text-2xl">
                            <div className="flex items-center">
                                <p className="font-bold ml-6 font-head text-banana-mania-100">{props.username}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold ml-6 font-body text-banana-mania-200">#{props.rank}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-bold ml-6 font-body text-logan-900">
                                    <div className="flex space-x-2 relative">
                                        <img src='./discord.svg' alt='Discord' className='max-w-8 absolute top-1'></img>
                                        <label className="inline pl-8">{props.discord}</label>
                                    </div>
                                </p>
                            </div>
                        </div>
                </div>
            </a>
        </div>
    );
};

export default Player;
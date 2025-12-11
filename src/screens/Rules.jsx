import React from "react";
import transition from "../transition";
const Rules = () => {
    return (
        <div className="bg-logan-500 bg-gradient-to-b from-banana-mania-100 via-90% via-banana-mania-100 min-h-screen">
            <div className="flex justify-center items-center pt-12 sm:pt-16 pb-12 sm:pb-16 font-head text-2xl sm:text-3xl lg:text-4xl text-logan-700">
                Tournament Rules
            </div>    
            <div className="flex-col font-body mx-8 md:mx-32 pb-64 text-xl font-medium space-y-6">
                <p>
                    All players must join the discord for the duration of the tournament. If you are not in the discord server when registering, please join the server ASAP so you do not miss on anything important. All players are expected to treat staff and other participants with a high level of respect.
                </p>
                <p>
                    Any unsportsmanlike conduct (throwing matches, being disrespectful/toxic, being blatantly racist), in the match on the Discord server, or any other platforms WILL NOT be tolerated. Such behaviour will result in punishments including but not limited to disqualification from the tournament, ban or kick from the discord server, or a ban from participation in future iterations.
                </p>
                <p>
                    Mappoolers must not participate as players in this tournament. There are no restrictions for Streamers and Commentators with respect to participating in the tournament. Any modification of these rules will be announced.
                </p>
                <h2 className="text-3xl font-semibold">Match Guide:</h2>
                <p>
                    Each player will have two (2) lives, and the remaining 3 players from each lobby will advance to the Grand Finals. The lobby ends when there are 3 players left, regardless of lives remaining.
                </p>
                <p>
                    The remaining players will play in a Grand Finals Battle Royale lobby. Each player will have two (2) lives, and the match will continue until there are 2 players left. The match will continue until there is only 1 player left standing. In the case where there are 2 players left with 1 life, the Tiebreaker will be played.
                </p>
                <h2 className="text-3xl font-semibold">Additional Information:</h2>
                <p>
                    The mappool will be provided to players at the start of the week. There will be no bans allowed on any of the maps. All maps must be played till there is only one player left, per lobby. A referee will create a multiplayer room 15 minutes in advance. Players should join when invited.
                </p>
                <p>
                    Room settings are osu!, Head to Head., Win Condition: 'ScoreV2'. Room name must be "oCBS : (Lobby) vs (#LobbyNumber)”. The referee is supposed to begin the lobby by picking the first map in the map pool. (NM1) The lowest scoring player after each map will lose a life, but can keep playing till they lose their second life.
                </p>
                <p>
                    After the first map, beatmaps will be picked by RNG by either one of the hosts or a person chosen by the host in person. Once a map is picked, this is informed to the referee so they can select the corresponding map. Double picks are not allowed. This means that a certain mod section will not be played two consecutive times. For example, DT2 cannot be rolled immediately after DT1.
                </p>
                <p>
                    Disconnects or any other issue affecting gameplay within 30 seconds or 25% of the beatmap length (whichever happens first) after the beatmap begins can be aborted and restarted. This is up to the referee's discretion. Lag is not a valid reason to abort a map.
                </p>
                <h2 className="text-3xl font-semibold">Registration Perks:</h2>
                <ul className="list-disc list-inside">
                    <li>ID Card for players</li>
                    <li>Stickers</li>
                    <li>Keychain</li>
                </ul>
                <h2 className="text-3xl font-semibold">Prizes:</h2>
                <ul className="list-disc list-inside">
                    <li>First Place: ePLA trophy + custom keypad + profile banner</li>
                    <li>Second Place: ePLA medal + profile banner</li>
                    <li>Third Place: ePLA medal + profile banner</li>
                </ul>
                <p>
                    Depending on where you live, your prizes will either be dropped off at your house by one of the hosts, or couriered to you if you live outside Chennai.
                </p>
                <h2 className="text-3xl font-semibold">Post-Meetup:</h2>
                <p>
                    You can choose to stay for lunch and possibly a trip to the nearby Marina Beach. You can also leave right after o!CBS has concluded.
                </p>
                <p>
                    The tournament will be held on January 5th, 2025.
                </p>
            </div>
        </div>
    )
};

export default transition(Rules);
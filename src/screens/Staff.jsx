import React, { useEffect, useState, useMemo } from 'react';
import transition from '../transition';
import LoadingScreen from './LoadingScreen';

const StaffCard = ({ member }) => {
  const avatarSrc = member.avatar || (member.userId ? `https://a.ppy.sh/${member.userId}` : 'https://a.ppy.sh/0');
  const profileLink = member.userId ? `https://osu.ppy.sh/u/${member.userId}` : undefined;
  return (
    <a
      href={profileLink}
      target={profileLink ? '_blank' : undefined}
      rel={profileLink ? 'noopener noreferrer' : undefined}
      className="w-full max-w-[420px] min-w-[260px] md:w-auto md:max-w-[160px] md:min-w-[160px] rounded-2xl overflow-hidden shadow-sm hover:scale-105 ease-in-out transition-all duration-200 bg-logan-600 mt-3 block mx-auto"
    >
      <div className="flex flex-row md:flex-col w-full h-full bg-logan-600">
        <div className="w-24 h-24 md:h-auto md:w-full md:aspect-square rounded-2xl md:rounded-2xl overflow-hidden shrink-0">
          <img src={avatarSrc} className="w-full h-full object-cover" alt="User Avatar" />
        </div>
        <div className="flex-1 md:flex-none bg-logan-600 px-4 py-3 md:px-3 md:py-3 text-left md:text-center flex flex-col justify-center gap-2">
          <p className="font-head text-banana-mania-100 text-lg md:text-xl leading-tight truncate">{member.username || 'Unknown'}</p>
          <div className="font-body text-logan-800 text-xs md:text-sm truncate max-w-full flex items-center md:justify-center gap-2">
            <img src="/discord.svg" alt="Discord" className="w-4 h-4" />
            <span className="truncate">{member.discordUsername || 'N/A'}</span>
          </div>
          {member.lookupFailed && (
            <p className="text-xs text-white-50/70">Profile lookup failed</p>
          )}
        </div>
      </div>
    </a>
  );
};

const Staff = () => {
  const [staffData, setStaffData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch('https://ocbs.rrex.cc/api/staff', {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to load staff');
        }

        const data = await response.json();
        setStaffData(data);
      } catch (err) {
        console.error('Error fetching staff:', err);
        setError('Unable to load staff right now. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const staffSections = useMemo(() => {
    if (!staffData) return [];
    return Object.entries(staffData)
      .map(([category, members]) => ({ category, members: Array.isArray(members) ? members : [] }))
      .filter(({ members }) => members.length > 0);
  }, [staffData]);

  const hostSection = useMemo(() => {
    if (!staffData || !staffData.Hosts || !Array.isArray(staffData.Hosts)) return null;
    const hosts = staffData.Hosts.filter(Boolean);
    return hosts.length ? hosts : null;
  }, [staffData]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="bg-logan-500 min-h-lvh px-4 sm:px-6 lg:px-12 py-12"
      style={{
        backgroundImage: "linear-gradient(180deg, #f99cbd 0%, rgba(249,156,189,0) 55%)",
      }}
    >
      <div className="flex justify-center items-center pt-4 sm:pt-6 font-head text-2xl sm:text-3xl text-logan-700 text-center">
        Staff
      </div>

      {error && (
        <div className="mt-6 text-center text-white-50 font-body">{error}</div>
      )}

      {staffSections.length === 0 && !error && (
        <div className="mt-8 text-center text-white-50 font-body">No staff data available.</div>
      )}

      {hostSection && (
        <div className="max-w-7xl mx-auto w-full mt-8 flex flex-col items-center">
          <div className="flex justify-center items-center font-head text-xl sm:text-2xl text-banana-mania-100 mb-2 sm:mb-3 text-center truncate px-4">
            Hosts
          </div>
          <div className="mt-2 sm:mt-3 overflow-y-visible h-fit flex flex-col md:flex-row flex-wrap justify-center items-start gap-x-2 sm:gap-x-2.5 gap-y-2 sm:gap-y-2.5 w-full md:w-fit mx-auto">
            {hostSection.map((member, idx) => (
              <StaffCard key={`Hosts-${member.userId || idx}`} member={member} />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full flex flex-wrap justify-center items-start gap-6 sm:gap-x-48 px-2 sm:px-0">
        {staffSections
          .filter(({ category }) => category !== 'Hosts')
          .map(({ category, members }) => (
            <div key={category} className="mt-4 sm:mt-6 w-full md:w-fit">
              <div className="flex justify-center items-center font-head text-xl sm:text-2xl text-banana-mania-100 mb-2 sm:mb-3 text-center truncate px-4">
                {category}
              </div>
              <div className="mt-2 sm:mt-3 overflow-y-visible h-fit flex flex-col md:flex-row justify-center items-start gap-x-2 sm:gap-x-2.5 gap-y-2 sm:gap-y-2.5 w-full md:w-fit mx-auto">
                {members.map((member, idx) => (
                  <StaffCard key={`${category}-${member.userId || idx}`} member={member} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default transition(Staff);

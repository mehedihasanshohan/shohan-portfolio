// import { div } from 'motion/react-client';
// import React from 'react';
// import GitHubCalendar from 'react-github-calendar';

// export default function GitHubStats() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12 flex flex-col md:flex-row gap-10 justify-center items-center">
//     <div className="p-8 shadow-md border border-cyan-300 rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
//       <h2 className="text-xl font-semibold mb-4 text-center underline">GitHub Insights</h2>
//       <GitHubCalendar
//         username="mehedihasanshohan"
//         colorScheme="dark"
//         blockSize={15}
//         blockMargin={5}
//         fontSize={16}
//       />

//     <div className='flex mt-4'>
//     <img
//   src="https://github-readme-stats.vercel.app/api?username=mehedihasanshohan&show_icons=true&theme=github_dark"
//   alt="GitHub Stats"
// />
// <img
//   src="https://streak-stats.demolab.com?user=mehedihasanshohan&theme=dark"
//   alt="GitHub Streak"
// />
// <img
//   src="https://github-readme-stats.vercel.app/api/top-langs/?username=mehedihasanshohan&layout=compact&theme=github_dark"
//   alt="Top Languages"
// />
//     </div>
//     </div>
//   </section>
// );
// }



// import React from 'react';
// import GitHubCalendar from 'react-github-calendar';

// export default function GitHubStats() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12 flex justify-center items-center">
//       <div className="w-full max-w-6xl p-6 shadow-md border border-cyan-300 rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
//         <h2 className="text-2xl font-bold mb-6 text-center underline">GitHub Insights</h2>

//         <div className="overflow-x-auto">
//           <GitHubCalendar
//             username="mehedihasanshohan"
//             colorScheme="dark"
//             blockSize={15}
//             blockMargin={5}
//             fontSize={16}
//           />
//         </div>

//         <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mt-8">
//           <img
//             src="https://github-readme-stats.vercel.app/api?username=mehedihasanshohan&show_icons=true&theme=github_dark"
//             alt="GitHub Stats"
//             className="w-full md:w-[350px] rounded-lg"
//           />
//           <img
//             src="https://streak-stats.demolab.com?user=mehedihasanshohan&theme=dark"
//             alt="GitHub Streak"
//             className="w-full md:w-[350px] rounded-lg"
//           />
//           <img
//             src="https://github-readme-stats.vercel.app/api/top-langs/?username=mehedihasanshohan&layout=compact&theme=github_dark"
//             alt="Top Languages"
//             className="w-full md:w-[350px] rounded-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }





import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-2">
      <div className="w-full bg-white/5 border border-white/20 p-4 md:p-8 rounded-2xl backdrop-blur-md">
        <h2 className="text-xl font-bold mb-6 text-center text-cyan-500 uppercase tracking-widest">
          Contribution Graph
        </h2>

        <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex justify-center min-w-[750px] lg:min-w-full">
            <GitHubCalendar
              username="mehedihasanshohan"
              colorScheme="dark"
              blockSize={10}
              blockMargin={5}
              fontSize={13}
              hideColorLegend={false}
              showWeekdayLabels={true}
            />
          </div>
        </div>
      </div>

      {/* 2. Stats Section - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Card 1: General Stats */}
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-center backdrop-blur-sm hover:border-cyan-500/50 transition-all">
          <img
            src="https://github-readme-stats.vercel.app/api?username=mehedihasanshohan&show_icons=true&theme=github_dark&bg_color=0f172a00&hide_border=true"
            alt="GitHub Stats"
            className="w-full h-auto"
          />
        </div>

        {/* Card 2: Streak Stats */}
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-center backdrop-blur-sm hover:border-cyan-500/50 transition-all">
          <img
            src="https://streak-stats.demolab.com?user=mehedihasanshohan&theme=dark&background=0f172a00&hide_border=true"
            alt="GitHub Streak"
            className="w-full h-auto"
          />
        </div>

        {/* Card 3: Top Languages (Full Width) */}
        <div className="md:col-span-2 p-4 bg-white/5 border border-white/10 rounded-xl flex justify-center backdrop-blur-sm hover:border-cyan-500/50 transition-all">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mehedihasanshohan&layout=compact&theme=github_dark&bg_color=0f172a00&hide_border=true"
            alt="Top Languages"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
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



import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12 flex justify-center items-center">
      <div className="w-full max-w-6xl p-6 shadow-md border border-cyan-300 rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <h2 className="text-2xl font-bold mb-6 text-center underline">GitHub Insights</h2>

        <div className="overflow-x-auto">
          <GitHubCalendar
            username="mehedihasanshohan"
            colorScheme="dark"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mt-8">
          <img
            src="https://github-readme-stats.vercel.app/api?username=mehedihasanshohan&show_icons=true&theme=github_dark"
            alt="GitHub Stats"
            className="w-full md:w-[350px] rounded-lg"
          />
          <img
            src="https://streak-stats.demolab.com?user=mehedihasanshohan&theme=dark"
            alt="GitHub Streak"
            className="w-full md:w-[350px] rounded-lg"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mehedihasanshohan&layout=compact&theme=github_dark"
            alt="Top Languages"
            className="w-full md:w-[350px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

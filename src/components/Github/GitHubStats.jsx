import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <div className="p-6 shadow-md bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
      <h2 className="text-xl font-semibold mb-4">My GitHub Contributions</h2>
      <GitHubCalendar
        username="mehedihasanshohan"
        colorScheme="dark"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}

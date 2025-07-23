import React from "react";

const page = () => {
  return (
    <div>
      <div className="polio">
        {porto.map((char, index) => (
          <span
            key={index}
            className={`letter letter-${index + 1} leading-tight`}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="folio">
        {folio.map((char, index) => (
          <span
            key={index}
            className={`letter letter-${index + 6} leading-tight`}
          >
            {char}
          </span>
        ))}
      </div>
      <svg
        className="cursor"
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000"
          stroke="#000"
          strokeWidth="1"
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
        ></path>
      </svg>
      <svg
        className="pixel-1"
        width="120"
        height="120"
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LINE 01 */}
        <rect x="20" y="0" width="20" height="20" fill="black" />
        <rect x="40" y="0" width="20" height="20" fill="black" />
        <rect x="80" y="0" width="20" height="20" fill="black" />
        <rect x="100" y="0" width="20" height="20" fill="black" />
        {/* LINE 02 */}
        <rect x="0" y="20" width="20" height="20" fill="black" />
        <rect x="60" y="20" width="20" height="20" fill="black" />
        <rect x="80" y="20" width="20" height="20" fill="black" />
        <rect x="100" y="20" width="20" height="20" fill="black" />
        <rect x="120" y="20" width="20" height="20" fill="black" />
        {/* LINE 03 */}
        <rect x="0" y="40" width="20" height="20" fill="black" />
        <rect x="40" y="40" width="20" height="20" fill="black" />
        <rect x="60" y="40" width="20" height="20" fill="black" />
        <rect x="80" y="40" width="20" height="20" fill="black" />
        <rect x="100" y="40" width="20" height="20" fill="black" />
        <rect x="120" y="40" width="20" height="20" fill="black" />
        {/* LINE 04 */}
        <rect x="20" y="60" width="20" height="20" fill="black" />
        <rect x="40" y="60" width="20" height="20" fill="black" />
        <rect x="60" y="60" width="20" height="20" fill="black" />
        <rect x="80" y="60" width="20" height="20" fill="black" />
        <rect x="100" y="60" width="20" height="20" fill="black" />
        {/* LINE 05 */}
        <rect x="0" y="80" width="20" height="20" fill="black" />
        <rect x="20" y="80" width="20" height="20" fill="black" />
        <rect x="40" y="80" width="20" height="20" fill="black" />
        <rect x="60" y="80" width="20" height="20" fill="black" />
        <rect x="80" y="80" width="20" height="20" fill="black" />
        <rect x="100" y="80" width="20" height="20" fill="black" />
        <rect x="120" y="80" width="20" height="20" fill="black" />
        {/* LINE 06 */}
        <rect x="0" y="100" width="20" height="20" fill="black" />
        <rect x="20" y="100" width="20" height="20" fill="black" />
        <rect x="40" y="100" width="20" height="20" fill="black" />
        <rect x="60" y="100" width="20" height="20" fill="black" />
        <rect x="80" y="100" width="20" height="20" fill="black" />
        <rect x="100" y="100" width="20" height="20" fill="black" />
        <rect x="120" y="100" width="20" height="20" fill="black" />
        {/* LINE 7 */}
        <rect x="20" y="120" width="20" height="20" fill="black" />
        <rect x="40" y="120" width="20" height="20" fill="black" />
        <rect x="80" y="120" width="20" height="20" fill="black" />
        <rect x="100" y="120" width="20" height="20" fill="black" />
      </svg>
      <svg
        className="pixel-2"
        width="70"
        height="70"
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LINE 01 */}
        <rect x="20" y="0" width="20" height="20" fill="black" />
        <rect x="40" y="0" width="20" height="20" fill="black" />
        <rect x="80" y="0" width="20" height="20" fill="black" />
        <rect x="100" y="0" width="20" height="20" fill="black" />
        {/* LINE 02 */}
        <rect x="0" y="20" width="20" height="20" fill="black" />
        <rect x="60" y="20" width="20" height="20" fill="black" />
        <rect x="80" y="20" width="20" height="20" fill="black" />
        <rect x="100" y="20" width="20" height="20" fill="black" />
        <rect x="120" y="20" width="20" height="20" fill="black" />
        {/* LINE 03 */}
        <rect x="0" y="40" width="20" height="20" fill="black" />
        <rect x="40" y="40" width="20" height="20" fill="black" />
        <rect x="60" y="40" width="20" height="20" fill="black" />
        <rect x="80" y="40" width="20" height="20" fill="black" />
        <rect x="100" y="40" width="20" height="20" fill="black" />
        <rect x="120" y="40" width="20" height="20" fill="black" />
        {/* LINE 04 */}
        <rect x="20" y="60" width="20" height="20" fill="black" />
        <rect x="40" y="60" width="20" height="20" fill="black" />
        <rect x="60" y="60" width="20" height="20" fill="black" />
        <rect x="80" y="60" width="20" height="20" fill="black" />
        <rect x="100" y="60" width="20" height="20" fill="black" />
        {/* LINE 05 */}
        <rect x="0" y="80" width="20" height="20" fill="black" />
        <rect x="20" y="80" width="20" height="20" fill="black" />
        <rect x="40" y="80" width="20" height="20" fill="black" />
        <rect x="60" y="80" width="20" height="20" fill="black" />
        <rect x="80" y="80" width="20" height="20" fill="black" />
        <rect x="100" y="80" width="20" height="20" fill="black" />
        <rect x="120" y="80" width="20" height="20" fill="black" />
        {/* LINE 06 */}
        <rect x="0" y="100" width="20" height="20" fill="black" />
        <rect x="20" y="100" width="20" height="20" fill="black" />
        <rect x="40" y="100" width="20" height="20" fill="black" />
        <rect x="60" y="100" width="20" height="20" fill="black" />
        <rect x="80" y="100" width="20" height="20" fill="black" />
        <rect x="100" y="100" width="20" height="20" fill="black" />
        <rect x="120" y="100" width="20" height="20" fill="black" />
        {/* LINE 7 */}
        <rect x="20" y="120" width="20" height="20" fill="black" />
        <rect x="40" y="120" width="20" height="20" fill="black" />
        <rect x="80" y="120" width="20" height="20" fill="black" />
        <rect x="100" y="120" width="20" height="20" fill="black" />
      </svg>
      <svg
        className="pixel-3"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LINE 01 */}
        <rect x="20" y="0" width="20" height="20" fill="black" />
        <rect x="40" y="0" width="20" height="20" fill="black" />
        <rect x="80" y="0" width="20" height="20" fill="black" />
        <rect x="100" y="0" width="20" height="20" fill="black" />
        {/* LINE 02 */}
        <rect x="0" y="20" width="20" height="20" fill="black" />
        <rect x="60" y="20" width="20" height="20" fill="black" />
        <rect x="80" y="20" width="20" height="20" fill="black" />
        <rect x="100" y="20" width="20" height="20" fill="black" />
        <rect x="120" y="20" width="20" height="20" fill="black" />
        {/* LINE 03 */}
        <rect x="0" y="40" width="20" height="20" fill="black" />
        <rect x="40" y="40" width="20" height="20" fill="black" />
        <rect x="60" y="40" width="20" height="20" fill="black" />
        <rect x="80" y="40" width="20" height="20" fill="black" />
        <rect x="100" y="40" width="20" height="20" fill="black" />
        <rect x="120" y="40" width="20" height="20" fill="black" />
        {/* LINE 04 */}
        <rect x="20" y="60" width="20" height="20" fill="black" />
        <rect x="40" y="60" width="20" height="20" fill="black" />
        <rect x="60" y="60" width="20" height="20" fill="black" />
        <rect x="80" y="60" width="20" height="20" fill="black" />
        <rect x="100" y="60" width="20" height="20" fill="black" />
        {/* LINE 05 */}
        <rect x="0" y="80" width="20" height="20" fill="black" />
        <rect x="20" y="80" width="20" height="20" fill="black" />
        <rect x="40" y="80" width="20" height="20" fill="black" />
        <rect x="60" y="80" width="20" height="20" fill="black" />
        <rect x="80" y="80" width="20" height="20" fill="black" />
        <rect x="100" y="80" width="20" height="20" fill="black" />
        <rect x="120" y="80" width="20" height="20" fill="black" />
        {/* LINE 06 */}
        <rect x="0" y="100" width="20" height="20" fill="black" />
        <rect x="20" y="100" width="20" height="20" fill="black" />
        <rect x="40" y="100" width="20" height="20" fill="black" />
        <rect x="60" y="100" width="20" height="20" fill="black" />
        <rect x="80" y="100" width="20" height="20" fill="black" />
        <rect x="100" y="100" width="20" height="20" fill="black" />
        <rect x="120" y="100" width="20" height="20" fill="black" />
        {/* LINE 7 */}
        <rect x="20" y="120" width="20" height="20" fill="black" />
        <rect x="40" y="120" width="20" height="20" fill="black" />
        <rect x="80" y="120" width="20" height="20" fill="black" />
        <rect x="100" y="120" width="20" height="20" fill="black" />
      </svg>
    </div>
  );
};

export default page;

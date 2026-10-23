import { Link } from "react-router";
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        width="50"
        height="50"
      >
        <defs>
          <clipPath id="globeClip">
            <circle cx="64" cy="66" r="46" />
          </clipPath>
        </defs>

        <circle cx="64" cy="66" r="46" fill="#2BA89A" />
        <g clip-path="url(#globeClip)" fill="#8FD9C9">
          <path d="M30 48 C40 40 52 44 56 52 C60 60 52 66 46 70 C40 74 42 84 34 86 C26 88 20 76 20 66 C20 58 24 52 30 48 Z" />
          <path d="M70 34 C82 30 96 36 100 46 C104 56 94 58 86 56 C78 54 74 60 76 68 C78 76 70 78 66 72 C62 66 64 56 62 48 C60 40 64 36 70 34 Z" />
          <path d="M78 84 C86 80 96 84 98 92 C100 100 90 106 82 104 C74 102 70 90 78 84 Z" />
        </g>
        <circle
          cx="64"
          cy="66"
          r="46"
          fill="none"
          stroke="#1F8A7E"
          stroke-width="2"
        />

        <g transform="translate(14 4)">
          <path
            d="M22 0 C10 0 0 9.5 0 21.5 C0 37 22 58 22 58 C22 58 44 37 44 21.5 C44 9.5 34 0 22 0 Z"
            fill="#E53935"
          />
          <path
            d="M22 0 C34 0 44 9.5 44 21.5 C44 37 22 58 22 58 Z"
            fill="#C62828"
          />
          <circle cx="22" cy="21" r="8.5" fill="#FFFFFF" />
        </g>
      </svg>
      Around the world
    </Link>
  );
}

export default Logo;

function EmptySearch(){

return (<div className="col-span-4">


   <svg
  width="300"
  height="250"
  viewBox="0 0 300 250"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="No results found"
  style={{ color: "#2B2B2B" }}
  className="m-auto"
>
  {/* Birds */}
  <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
    <path d="M20 70 q6 -6 12 0 q6 -6 12 0" />
    <path d="M40 58 q5 -5 10 0 q5 -5 10 0" />
    <path d="M58 72 q4 -4 8 0 q4 -4 8 0" />
    <path d="M78 88 q3 -3 6 0 q3 -3 6 0" />
  </g>

  {/* Left cloud */}
  <path
    d="M8 125 h70 q0 -12 -12 -12 q-2 -12 -16 -12 q-12 0 -16 10 q-12 -2 -16 8 q-10 0 -10 6 z"
    stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7"
  />

  {/* Bottom-middle cloud */}
  <path
    d="M150 210 h98 q0 -14 -16 -14 q0 -24 -26 -22 q-14 -10 -30 4 q-10 -6 -18 6 q-12 2 -8 26 z"
    stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7"
  />

  {/* Right cloud */}
  <path
    d="M240 162 h56 q0 -10 -10 -10 q-2 -12 -16 -10 q-8 -6 -18 2 q-10 -2 -12 8 z"
    stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7"
  />

  {/* Magnifier handle */}
  <path d="M120 150 L48 214" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
  <path d="M113 156 L104 164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />

  {/* Magnifier lens */}
  <circle cx="160" cy="98" r="66" fill="#E6E6E6" />
  <circle cx="160" cy="98" r="56" fill="#F7F7F7" stroke="#D9D9D9" strokeWidth="2" />

  {/* Sad face */}
  <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
    <path d="M146 80 V94" />
    <path d="M174 80 V94" />
  </g>
  <path
    d="M136 120 q10 -12 24 -8 q14 -4 26 8"
    stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
  />
</svg>
<p className="text-2xl text-center font-bold">No results found</p>
<p className="text-center">we cann't find the country you searched for.. 
   <br/>
   Try to search for another one.

</p>
</div>)


}


export default EmptySearch;
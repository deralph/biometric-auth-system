import React from "react";

const DonutChart: React.FC<{ verified: number; registered: number }> = ({ verified, registered }) => {
  const total = Math.max(verified + registered, 1); // guard
  const verifiedPct = (verified / total) * 100;
  const verifiedAngle = (verifiedPct / 100) * 360;

  const size = 160; // px
  const innerPct = 0.62; // inner hole relative size (62% of outer)

  const donutStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    // conic: blue for verified then yellow for registered (adjust colors to match your theme)
    background: `conic-gradient(#0b74ff 0deg ${verifiedAngle}deg, #f6c84b ${verifiedAngle}deg 360deg)`,
    position: "relative",
  };

  const holeStyle: React.CSSProperties = {
    width: size * innerPct,
    height: size * innerPct,
    borderRadius: "50%",
    background: "white",
    position: "absolute",
    top: `calc(50% - ${size * innerPct / 2}px)`,
    left: `calc(50% - ${size * innerPct / 2}px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className=" bg-gray-100 card p-6 flex flex-col items-center justify-center">
      <div style={donutStyle} className="rounded-full">
        <div style={holeStyle}>
          <div className="text-sm font-semibold">{verified}/{total}</div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">VERIFIED STUDENTS</div>

      <div className="mt-4 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded-sm inline-block" />
          <span>Registered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-sm inline-block" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;

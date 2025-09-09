import React from "react";

type DataPoint = { label: string; value: number };

const BarChart: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  // guard against empty or zero-only data
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="card flex-1 p-6 bg-gray-100">
      <h3 className="text-sm font-semibold mb-4">REGISTERED STUDENTS</h3>

      {/* Outer container has fixed height so % heights inside work */}
      <div className="flex items-end gap-6 h-52">
        {data.map((d) => {
          const heightPct = (d.value / max) * 100;

          return (
            // IMPORTANT: justify-end pushes the bar down so it grows upward
            <div key={d.label} className="flex flex-col items-center w-12 h-full justify-end">
              <div
                className="w-full bg-blue-500 rounded-t-md transition-all"
                style={{ height: `${heightPct}%` }}
                title={`${d.value}`}
              />
              <div className="text-xs mt-3 text-gray-500">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;

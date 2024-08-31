export default function ProgressBar({
  size,
  radius,
  color,
  percentage,
}: {
  size: number;
  radius: number;
  color: string;
  percentage: number;
}) {
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth="3px"
        stroke="var(--ds-gray-alpha-400)"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth="3px"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        stroke={`var(--ds-${color})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

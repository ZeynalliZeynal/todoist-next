export const ChartBarMiddle = ({ size }: { size?: number }) => {
  return (
    <svg
      data-testid="geist-icon"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChartBarMiddle = ({ size }: { size?: number }) => {
  return (
    <svg
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

export const Inbox = ({ size }: { size?: number }) => {
  return (
    <svg
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
        d="M1.67705 7.5L3.92705 3H12.0729L14.3229 7.5H10H9.25V8.25C9.25 8.94036 8.69036 9.5 8 9.5C7.30964 9.5 6.75 8.94036 6.75 8.25V7.5H6H1.67705ZM1.5 9V12C1.5 12.5523 1.94772 13 2.5 13H13.5C14.0523 13 14.5 12.5523 14.5 12V9H10.6465C10.32 10.1543 9.25878 11 8 11C6.74122 11 5.67998 10.1543 5.35352 9H1.5ZM3 1.5H13L15.8944 7.28885C15.9639 7.42771 16 7.58082 16 7.73607V12C16 13.3807 14.8807 14.5 13.5 14.5H2.5C1.11929 14.5 0 13.3807 0 12V7.73607C0 7.58082 0.0361451 7.42771 0.105573 7.28885L3 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Search = ({ size }: { size?: number }) => {
  return (
    <svg
      className="with-icon_icon__MHUeb"
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
};

export const Plus = ({ size }: { size?: number }) => {
  return (
    <svg
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
        d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Upcoming = ({ size }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const GridSquare = ({ size }: { size?: number }) => {
  return (
    <svg
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
        d="M2.5 5.5V2.5H5.5V5.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7H2C1.44772 7 1 6.55228 1 6V2ZM2.5 13.5V10.5H5.5V13.5H2.5ZM1 10C1 9.44772 1.44772 9 2 9H6C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V10ZM10.5 2.5V5.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1H10ZM10.5 13.5V10.5H13.5V13.5H10.5ZM9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z"
        fill="currentColor"
      />
    </svg>
  );
};

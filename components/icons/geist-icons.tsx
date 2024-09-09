export const ChartBarMiddle = ({ size }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Inbox = ({ size }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.67705 7.5L3.92705 3H12.0729L14.3229 7.5H10H9.25V8.25C9.25 8.94036 8.69036 9.5 8 9.5C7.30964 9.5 6.75 8.94036 6.75 8.25V7.5H6H1.67705ZM1.5 9V12C1.5 12.5523 1.94772 13 2.5 13H13.5C14.0523 13 14.5 12.5523 14.5 12V9H10.6465C10.32 10.1543 9.25878 11 8 11C6.74122 11 5.67998 10.1543 5.35352 9H1.5ZM3 1.5H13L15.8944 7.28885C15.9639 7.42771 16 7.58082 16 7.73607V12C16 13.3807 14.8807 14.5 13.5 14.5H2.5C1.11929 14.5 0 13.3807 0 12V7.73607C0 7.58082 0.0361451 7.42771 0.105573 7.28885L3 1.5Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Search = ({ size }: { size?: number }) => {
  return (
    <svg
      className='with-icon_icon__MHUeb'
      fill='none'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path d='M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z' />
      <path d='M16 16l4.5 4.5' />
    </svg>
  );
};

export const Upcoming = ({ size }: { size?: number }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export const GridSquare = ({ size }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.5 5.5V2.5H5.5V5.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7H2C1.44772 7 1 6.55228 1 6V2ZM2.5 13.5V10.5H5.5V13.5H2.5ZM1 10C1 9.44772 1.44772 9 2 9H6C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V10ZM10.5 2.5V5.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1H10ZM10.5 13.5V10.5H13.5V13.5H10.5ZM9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const SettingSliders = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.75 5.5C11.7165 5.5 12.5 4.7165 12.5 3.75C12.5 2.7835 11.7165 2 10.75 2C9.7835 2 9 2.7835 9 3.75C9 4.7165 9.7835 5.5 10.75 5.5ZM10.75 0.75C12.1479 0.75 13.3225 1.70608 13.6555 3H15.25H16V4.5H15.25H13.6555C13.3225 5.79392 12.1479 6.75 10.75 6.75C9.35212 6.75 8.17754 5.79392 7.84451 4.5H0.75H0V3H0.75H7.84451C8.17754 1.70608 9.35212 0.75 10.75 0.75ZM15.25 13H16V11.5H15.25L8.15549 11.5C7.82245 10.2061 6.64788 9.25 5.25 9.25C3.85212 9.25 2.67755 10.2061 2.34451 11.5H0.75H0V13H0.75H2.34451C2.67755 14.2939 3.85212 15.25 5.25 15.25C6.64788 15.25 7.82246 14.2939 8.15549 13L15.25 13ZM7 12.2513C7 12.2509 7 12.2504 7 12.25C7 12.2496 7 12.2491 7 12.2487C6.99929 11.2828 6.21606 10.5 5.25 10.5C4.2835 10.5 3.5 11.2835 3.5 12.25C3.5 13.2165 4.2835 14 5.25 14C6.21606 14 6.99929 13.2172 7 12.2513Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const DeviceAlternate = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 3.25C1 1.45507 2.45507 0 4.25 0H11.75C13.5449 0 15 1.45507 15 3.25V15.25V16H14.25H1.75H1V15.25V3.25ZM4.25 1.5C3.2835 1.5 2.5 2.2835 2.5 3.25V14.5H13.5V3.25C13.5 2.2835 12.7165 1.5 11.75 1.5H4.25ZM4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V10H4V4ZM9 13H12V11.5H9V13Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Sun = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Moon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ChartTrendingUp = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8242 3H10.0742V4.5H10.8242H13.4382L8.49989 9.43829L6.207 7.14629C5.81645 6.75589 5.18339 6.75595 4.79292 7.14642L0.719662 11.2197L0.189331 11.75L1.24999 12.8107L1.78032 12.2803L5.50009 8.56057L7.79298 10.8526C8.18353 11.243 8.81659 11.2429 9.20706 10.8524L14.4988 5.56066V8.17462V8.92462H15.9988V8.17462V4C15.9988 3.44772 15.5511 3 14.9988 3H10.8242Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const SettingsGear = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.70059 1.73618L7.74488 1.5H8.2551L8.29938 1.73618C8.4406 2.48936 8.98357 3.04807 9.63284 3.27226C9.82296 3.33791 10.008 3.41476 10.1871 3.50207C10.805 3.80328 11.5845 3.7922 12.2172 3.35933L12.4158 3.22342L12.7766 3.5842L12.6407 3.78284C12.2078 4.41549 12.1967 5.19496 12.4979 5.81292C12.5852 5.99203 12.6621 6.17703 12.7277 6.36714C12.9519 7.01642 13.5106 7.55938 14.2638 7.7006L14.5 7.74489V8.25511L14.2638 8.2994C13.5106 8.44062 12.9519 8.98359 12.7277 9.63286C12.6621 9.82298 12.5852 10.008 12.4979 10.1871C12.1967 10.805 12.2078 11.5845 12.6407 12.2172L12.7766 12.4158L12.4158 12.7766L12.2172 12.6407C11.5845 12.2078 10.805 12.1967 10.1871 12.4979C10.008 12.5852 9.82296 12.6621 9.63284 12.7277C8.98357 12.9519 8.4406 13.5106 8.29938 14.2638L8.2551 14.5H7.74488L7.70059 14.2638C7.55937 13.5106 7.0164 12.9519 6.36713 12.7277C6.17702 12.6621 5.99202 12.5852 5.8129 12.4979C5.19495 12.1967 4.41548 12.2078 3.78283 12.6407L3.5842 12.7766L3.22342 12.4158L3.35932 12.2172C3.79219 11.5845 3.80326 10.8051 3.50206 10.1871C3.41475 10.008 3.3379 9.82298 3.27225 9.63285C3.04806 8.98358 2.48935 8.44061 1.73616 8.29939L1.5 8.25511V7.74489L1.73616 7.70061C2.48935 7.55939 3.04806 7.01642 3.27225 6.36715C3.3379 6.17703 3.41475 5.99203 3.50205 5.81291C3.80326 5.19496 3.79218 4.41549 3.35931 3.78283L3.2234 3.5842L3.58418 3.22342L3.78282 3.35932C4.41547 3.79219 5.19494 3.80327 5.8129 3.50207C5.99201 3.41476 6.17701 3.33791 6.36713 3.27226C7.0164 3.04807 7.55937 2.48936 7.70059 1.73618ZM6.49999 0H9.49999L9.77369 1.45974C9.80837 1.64472 9.94454 1.79299 10.1224 1.85441C10.3702 1.93996 10.6111 2.04007 10.8443 2.15371C11.0135 2.2362 11.2148 2.22768 11.3701 2.12137L12.5962 1.28249L14.7175 3.40381L13.8786 4.62987C13.7723 4.78525 13.7638 4.98647 13.8463 5.1557C13.9599 5.38885 14.06 5.62981 14.1456 5.87756C14.207 6.05545 14.3553 6.19161 14.5402 6.2263L16 6.5V9.5L14.5402 9.7737C14.3553 9.80839 14.207 9.94455 14.1456 10.1224C14.06 10.3702 13.9599 10.6112 13.8463 10.8443C13.7638 11.0135 13.7723 11.2148 13.8786 11.3701L14.7175 12.5962L12.5962 14.7175L11.3701 13.8786C11.2147 13.7723 11.0135 13.7638 10.8443 13.8463C10.6111 13.9599 10.3702 14.06 10.1224 14.1456C9.94454 14.207 9.80837 14.3553 9.77369 14.5403L9.49999 16H6.49999L6.22628 14.5403C6.1916 14.3553 6.05544 14.207 5.87755 14.1456C5.6298 14.06 5.38884 13.9599 5.15569 13.8463C4.98645 13.7638 4.78523 13.7723 4.62985 13.8786L3.40381 14.7175L1.28249 12.5962L2.12136 11.3702C2.22767 11.2148 2.23619 11.0136 2.1537 10.8443C2.04006 10.6112 1.93995 10.3702 1.8544 10.1224C1.79297 9.94455 1.6447 9.80838 1.45973 9.7737L0 9.5V6.5L1.45973 6.2263C1.6447 6.19162 1.79297 6.05545 1.8544 5.87756C1.93995 5.62981 2.04005 5.38885 2.1537 5.15569C2.23619 4.98646 2.22766 4.78524 2.12135 4.62986L1.28247 3.40381L3.40379 1.28249L4.62984 2.12136C4.78522 2.22767 4.98644 2.2362 5.15568 2.15371C5.38883 2.04007 5.6298 1.93996 5.87755 1.85441C6.05544 1.79299 6.1916 1.64472 6.22628 1.45975L6.49999 0ZM9.49998 8C9.49998 8.82843 8.82841 9.5 7.99998 9.5C7.17156 9.5 6.49998 8.82843 6.49998 8C6.49998 7.17157 7.17156 6.5 7.99998 6.5C8.82841 6.5 9.49998 7.17157 9.49998 8ZM11 8C11 9.65685 9.65684 11 7.99998 11C6.34313 11 4.99998 9.65685 4.99998 8C4.99998 6.34315 6.34313 5 7.99998 5C9.65684 5 11 6.34315 11 8Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ChartActivity = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      strokeLinejoin='round'
      viewBox='0 0 16 16'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.51324 3.62367L3.76375 8.34731C3.61845 8.7396 3.24433 8.99999 2.826 8.99999H0.75H0V7.49999H0.75H2.47799L4.56666 1.86057C4.88684 0.996097 6.10683 0.988493 6.43776 1.84891L10.5137 12.4463L12.2408 8.1286C12.3926 7.74894 12.7604 7.49999 13.1693 7.49999H15.25H16V8.99999H15.25H13.5078L11.433 14.1868C11.0954 15.031 9.8976 15.023 9.57122 14.1744L5.51324 3.62367Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Star = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        d='M8.43558 1.79108L9.87893 4.35185C10.093 4.73161 10.4617 4.99947 10.889 5.08569L13.7704 5.66708C14.1522 5.74412 14.3032 6.20884 14.0396 6.4956L12.0502 8.65963C11.7552 8.98055 11.6144 9.41396 11.6644 9.84701L12.0019 12.7671C12.0466 13.154 11.6513 13.4412 11.2971 13.2791L8.62424 12.0558C8.22785 11.8744 7.77215 11.8744 7.37576 12.0558L4.70288 13.2791C4.3487 13.4412 3.95338 13.154 3.9981 12.7671L4.33558 9.84701C4.38563 9.41396 4.24481 8.98056 3.94978 8.65963L1.96037 6.4956C1.69676 6.20884 1.84775 5.74412 2.22957 5.66708L5.11102 5.08569C5.53834 4.99947 5.90702 4.73161 6.12107 4.35185L7.56442 1.79108C7.75568 1.45176 8.24432 1.45176 8.43558 1.79108Z'
        fill='var(--ds-amber-900)'
        fillOpacity={0.1}
        stroke='var(--ds-amber-900)'
      />
    </svg>
  );
};

export const Plus = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Check = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinejoin='round'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Home = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinejoin='round'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5 6.56062L8.00001 2.06062L3.50001 6.56062V13.5L6.00001 13.5V11C6.00001 9.89539 6.89544 8.99996 8.00001 8.99996C9.10458 8.99996 10 9.89539 10 11V13.5L12.5 13.5V6.56062ZM13.78 5.71933L8.70711 0.646409C8.31659 0.255886 7.68342 0.255883 7.2929 0.646409L2.21987 5.71944C2.21974 5.71957 2.21961 5.7197 2.21949 5.71982L0.469676 7.46963L-0.0606537 7.99996L1.00001 9.06062L1.53034 8.53029L2.00001 8.06062V14.25V15H2.75001L6.00001 15H7.50001H8.50001H10L13.25 15H14V14.25V8.06062L14.4697 8.53029L15 9.06062L16.0607 7.99996L15.5303 7.46963L13.7806 5.71993C13.7804 5.71973 13.7802 5.71953 13.78 5.71933ZM8.50001 11V13.5H7.50001V11C7.50001 10.7238 7.72386 10.5 8.00001 10.5C8.27615 10.5 8.50001 10.7238 8.50001 11Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ArrowUpRightSmall = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinejoin='round'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Location = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinejoin='round'
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.5253 10.2634L8 13.8578L4.47471 10.2634C2.50843 8.25857 2.50843 4.99627 4.47471 2.99144C6.42507 1.00285 9.57493 1.00285 11.5253 2.99144C13.4916 4.99627 13.4916 8.25857 11.5253 10.2634ZM12.5962 11.3137L9.05051 14.9289L8 16L6.94949 14.9289L3.40381 11.3137C0.865397 8.72554 0.865399 4.52929 3.40381 1.94113C5.94222 -0.647042 10.0578 -0.647042 12.5962 1.94113C15.1346 4.52929 15.1346 8.72554 12.5962 11.3137ZM9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5ZM8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const Tag = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinejoin='round'
      style={{
        width: size,
        height: size,
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.5 1.5H6.34315C7.00619 1.5 7.64207 1.76339 8.11091 2.23223L13.8787 8L8 13.8787L2.23223 8.11091C1.76339 7.64207 1.5 7.00619 1.5 6.34315V1.5ZM16 8L14.9393 6.93934L9.17157 1.17157C8.42143 0.421427 7.40401 0 6.34315 0H1.5H0V1.5V6.34315C0 7.40401 0.421426 8.42143 1.17157 9.17157L6.93934 14.9393L8 16L9.06066 14.9393L14.9393 9.06066L16 8ZM4.5 5.25C4.91421 5.25 5.25 4.91421 5.25 4.5C5.25 4.08579 4.91421 3.75 4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5C3.75 4.91421 4.08579 5.25 4.5 5.25Z'
        fill='currentColor'
      />
    </svg>
  );
};

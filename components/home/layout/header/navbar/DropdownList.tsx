import Link from "next/link";

const NAV_LIST = [
  {
    title: "Integrations",
    desc: "Connect Todoist with your other tools",
    href: "/",
    icon: (
      <svg
        fill="none"
        height="18"
        viewBox="0 0 16 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.25 4c0-.967.783-1.75 1.75-1.75h7c.967 0 1.75.783 1.75 1.75v2.001a2.5 2.5 0 1 1 0 4V12A1.75 1.75 0 0 1 10 13.75H3A1.75 1.75 0 0 1 1.25 12V9.534c0-.71.575-1.284 1.284-1.284.437 0 .78.22.996.445a1 1 0 1 0 .001-1.389 1.395 1.395 0 0 1-.996.444c-.71 0-1.285-.576-1.285-1.285zM3 3.75a.25.25 0 0 0-.25.25v2.001a2.5 2.5 0 1 1 0 4V12c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25V9.534c0-.71.575-1.284 1.284-1.284.437 0 .78.22.996.445a1 1 0 1 0 .001-1.389 1.395 1.395 0 0 1-.996.444c-.71 0-1.285-.576-1.285-1.285V4a.25.25 0 0 0-.25-.25z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Templates",
    desc: "Kickstart projects with curated templates",
    href: "/",
    icon: (
      <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M9.14.936H7.434a3 3 0 0 0-2.71 1.713 2.992 2.992 0 0 0-2.346.673L1.072 4.418a3 3 0 0 0-.37 4.226l4.658 5.552a3.853 3.853 0 0 0 6.764-1.919l3.012-3.224a3 3 0 0 0-.144-4.24l-1.246-1.165a2.987 2.987 0 0 0-1.81-.798A3.001 3.001 0 0 0 9.14.936zm1.266 2.196c.148.233.234.508.234.804V8.5L6.604 3.691a3.01 3.01 0 0 0-.49-.466 1.5 1.5 0 0 1 1.32-.789H9.14c.532 0 1 .278 1.266.696zm1.734 1.275c.21.064.41.177.582.337l1.246 1.165a1.5 1.5 0 0 1 .072 2.12l-1.9 2.034zm-1.477 7.237a2.341 2.341 0 0 0-.55-1.436L5.935 5.226l-.479-.571a1.495 1.495 0 0 0-1.02-.53 1.495 1.495 0 0 0-1.093.345L2.036 5.567A1.5 1.5 0 0 0 1.85 7.68l2.583 3.079 2.075 2.473a2.353 2.353 0 0 0 4.122-1.119c.026-.155.037-.312.032-.47zm-2.376 1.112a.925.925 0 1 1 0-1.85.925.925 0 0 1 0 1.85z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Getting Started",
    desc: "Get up and running in minutes",
    href: "/",
    icon: (
      <svg
        fill="none"
        height="18"
        viewBox="0 0 16 17"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="lightning-bolt-base_svg__a">
          <path d="M0 .001h16v16H0z" />
        </clipPath>
        <g clipPath="url(#lightning-bolt-base_svg__a)">
          <path
            clipRule="evenodd"
            d="M8.996.292a.75.75 0 0 1 .504.709v4.694H14a.75.75 0 0 1 .552 1.258L6.677 15.51a.75.75 0 0 1-1.286-.66l.938-4.543H2a.75.75 0 0 1-.589-1.214L8.161.536a.75.75 0 0 1 .835-.244zM3.547 8.806H7.25a.75.75 0 0 1 .734.902L7.408 12.5l4.882-5.305H8.75a.75.75 0 0 1-.75-.75V3.162z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Help Center",
    desc: "Find answers to all your questions",
    href: "/",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m4.856 3.795 1.317 1.317a3.417 3.417 0 0 1 3.654 0l1.317-1.317a5.25 5.25 0 0 0-6.288 0Zm7.349 1.06-1.318 1.318a3.417 3.417 0 0 1 0 3.653l1.318 1.317a5.252 5.252 0 0 0 0-6.287Zm-1.061 7.35-1.317-1.318a3.417 3.417 0 0 1-3.654 0l-1.317 1.317a5.254 5.254 0 0 0 6.288 0Zm-7.349-1.062a5.248 5.248 0 0 1 0-6.287l1.318 1.317a3.417 3.417 0 0 0 0 3.653l-1.318 1.317ZM6.63 6.66a1.917 1.917 0 1 0 2.74 2.68 1.917 1.917 0 0 0-2.74-2.68Zm-3.409 6.108a1.504 1.504 0 0 0 .012.011 6.75 6.75 0 0 0 9.534 0l.006-.005.006-.006a6.75 6.75 0 1 0-9.558 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Productivity Methods + Quiz",
    desc: "Discover which method fits you best",
    href: "/",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.897 3.751c-1.323 0-2.35.703-2.707 1.543a.75.75 0 0 1-1.38-.586c.632-1.49 2.273-2.457 4.087-2.457 2.27 0 4.353 1.556 4.353 3.75 0 1.848-1.5 3.256-3.301 3.64a.379.379 0 0 0-.302.36.75.75 0 0 1-1.5 0c0-.938.687-1.655 1.49-1.826C9.946 7.895 10.75 6.953 10.75 6c0-1.12-1.142-2.25-2.853-2.25Zm-.75 9.25a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Z" />
      </svg>
    ),
  },
  {
    title: "Inspiration Hub",
    desc: "Productivity advice and Todoist tips",
    href: "/",
    icon: (
      <svg
        fill="none"
        height="18"
        viewBox="0 0 16 17"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M8 1.251a.75.75 0 0 1 .75.75v.667a.75.75 0 1 1-1.5 0v-.667a.75.75 0 0 1 .75-.75zM3.227 3.23a.75.75 0 0 1 1.06 0l.472.47A.75.75 0 0 1 3.7 4.762l-.472-.472a.75.75 0 0 1 0-1.06zm9.546 0a.75.75 0 0 1 0 1.06l-.47.472A.75.75 0 1 1 11.241 3.7l.47-.471a.75.75 0 0 1 1.062 0zM8 5.419a2.584 2.584 0 0 0-1.827 4.41l.365.364c.122.122.232.253.33.392h2.264c.099-.14.209-.27.33-.391l.365-.365A2.585 2.585 0 0 0 8 5.419zm.592 6.666H7.408c.006.076.009.153.009.23v.354a.583.583 0 0 0 1.167 0v-.354c0-.077.003-.154.008-.23zm-2.834-.443a1.5 1.5 0 0 1 .16.673v.354a2.083 2.083 0 1 0 4.166 0v-.354a1.499 1.499 0 0 1 .438-1.06l.366-.365a4.087 4.087 0 0 0 .885-4.45 4.083 4.083 0 1 0-6.66 4.45l.365.364c.114.115.208.246.28.388zM1.25 8.002a.75.75 0 0 1 .75-.75h.667a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75zm11.334 0a.75.75 0 0 1 .75-.75H14a.75.75 0 1 1 0 1.5h-.667a.75.75 0 0 1-.75-.75z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function DropdownList() {
  return (
    <div className="border rounded-xl bg-background-100 p-2">
      <ul className="flex-col">
        {NAV_LIST.map((l) => (
          <li key={l.title}>
            <Link
              href={l.href}
              className="flex items-center p-3 rounded-xl w-full justify-start gap-3 group"
            >
              <div className="rounded-md flex items-center justify-center size-8 border border-gray-alpha-400 group-hover:bg-gray-1000 group-hover:text-background-100 transition duration-200">
                <span className="size-4">{l.icon}</span>
              </div>
              <div className="flex flex-col">
                <h5>{l.title}</h5>
                <p className="text-gray-900 group-hover:text-gray-1000 text-xs transition duration-200">
                  {l.desc}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

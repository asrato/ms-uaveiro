import { IconType } from "../../types";

export const DownloadIcon = (props: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 20 20">
            <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" fill={props.color} />
            <path d="M10 15l5-6h-4V1H9v8H5l5 6z" fill={props.color} />
        </svg>
    )
}

export const LocationIcon = (props: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width={props.width} height={props.height} viewBox="0 0 395.71 395.71" xmlSpace="preserve">
            <path fill={props.color} d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
        </svg>
    )
}

export const LoadingIcon = (props: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto' }} width={props.height} height={props.height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#0a0a0a" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            <circle cx="50" cy="50" r="23" strokeWidth="8" stroke="#49494a" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
            </circle>
        </svg>
    )
}

export const LogoIcon = (props: IconType) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_8_31)">
                <path d="M97.7287 46.4164L112.034 11.5399L209.181 52.3892L108 133.243L74.0001 107.743L133.601 61.23L97.7287 46.4164Z" fill={`${props.color == null ? 'url(#paint0_linear_8_31)' : props.color}`} />
                <path d="M54.5001 149.243L71.0001 112.243L179.5 193.315L113.5 195.815L54.5001 149.243Z" fill={`${props.color == null ? 'url(#paint1_linear_8_31)' : props.color}`} />
                <path d="M39.5001 75.3147L0.00012207 167.815L28.5001 198.315L107 11.3147L11.5001 44.3147L39.5001 75.3147Z" fill={`${props.color == null ? 'url(#paint2_linear_8_31)' : props.color}`} />
            </g>
            <defs>
                <linearGradient id="paint0_linear_8_31" x1="142.186" y1="11.803" x2="141.124" y2="133.532" gradientUnits="userSpaceOnUse">
                    <stop offset="0.65625" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_8_31" x1="117" y1="112.243" x2="117" y2="195.815" gradientUnits="userSpaceOnUse">
                    <stop offset="0.65625" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_8_31" x1="53.5001" y1="11.3147" x2="53.5001" y2="198.315" gradientUnits="userSpaceOnUse">
                    <stop offset="0.65625" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_8_31">
                    <rect width="209.53" height="209.53" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const NextIcon = (props: IconType) => {
    return (
        <svg viewBox=".5 -.2 1023 1024.1" fill={props.color} width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg">
            <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
            <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
        </svg>
    )
}
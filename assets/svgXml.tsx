// symtem import
import React from "react";
import { View } from "react-native";

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import clrStyle from "./componentStyleSheet";
import styles from "./stylesheet";

// ____________________END OF IMPORT_______________________

export const searchIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_367_83)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_367_83">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const shareIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_62_4141)">
    <path d="M16.4 21.2788L11.1513 18.4162C10.466 19.1488 9.57624 19.6584 8.5976 19.8786C7.61896 20.0989 6.5967 20.0197 5.66366 19.6513C4.73063 19.2829 3.92996 18.6424 3.36572 17.8131C2.80148 16.9837 2.49976 16.0037 2.49976 15.0006C2.49976 13.9975 2.80148 13.0176 3.36572 12.1882C3.92996 11.3588 4.73063 10.7183 5.66366 10.35C6.5967 9.98159 7.61896 9.90239 8.5976 10.1226C9.57624 10.3429 10.466 10.8524 11.1513 11.585L16.4013 8.7225C16.1032 7.54259 16.2457 6.29449 16.8021 5.21213C17.3584 4.12977 18.2904 3.28748 19.4233 2.84313C20.5563 2.39878 21.8124 2.38288 22.9562 2.79842C24.1001 3.21395 25.0531 4.0324 25.6366 5.10033C26.2202 6.16826 26.3942 7.41236 26.1261 8.59943C25.858 9.7865 25.1662 10.835 24.1803 11.5485C23.1944 12.262 21.9822 12.5914 20.7708 12.475C19.5594 12.3586 18.432 11.8044 17.6 10.9162L12.35 13.7787C12.5515 14.5804 12.5515 15.4196 12.35 16.2212L17.5988 19.0837C18.4308 18.1956 19.5581 17.6414 20.7695 17.525C21.9809 17.4086 23.1932 17.738 24.1791 18.4515C25.1649 19.165 25.8568 20.2135 26.1249 21.4006C26.393 22.5876 26.219 23.8317 25.6354 24.8997C25.0518 25.9676 24.0988 26.786 22.955 27.2016C21.8112 27.6171 20.555 27.6012 19.4221 27.1569C18.2891 26.7125 17.3572 25.8702 16.8008 24.7879C16.2445 23.7055 16.102 22.4574 16.4 21.2775V21.2788ZM7.50001 17.5C8.16305 17.5 8.79894 17.2366 9.26778 16.7678C9.73662 16.2989 10 15.663 10 15C10 14.337 9.73662 13.7011 9.26778 13.2322C8.79894 12.7634 8.16305 12.5 7.50001 12.5C6.83697 12.5 6.20109 12.7634 5.73225 13.2322C5.26341 13.7011 5.00001 14.337 5.00001 15C5.00001 15.663 5.26341 16.2989 5.73225 16.7678C6.20109 17.2366 6.83697 17.5 7.50001 17.5ZM21.25 10C21.9131 10 22.5489 9.73661 23.0178 9.26777C23.4866 8.79893 23.75 8.16304 23.75 7.5C23.75 6.83696 23.4866 6.20107 23.0178 5.73223C22.5489 5.26339 21.9131 5 21.25 5C20.587 5 19.9511 5.26339 19.4822 5.73223C19.0134 6.20107 18.75 6.83696 18.75 7.5C18.75 8.16304 19.0134 8.79893 19.4822 9.26777C19.9511 9.73661 20.587 10 21.25 10ZM21.25 25C21.9131 25 22.5489 24.7366 23.0178 24.2678C23.4866 23.7989 23.75 23.163 23.75 22.5C23.75 21.837 23.4866 21.2011 23.0178 20.7322C22.5489 20.2634 21.9131 20 21.25 20C20.587 20 19.9511 20.2634 19.4822 20.7322C19.0134 21.2011 18.75 21.837 18.75 22.5C18.75 23.163 19.0134 23.7989 19.4822 24.2678C19.9511 24.7366 20.587 25 21.25 25Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_62_4141">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const fbLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" transform="translate(0.5)" fill="none"/>
<path d="M24 12.0698C24 5.71857 18.8513 0.569849 12.5 0.569849C6.14872 0.569849 1 5.71857 1 12.0698C1 17.8098 5.20538 22.5674 10.7031 23.4301V15.3941H7.7832V12.0698H10.7031V9.53626C10.7031 6.65407 12.42 5.06204 15.0468 5.06204C16.305 5.06204 17.6211 5.28665 17.6211 5.28665V8.11672H16.171C14.7424 8.11672 14.2969 9.00319 14.2969 9.91263V12.0698H17.4863L16.9765 15.3941H14.2969V23.4301C19.7946 22.5674 24 17.8098 24 12.0698Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const googleLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8283C14.8645 18.5183 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const appleLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="black"/>
<path d="M21.2806 18.424C20.9327 19.2275 20.521 19.9672 20.044 20.6472C19.3938 21.5743 18.8614 22.216 18.4511 22.5724C17.815 23.1573 17.1336 23.4568 16.4039 23.4739C15.88 23.4739 15.2482 23.3248 14.5128 23.0224C13.775 22.7214 13.0969 22.5724 12.4769 22.5724C11.8267 22.5724 11.1293 22.7214 10.3834 23.0224C9.63638 23.3248 9.03456 23.4824 8.57444 23.498C7.87466 23.5278 7.17716 23.2197 6.48093 22.5724C6.03656 22.1848 5.48075 21.5204 4.8149 20.5791C4.10051 19.5739 3.51317 18.4084 3.05304 17.0795C2.56026 15.6442 2.31323 14.2543 2.31323 12.9087C2.31323 11.3673 2.6463 10.0379 3.31342 8.92385C3.83772 8.029 4.53522 7.32312 5.4082 6.80493C6.28118 6.28674 7.22443 6.02267 8.24024 6.00578C8.79605 6.00578 9.52493 6.1777 10.4307 6.51559C11.3339 6.85462 11.9139 7.02655 12.1681 7.02655C12.3582 7.02655 13.0025 6.82552 14.0947 6.42473C15.1275 6.05305 15.9992 5.89916 16.7133 5.95978C18.6484 6.11595 20.1022 6.87876 21.069 8.25303C19.3384 9.30163 18.4823 10.7703 18.4993 12.6544C18.515 14.122 19.0474 15.3432 20.0937 16.3129C20.5679 16.7629 21.0974 17.1107 21.6866 17.3578C21.5588 17.7283 21.4239 18.0832 21.2806 18.424ZM16.8425 0.960131C16.8425 2.11039 16.4223 3.18439 15.5847 4.17847C14.5738 5.36023 13.3512 6.04311 12.0253 5.93536C12.0084 5.79736 11.9986 5.65213 11.9986 5.49951C11.9986 4.39526 12.4793 3.21349 13.333 2.24724C13.7592 1.75801 14.3013 1.35122 14.9586 1.02671C15.6145 0.707053 16.2349 0.530273 16.8184 0.5C16.8354 0.653772 16.8425 0.807554 16.8425 0.960116V0.960131Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpLeftArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4L7 12L15 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpRightArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20L17 12L9 4" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const curveRightArrow = (w: any = '100%', h: any = '100%', color: any = '#272727') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4L14.5858 10.5858C15.3668 11.3668 15.3668 12.6332 14.5858 13.4142L8 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

// search
export const xIcon = (w: any = '100%', h: any = '100%', color: any = "#808797") => {
    const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C13.9235 18 18 13.9147 18 9C18 4.07647 13.9147 0 8.99118 0C4.07647 0 0 4.07647 0 9C0 13.9147 4.08529 18 9 18ZM5.88529 12.8471C5.48823 12.8471 5.16176 12.5118 5.16176 12.1059C5.16176 11.9118 5.24118 11.7353 5.37353 11.5941L7.95882 9.00882L5.37353 6.42353C5.24118 6.28235 5.16176 6.10588 5.16176 5.91176C5.16176 5.50588 5.48823 5.18824 5.88529 5.18824C6.09706 5.18824 6.26471 5.25882 6.39706 5.4L8.99118 7.98529L11.6118 5.39118C11.7618 5.24118 11.9206 5.17059 12.1147 5.17059C12.5118 5.17059 12.8382 5.49706 12.8382 5.89412C12.8382 6.09706 12.7765 6.25588 12.6265 6.41471L10.0324 9.00882L12.6176 11.5853C12.7588 11.7353 12.8294 11.9029 12.8294 12.1059C12.8294 12.5118 12.5029 12.8471 12.0971 12.8471C11.8941 12.8471 11.7176 12.7588 11.5765 12.6265L8.99118 10.0412L6.42353 12.6265C6.28235 12.7676 6.09706 12.8471 5.88529 12.8471Z" fill=${color}/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const adjustIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12L16 12M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19L20 19M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const sharpXIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5L5 19M5.00003 5L19 19" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const editIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5" stroke="#CCCED5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const infoIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#CCCED5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const imgPickerIcon = (w: number, h: number, color?: any) => {
    const xml = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1703 43.8297C14.0573 49.2885 19.8219 51.25 30 51.25C44.0637 51.25 49.7009 47.5049 50.9632 35.9633M11.1703 43.8297C9.44809 40.5731 8.75 36.0719 8.75 30C8.75 13.75 13.75 8.75 30 8.75C46.25 8.75 51.25 13.75 51.25 30C51.25 32.1863 51.1595 34.169 50.9632 35.9633M11.1703 43.8297L18.9645 36.0355C20.9171 34.0829 24.0829 34.0829 26.0355 36.0355L26.4645 36.4645C28.4171 38.4171 31.5829 38.4171 33.5355 36.4645L38.9645 31.0355C40.9171 29.0829 44.0829 29.0829 46.0355 31.0355L50.9632 35.9633M26.7275 22.115C26.7275 24.6625 24.66 26.73 22.1125 26.73C19.5675 26.73 17.5 24.6625 17.5 22.115C17.5 19.5675 19.5675 17.5 22.1125 17.5C24.66 17.5 26.7275 19.5675 26.7275 22.115Z" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const cameraIcon = (w: number, h: number, color?: any) => {
    const xml = `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="42" height="42" rx="15" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
<circle cx="21.5" cy="21.5" r="15.5" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
<circle cx="21.5" cy="21.5" r="11.5" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const bellIcon = (w: any = '100%', h: any = '100%', color?: string) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color ? color : 'none'}" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.02 2.91003C8.70997 2.91003 6.01997 5.60003 6.01997 8.91003V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const calendar = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 2V5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 9.08997H20.5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6947 13.7H15.7037" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6947 16.7H15.7037" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9955 13.7H12.0045" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9955 16.7H12.0045" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29431 13.7H8.30329" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29431 16.7H8.30329" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const clock = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const eye = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#4E5BA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#4E5BA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const goldStar = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = ``
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const lv1 = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_117_865)">
<path d="M30.7928 43.8831L23.1721 22.9915L37.3323 5.90002L44.9486 26.796L30.7928 43.8831Z" fill="url(#paint0_linear_117_865)"/>
<path d="M30.7929 43.8831L9.01634 40.0831L1.40002 19.1915L23.1722 22.9915L30.7929 43.8831Z" fill="url(#paint1_linear_117_865)"/>
<path d="M23.1722 22.9916L1.40002 19.1915L15.5559 2.09998L37.3324 5.90005L23.1722 22.9916Z" fill="url(#paint2_linear_117_865)"/>
</g>
<g clip-path="url(#clip1_117_865)">
<path d="M28.1892 68.5999L21.7013 50.9451L33.7566 36.5015L40.2408 54.1601L28.1892 68.5999Z" fill="url(#paint3_linear_117_865)"/>
<path d="M28.1892 68.6L9.64969 65.3886L3.16553 47.7338L21.7013 50.9451L28.1892 68.6Z" fill="url(#paint4_linear_117_865)"/>
<path d="M21.7013 50.9451L3.16553 47.7338L15.2171 33.2902L33.7566 36.5016L21.7013 50.9451Z" fill="url(#paint5_linear_117_865)"/>
</g>
<g clip-path="url(#clip2_117_865)">
<path d="M55.2891 58.007L48.1833 38.5867L61.3868 22.6988L68.4885 42.1232L55.2891 58.007Z" fill="url(#paint6_linear_117_865)"/>
<path d="M55.2892 58.007L34.984 54.4746L27.8823 35.0542L48.1834 38.5867L55.2892 58.007Z" fill="url(#paint7_linear_117_865)"/>
<path d="M48.1834 38.5867L27.8823 35.0542L41.0817 19.1663L61.3868 22.6988L48.1834 38.5867Z" fill="url(#paint8_linear_117_865)"/>
</g>
<defs>
<linearGradient id="paint0_linear_117_865" x1="25.9988" y1="12.5737" x2="43.9687" y2="39.6309" gradientUnits="userSpaceOnUse">
<stop stop-color="#DCF97D"/>
<stop offset="1" stop-color="#3AB168"/>
</linearGradient>
<linearGradient id="paint1_linear_117_865" x1="29.0496" y1="49.5719" x2="2.18645" y2="12.5975" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#AA14EA"/>
</linearGradient>
<linearGradient id="paint2_linear_117_865" x1="25.0261" y1="1.40574" x2="13.646" y2="23.6193" gradientUnits="userSpaceOnUse">
<stop stop-color="#84EDF7"/>
<stop offset="1" stop-color="#9537F2"/>
</linearGradient>
<linearGradient id="paint3_linear_117_865" x1="24.1078" y1="42.1413" x2="39.2497" y2="65.1099" gradientUnits="userSpaceOnUse">
<stop stop-color="#DCF97D"/>
<stop offset="1" stop-color="#3AB168"/>
</linearGradient>
<linearGradient id="paint4_linear_117_865" x1="26.705" y1="73.4074" x2="4.05622" y2="42.0019" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#AA14EA"/>
</linearGradient>
<linearGradient id="paint5_linear_117_865" x1="23.2796" y1="32.7035" x2="13.7043" y2="51.5331" gradientUnits="userSpaceOnUse">
<stop stop-color="#84EDF7"/>
<stop offset="1" stop-color="#9537F2"/>
</linearGradient>
<linearGradient id="paint6_linear_117_865" x1="50.819" y1="28.9025" x2="67.5035" y2="54.1015" gradientUnits="userSpaceOnUse">
<stop stop-color="#DCF97D"/>
<stop offset="1" stop-color="#3AB168"/>
</linearGradient>
<linearGradient id="paint7_linear_117_865" x1="53.6637" y1="63.2952" x2="28.7161" y2="28.8518" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#AA14EA"/>
</linearGradient>
<linearGradient id="paint8_linear_117_865" x1="49.912" y1="18.521" x2="39.3523" y2="39.1964" gradientUnits="userSpaceOnUse">
<stop stop-color="#84EDF7"/>
<stop offset="1" stop-color="#9537F2"/>
</linearGradient>
<clipPath id="clip0_117_865">
<rect width="43.5487" height="41.7832" fill="white" transform="translate(1.40002 2.09998)"/>
</clipPath>
<clipPath id="clip1_117_865">
<rect width="37.0752" height="35.3097" fill="white" transform="translate(3.16553 33.2902)"/>
</clipPath>
<clipPath id="clip2_117_865">
<rect width="40.6062" height="38.8407" fill="white" transform="translate(27.8823 19.1663)"/>
</clipPath>
</defs>
</svg>
`
    return <SvgXml xml={xml} width={w} height={h} />
}

export const lv2 = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_117_308)">
<path d="M30.7928 43.8831L23.1721 22.9915L37.3323 5.90002L44.9486 26.796L30.7928 43.8831Z" fill="url(#paint0_linear_117_308)"/>
<path d="M30.7929 43.8831L9.01634 40.0831L1.40002 19.1915L23.1722 22.9915L30.7929 43.8831Z" fill="url(#paint1_linear_117_308)"/>
<path d="M23.1722 22.9916L1.40002 19.1915L15.5559 2.09998L37.3324 5.90005L23.1722 22.9916Z" fill="url(#paint2_linear_117_308)"/>
</g>
<g clip-path="url(#clip1_117_308)">
<path d="M28.1892 68.5999L21.7013 50.9451L33.7566 36.5015L40.2408 54.1601L28.1892 68.5999Z" fill="url(#paint3_linear_117_308)"/>
<path d="M28.1892 68.6L9.64969 65.3886L3.16553 47.7338L21.7013 50.9451L28.1892 68.6Z" fill="url(#paint4_linear_117_308)"/>
<path d="M21.7013 50.9451L3.16553 47.7338L15.2171 33.2902L33.7566 36.5016L21.7013 50.9451Z" fill="url(#paint5_linear_117_308)"/>
</g>
<g clip-path="url(#clip2_117_308)">
<path d="M55.2891 58.007L48.1833 38.5867L61.3868 22.6988L68.4885 42.1232L55.2891 58.007Z" fill="url(#paint6_linear_117_308)"/>
<path d="M55.2892 58.007L34.984 54.4746L27.8823 35.0542L48.1834 38.5867L55.2892 58.007Z" fill="url(#paint7_linear_117_308)"/>
<path d="M48.1834 38.5867L27.8823 35.0542L41.0817 19.1663L61.3868 22.6988L48.1834 38.5867Z" fill="url(#paint8_linear_117_308)"/>
</g>
<defs>
<linearGradient id="paint0_linear_117_308" x1="25.9988" y1="12.5737" x2="43.9687" y2="39.6309" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDAE24"/>
<stop offset="1" stop-color="#EA33A7"/>
</linearGradient>
<linearGradient id="paint1_linear_117_308" x1="29.0496" y1="49.5719" x2="2.18645" y2="12.5975" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#4914EA"/>
</linearGradient>
<linearGradient id="paint2_linear_117_308" x1="25.0261" y1="1.40574" x2="13.646" y2="23.6193" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#4914EA"/>
</linearGradient>
<linearGradient id="paint3_linear_117_308" x1="24.1078" y1="42.1413" x2="39.2497" y2="65.1099" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDAE24"/>
<stop offset="1" stop-color="#EA33A7"/>
</linearGradient>
<linearGradient id="paint4_linear_117_308" x1="26.705" y1="73.4074" x2="4.05622" y2="42.0019" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#4914EA"/>
</linearGradient>
<linearGradient id="paint5_linear_117_308" x1="23.2796" y1="32.7035" x2="13.7043" y2="51.5331" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#4914EA"/>
</linearGradient>
<linearGradient id="paint6_linear_117_308" x1="50.819" y1="28.9025" x2="67.5035" y2="54.1015" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDAE24"/>
<stop offset="1" stop-color="#EA33A7"/>
</linearGradient>
<linearGradient id="paint7_linear_117_308" x1="53.6637" y1="63.2952" x2="28.7161" y2="28.8518" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#4914EA"/>
</linearGradient>
<linearGradient id="paint8_linear_117_308" x1="49.912" y1="18.521" x2="39.3523" y2="39.1964" gradientUnits="userSpaceOnUse">
<stop stop-color="#4DB1E0"/>
<stop offset="1" stop-color="#4914EA"/>
</linearGradient>
<clipPath id="clip0_117_308">
<rect width="43.5487" height="41.7832" fill="white" transform="translate(1.40002 2.09998)"/>
</clipPath>
<clipPath id="clip1_117_308">
<rect width="37.0752" height="35.3097" fill="white" transform="translate(3.16553 33.2902)"/>
</clipPath>
<clipPath id="clip2_117_308">
<rect width="40.6062" height="38.8407" fill="white" transform="translate(27.8823 19.1663)"/>
</clipPath>
</defs>
</svg>
`
    return <SvgXml xml={xml} width={w} height={h} />
}

export const lv3 = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_117_913)">
<path d="M30.7928 43.8831L23.1721 22.9915L37.3323 5.90002L44.9486 26.796L30.7928 43.8831Z" fill="url(#paint0_linear_117_913)"/>
<path d="M30.7929 43.8831L9.01634 40.0831L1.40002 19.1915L23.1722 22.9915L30.7929 43.8831Z" fill="url(#paint1_linear_117_913)"/>
<path d="M23.1722 22.9916L1.40002 19.1915L15.5559 2.09998L37.3324 5.90005L23.1722 22.9916Z" fill="url(#paint2_linear_117_913)"/>
</g>
<g clip-path="url(#clip1_117_913)">
<path d="M28.1892 68.5999L21.7013 50.9451L33.7566 36.5015L40.2408 54.1601L28.1892 68.5999Z" fill="url(#paint3_linear_117_913)"/>
<path d="M28.1892 68.6L9.64969 65.3886L3.16553 47.7338L21.7013 50.9451L28.1892 68.6Z" fill="url(#paint4_linear_117_913)"/>
<path d="M21.7013 50.9451L3.16553 47.7338L15.2171 33.2902L33.7566 36.5016L21.7013 50.9451Z" fill="url(#paint5_linear_117_913)"/>
</g>
<g clip-path="url(#clip2_117_913)">
<path d="M55.2891 58.007L48.1833 38.5867L61.3868 22.6988L68.4885 42.1232L55.2891 58.007Z" fill="url(#paint6_linear_117_913)"/>
<path d="M55.2892 58.007L34.984 54.4746L27.8823 35.0542L48.1834 38.5867L55.2892 58.007Z" fill="url(#paint7_linear_117_913)"/>
<path d="M48.1834 38.5867L27.8823 35.0542L41.0817 19.1663L61.3868 22.6988L48.1834 38.5867Z" fill="url(#paint8_linear_117_913)"/>
</g>
<defs>
<linearGradient id="paint0_linear_117_913" x1="25.9988" y1="12.5737" x2="43.9687" y2="39.6309" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9AAAA"/>
<stop offset="1" stop-color="#B13AAB"/>
</linearGradient>
<linearGradient id="paint1_linear_117_913" x1="29.0496" y1="49.5719" x2="2.18645" y2="12.5975" gradientUnits="userSpaceOnUse">
<stop stop-color="#A98FE4"/>
<stop offset="1" stop-color="#6A12A1"/>
</linearGradient>
<linearGradient id="paint2_linear_117_913" x1="25.0261" y1="1.40574" x2="13.646" y2="23.6193" gradientUnits="userSpaceOnUse">
<stop stop-color="#E684F7"/>
<stop offset="1" stop-color="#6023E4"/>
</linearGradient>
<linearGradient id="paint3_linear_117_913" x1="24.1078" y1="42.1413" x2="39.2497" y2="65.1099" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9AAAA"/>
<stop offset="1" stop-color="#B13AAB"/>
</linearGradient>
<linearGradient id="paint4_linear_117_913" x1="26.705" y1="73.4074" x2="4.05622" y2="42.0019" gradientUnits="userSpaceOnUse">
<stop stop-color="#A98FE4"/>
<stop offset="1" stop-color="#6A12A1"/>
</linearGradient>
<linearGradient id="paint5_linear_117_913" x1="23.2796" y1="32.7035" x2="13.7043" y2="51.5331" gradientUnits="userSpaceOnUse">
<stop stop-color="#E684F7"/>
<stop offset="1" stop-color="#6023E4"/>
</linearGradient>
<linearGradient id="paint6_linear_117_913" x1="50.819" y1="28.9025" x2="67.5035" y2="54.1015" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9AAAA"/>
<stop offset="1" stop-color="#B13AAB"/>
</linearGradient>
<linearGradient id="paint7_linear_117_913" x1="53.6637" y1="63.2952" x2="28.7161" y2="28.8518" gradientUnits="userSpaceOnUse">
<stop stop-color="#A98FE4"/>
<stop offset="1" stop-color="#6A12A1"/>
</linearGradient>
<linearGradient id="paint8_linear_117_913" x1="49.912" y1="18.521" x2="39.3523" y2="39.1964" gradientUnits="userSpaceOnUse">
<stop stop-color="#E684F7"/>
<stop offset="1" stop-color="#6023E4"/>
</linearGradient>
<clipPath id="clip0_117_913">
<rect width="43.5487" height="41.7832" fill="white" transform="translate(1.40002 2.09998)"/>
</clipPath>
<clipPath id="clip1_117_913">
<rect width="37.0752" height="35.3097" fill="white" transform="translate(3.16553 33.2902)"/>
</clipPath>
<clipPath id="clip2_117_913">
<rect width="40.6062" height="38.8407" fill="white" transform="translate(27.8823 19.1663)"/>
</clipPath>
</defs>
</svg>
`
    return <SvgXml xml={xml} width={w} height={h} />
}

export const best1st = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9967 14.73L14.9867 23.68C13.6367 22.71 7.28668 16 12.4167 8.37001L12.7367 7.90001L13.2567 7.61001C14.0867 7.15001 15.7567 6.98001 16.8367 7.48001C15.2567 10.04 15.9167 11.17 17.6467 12.17L21.2967 14.28L20.9967 14.73ZM13.7167 10.95C14.0067 12.12 14.8167 13.15 16.1167 13.9L18.5467 15.3L15.1667 20.33C12.7767 17.2 12.2867 14.22 13.7167 10.95Z" fill="#BC7800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0768 19.97L25.3368 29.65C26.8568 30.34 35.8368 32.48 39.8868 24.22L40.1368 23.71V23.11C40.1068 22.16 39.4268 20.62 38.4468 19.94C37.0168 22.58 35.7068 22.58 33.9768 21.58L30.3268 19.47L30.0868 19.96L30.0768 19.97ZM36.9868 24.38C35.8268 24.71 34.5368 24.53 33.2368 23.78L30.8068 22.38L28.1368 27.82C32.0468 28.32 34.8668 27.26 36.9868 24.38Z" fill="#BC7800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9967 14.73L14.9867 23.68C13.6367 22.71 7.28668 16 12.4167 8.36996L12.7367 7.89996C13.5867 7.62996 14.7967 7.53996 15.9267 8.06996C14.9267 9.81996 15.2867 11.44 17.0867 12.48L21.0067 14.74L20.9967 14.73ZM18.5467 15.3L16.1167 13.9C14.3667 12.89 13.5067 11.37 13.6067 9.68996C12.0167 12.32 11.7967 15.08 12.9267 17.88C13.3667 18.96 13.9867 20 14.7167 20.92C14.7167 20.93 14.7367 20.94 14.7467 20.95L18.5467 15.3Z" fill="url(#paint0_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9967 14.73L21.2967 14.28L17.6467 12.17C15.9167 11.17 15.2567 10.04 16.8367 7.47998L15.9167 8.05998C14.9167 9.80998 15.2767 11.43 17.0767 12.47L20.9967 14.73Z" fill="url(#paint1_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7167 10.95C13.6167 10.54 13.5767 10.12 13.6067 9.69C12.0167 12.32 11.7967 15.08 12.9267 17.88C13.3767 18.98 13.9967 20.02 14.7467 20.95L15.1667 20.33C12.7767 17.2 12.2867 14.22 13.7167 10.95Z" fill="url(#paint2_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7268 7.89002C13.5768 7.62002 14.7868 7.53002 15.9168 8.06002L16.8368 7.48002C15.7568 6.97002 14.0868 7.15002 13.2568 7.61002L12.7368 7.90002L12.7268 7.89002Z" fill="url(#paint3_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0768 19.97L25.3368 29.65C26.8568 30.34 35.8368 32.48 39.8868 24.22L40.1368 23.71C39.9368 22.84 39.4168 21.74 38.3968 21.03C37.3868 22.77 35.7968 23.27 33.9968 22.23L30.0768 19.97ZM30.8068 22.38L33.2368 23.78C34.9868 24.79 36.7368 24.78 38.1368 23.85C36.6568 26.55 34.3768 28.11 31.3768 28.53C30.2168 28.69 29.0168 28.67 27.8468 28.5C27.8368 28.5 27.8168 28.5 27.8068 28.5L30.8068 22.38Z" fill="url(#paint4_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0768 19.97L30.3168 19.48L33.9668 21.59C35.6968 22.59 37.0068 22.59 38.4368 19.95L38.3968 21.04C37.3868 22.78 35.7968 23.28 33.9968 22.24L30.0768 19.98V19.97Z" fill="url(#paint5_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.9868 24.38C37.3868 24.26 37.7767 24.09 38.1367 23.85C36.6567 26.55 34.3768 28.11 31.3768 28.53C30.1968 28.7 28.9868 28.67 27.8068 28.49L28.1367 27.82C32.0467 28.32 34.8668 27.26 36.9868 24.38Z" fill="url(#paint6_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1367 38.72L20.0067 40.67C19.4467 41.64 16.3167 40.89 13.0267 38.99C9.73673 37.09 7.52674 34.76 8.08674 33.79L9.21673 31.84L21.1267 38.72H21.1367Z" fill="url(#paint7_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1367 38.72C20.5767 39.69 17.4467 38.94 14.1567 37.04C10.8667 35.14 8.65675 32.81 9.21675 31.84C10.2567 30.04 11.9968 30.57 14.1168 30.7C15.0768 30.76 16.0068 30.56 16.5368 29.64L17.1768 28.54L18.5968 29.36L20.0167 30.18L19.3767 31.28C18.8468 32.2 19.1367 33.11 19.6667 33.91C20.8367 35.68 22.1667 36.93 21.1267 38.72H21.1367Z" fill="url(#paint8_linear_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M9.85671 32.2C10.8967 30.4 12.4767 30.84 14.4167 30.87C15.2967 30.88 16.1667 30.64 16.6967 29.73C16.9067 29.36 17.1167 29 17.3367 28.63L17.1867 28.54L16.5467 29.64C16.0167 30.56 15.0867 30.76 14.1267 30.7C12.0067 30.57 10.2667 30.04 9.22672 31.84C9.06672 32.12 9.13672 32.52 9.39672 32.99C9.54672 32.73 9.69671 32.46 9.85671 32.2Z" fill="url(#paint9_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M19.2468 33.66C20.1668 35.29 21.2568 36.39 20.2168 38.19C20.0368 38.5 19.8568 38.82 19.6768 39.13C20.4168 39.19 20.9368 39.06 21.1368 38.72C22.1768 36.92 20.8468 35.68 19.6768 33.91C19.1468 33.11 18.8568 32.2 19.3868 31.28L20.0268 30.18L19.8068 30.05C19.5968 30.42 19.3868 30.78 19.1668 31.15C18.6368 32.07 18.8368 32.92 19.2468 33.66Z" fill="url(#paint10_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19.4368 37.73C20.4768 35.93 19.5868 34.94 18.8868 33.44C18.5668 32.76 18.4568 31.96 18.9868 31.04C19.1968 30.67 19.4068 30.31 19.6268 29.94L19.2168 29.71C19.0068 30.08 18.7968 30.44 18.5768 30.81C18.0468 31.73 17.9868 32.44 18.0968 32.99C18.3268 34.22 18.7768 34.96 17.7368 36.75C17.4268 37.28 17.1268 37.81 16.8168 38.34C17.5068 38.62 18.1568 38.83 18.7268 38.96C18.9668 38.55 19.1968 38.14 19.4368 37.73Z" fill="url(#paint11_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M13.9867 34.59C15.0267 32.79 15.5367 32.61 16.3367 31.98C16.6967 31.7 17.1367 31.21 17.6767 30.29C17.8867 29.92 18.0967 29.56 18.3167 29.19L17.7467 28.86C17.5367 29.23 17.3267 29.59 17.1067 29.96C16.5767 30.88 15.8867 31.22 15.2267 31.34C13.7667 31.59 12.6367 31.42 11.5967 33.21C11.3267 33.68 11.0567 34.15 10.7867 34.62C11.3867 35.17 12.1367 35.75 12.9867 36.31C13.3167 35.73 13.6467 35.16 13.9867 34.58V34.59Z" fill="url(#paint12_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.22672 31.84L8.09672 33.79C7.93672 34.07 8.00672 34.47 8.26672 34.94L9.39672 32.99C9.13672 32.52 9.05672 32.12 9.22672 31.84Z" fill="url(#paint13_linear_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19.6768 39.13L18.5468 41.08C19.2868 41.14 19.8068 41.01 20.0068 40.67L21.1367 38.72C20.9367 39.07 20.4168 39.19 19.6768 39.13Z" fill="url(#paint14_linear_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M11.8668 38.27L12.9967 36.32C12.1467 35.76 11.3968 35.18 10.7968 34.63L9.66675 36.58C10.2667 37.13 11.0168 37.71 11.8668 38.27Z" fill="url(#paint15_linear_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M30.0768 19.97L25.3368 29.65C25.7268 29.83 26.5968 30.1 27.7568 30.26C28.7768 29.81 29.7668 29.24 30.6868 28.6C29.7468 28.67 28.7868 28.63 27.8568 28.49C27.8468 28.49 27.8268 28.49 27.8168 28.49L30.8168 22.37L33.2468 23.77C33.8968 24.15 34.5468 24.38 35.1768 24.48C35.2768 24.36 35.3668 24.24 35.4668 24.13L36.6668 22.62C35.8768 22.9 34.9768 22.79 34.0068 22.23L30.0868 19.97H30.0768Z" fill="url(#paint16_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M16.8168 38.34L15.6868 40.29C16.3768 40.57 17.0268 40.78 17.5968 40.91L18.7268 38.96C18.1568 38.83 17.5068 38.62 16.8168 38.34Z" fill="url(#paint17_linear_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M19.5567 30.98C19.4267 31.21 18.7167 30.97 17.9767 30.44C17.2367 29.91 16.7467 29.29 16.8767 29.05L17.2867 28.34L19.9667 30.27L19.5567 30.98Z" fill="url(#paint18_radial_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5767 10.46L26.5267 15.63L35.4767 20.8L33.7167 23.14C30.2167 27.77 23.6067 33.17 18.2067 30.06C12.8167 26.95 14.1867 18.52 16.4467 13.17L17.5867 10.47L17.5767 10.46Z" fill="url(#paint19_linear_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M17.9267 10.66L25.1567 14.83L32.3867 19L30.9067 21.07C27.9767 25.17 22.4767 30.03 18.1267 27.51C13.7767 25 15.0267 17.69 16.9567 13.02L17.9367 10.66H17.9267Z" fill="url(#paint20_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M18.4768 10.98L23.9968 14.17L29.5168 17.36L28.2868 19.12C25.8368 22.61 21.3568 26.81 18.0368 24.89C14.7168 22.97 15.9568 16.9 17.6368 12.97L18.4868 10.99L18.4768 10.98Z" fill="url(#paint21_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M18.2067 30.04C13.3867 27.26 15.0267 18.99 17.3567 13.68C17.7467 12.79 18.1367 11.9 18.5267 11L17.5867 10.46L16.4467 13.16C14.1867 18.51 12.8167 26.93 18.2067 30.05V30.04Z" fill="url(#paint22_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M32.5568 22.46C29.1368 27.14 22.8768 32.74 18.2068 30.04C23.5968 33.15 30.2168 27.76 33.7168 23.12L35.4768 20.78L34.2868 20.09C33.7168 20.88 33.1368 21.66 32.5668 22.45L32.5568 22.46Z" fill="url(#paint23_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M18.2068 30.04C22.0568 32.26 27.9268 26.43 31.2468 21.7C31.8068 20.9 32.3668 20.11 32.9268 19.31L30.3668 17.83C29.8368 18.64 29.3068 19.46 28.7768 20.27C25.6268 25.11 20.5168 31.37 18.2068 30.04Z" fill="url(#paint24_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M18.2067 30.04C17.1267 29.42 20.5967 22.2 23.3467 17.14C23.8067 16.29 24.2767 15.44 24.7367 14.59L21.1567 12.52C20.7367 13.39 20.3167 14.27 19.8867 15.14C17.3767 20.34 14.9567 28.17 18.1967 30.03L18.2067 30.04Z" fill="url(#paint25_radial_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8968 18.45C20.6568 16 17.6068 13.05 17.2668 11.24C17.0868 10.29 18.2868 8.43997 18.8068 7.52997L28.1068 12.9L37.4068 18.27C36.8668 19.21 35.8768 21.14 34.9668 21.46C33.2268 22.07 29.1468 20.9 24.9068 18.45H24.8968Z" fill="url(#paint26_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M23.9967 17.59C20.5167 15.4 18.0267 12.8 17.7567 11.25C17.6167 10.43 18.6167 8.89 19.0567 8.12L26.6867 12.93L34.3167 17.74C33.8667 18.53 33.0367 20.15 32.2767 20.4C30.8367 20.88 27.4767 19.78 23.9967 17.59Z" fill="url(#paint27_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M23.0468 16.52C20.3268 14.64 18.3868 12.46 18.1968 11.18C18.0968 10.51 18.8968 9.26997 19.2468 8.65997L25.1968 12.78L31.1468 16.9C30.7868 17.53 30.1168 18.83 29.5168 19.02C28.3868 19.37 25.7568 18.39 23.0368 16.51L23.0468 16.52Z" fill="url(#paint28_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M37.3968 18.27C37.0468 18.87 36.1368 19.08 34.8468 18.96L34.1668 20.04L33.1968 21.59C33.9168 21.66 34.5068 21.62 34.9568 21.46C34.9568 21.46 34.9668 21.46 34.9768 21.46C35.8868 21.12 36.8568 19.21 37.3968 18.28V18.27Z" fill="url(#paint29_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M18.6367 11.07L19.2967 9.80999C18.7167 8.91999 18.5067 8.14999 18.7667 7.60999C18.2267 8.52999 17.1067 10.29 17.2667 11.22C17.2667 11.22 17.2667 11.23 17.2667 11.24C17.2967 11.42 17.3667 11.61 17.4467 11.82C17.5367 12.04 17.6667 12.27 17.8167 12.51C17.8167 12.52 17.8367 12.54 17.8467 12.55L18.6367 11.06V11.07Z" fill="url(#paint30_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.65" fill-rule="evenodd" clip-rule="evenodd" d="M30.2267 17.76L28.7367 20.35C29.4867 20.66 30.2067 20.91 30.8767 21.11C31.1067 21.18 31.3267 21.24 31.5367 21.29L32.7367 19.21L33.0767 18.62C32.2167 18.4 31.2767 18.08 30.2767 17.67L30.2267 17.76Z" fill="url(#paint31_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M24.7467 14.73C23.5167 13.92 22.4367 13.09 21.5267 12.28L19.9867 14.95C20.8867 15.76 21.9767 16.6 23.2067 17.41L24.7567 14.73H24.7467Z" fill="url(#paint32_radial_23_1445)"/>
<g style="mix-blend-mode:screen" opacity="0.75">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6867 10.07C34.7667 13 38.1267 16.7 37.1867 18.32C36.2467 19.94 31.3767 18.88 26.2967 15.95C21.2167 13.02 17.8567 9.32001 18.7967 7.70001C19.7367 6.08001 24.6067 7.14 29.6867 10.08V10.07Z" fill="#FFFCE4"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.7568 10.03C34.8868 12.99 38.3068 16.68 37.3968 18.27C36.4768 19.86 31.5768 18.74 26.4468 15.77C21.3168 12.81 17.8968 9.11999 18.8068 7.52999C19.7268 5.93999 24.6268 7.05999 29.7568 10.03Z" fill="url(#paint33_radial_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6367 10.24C34.4567 13.02 37.6967 16.43 36.8667 17.86C36.0467 19.29 31.4667 18.19 26.6567 15.41C21.8367 12.63 18.5967 9.21998 19.4267 7.78998C20.2467 6.35998 24.8267 7.45998 29.6367 10.24Z" fill="url(#paint34_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M28.0167 9.62999C31.5767 11.69 34.0367 14.44 34.4467 16.56C34.5667 17.2 34.5067 17.78 34.2267 18.27C34.2067 18.31 34.1767 18.35 34.1567 18.38C35.4867 18.59 36.4467 18.46 36.8267 17.93C36.8467 17.9 36.8667 17.88 36.8767 17.85C37.6967 16.42 34.4667 13.01 29.6467 10.23C25.6167 7.90999 21.7667 6.75999 20.1267 7.26999C22.2167 7.13999 25.1367 7.94999 28.0267 9.61999L28.0167 9.62999Z" fill="url(#paint35_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M30.5867 17.33C30.8067 16.2 29.9967 14.65 28.4767 13.12C27.4867 12.12 26.1967 11.12 24.6867 10.26C23.1867 9.39 21.6767 8.77 20.3167 8.41C19.9667 8.32 19.6267 8.24 19.2967 8.19C19.1567 9.78 22.2367 12.86 26.6567 15.41C28.0167 16.19 29.3467 16.84 30.5867 17.34V17.33Z" fill="url(#paint36_radial_23_1445)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M13.0768 32.46C13.9868 33.12 14.5468 33.96 14.3368 34.33C14.1268 34.7 13.2168 34.46 12.3068 33.8C11.3968 33.14 10.8368 32.3 11.0468 31.93C11.2568 31.56 12.1668 31.8 13.0768 32.46Z" fill="url(#paint37_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.9267 8.60999C13.4667 8.12999 15.0767 8.38999 15.2167 8.94999C15.3067 9.28999 15.1567 9.91998 15.4867 10.68C15.2267 9.88998 15.3767 8.98999 15.9067 8.04999C14.7867 7.51999 13.5767 7.61999 12.7167 7.87999L12.3967 8.34998C10.8367 10.68 10.3367 12.92 10.4367 14.94C10.4867 12.43 11.9767 9.40998 12.9067 8.59998L12.9267 8.60999Z" fill="url(#paint38_radial_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M15.4268 7.59997C14.3968 7.51997 13.8068 7.56997 13.0568 7.79997C13.8768 7.60997 14.9267 7.58997 15.9167 8.04997L16.8368 7.46997C16.5768 7.34997 16.2768 7.25997 15.9568 7.21997C16.0568 7.30997 16.1268 7.46997 15.9768 7.54997C15.8268 7.62997 15.5168 7.60997 15.4268 7.59997Z" fill="url(#paint39_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14.4367 19.28C14.4467 19.51 14.3867 19.76 14.0667 19.5C12.3567 18.08 11.9167 14.36 12.5667 12.45C12.6167 12.29 12.8667 11.59 13.0967 11.68C13.2367 11.74 13.2667 11.96 13.2767 12.15C13.3967 11.76 13.5467 11.36 13.7167 10.96C13.6167 10.55 13.5767 10.13 13.6067 9.70001C12.0167 12.33 11.7967 15.09 12.9267 17.89C13.2367 18.66 13.6367 19.4 14.1167 20.1C14.2467 20.29 14.3867 20.49 14.5267 20.67C14.5567 20.32 14.5967 19.96 14.6467 19.6C14.5767 19.49 14.5067 19.39 14.4367 19.28Z" fill="url(#paint40_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M29.4068 27.93C29.1968 28.03 29.0168 28.22 29.4068 28.36C31.4868 29.13 34.9368 27.65 36.2668 26.13C36.3768 26 36.8668 25.43 36.6768 25.29C36.5568 25.19 36.3468 25.28 36.1868 25.37C36.4668 25.07 36.7367 24.74 36.9967 24.39C37.3967 24.27 37.7868 24.1 38.1468 23.86C36.6668 26.56 34.3867 28.12 31.3867 28.54C30.5667 28.66 29.7168 28.68 28.8768 28.62C28.6468 28.6 28.4068 28.58 28.1768 28.55C28.4668 28.35 28.7568 28.13 29.0368 27.91C29.1668 27.91 29.2867 27.93 29.4167 27.93H29.4068Z" fill="url(#paint41_radial_23_1445)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M35.2267 22.13C35.0267 22.08 34.8267 22.01 34.6167 21.92L34.2667 22.38C35.1267 22.81 35.9367 22.88 36.6467 22.62C36.4667 22.68 35.1767 22.7 35.0767 22.33C35.0567 22.24 35.1267 22.17 35.2167 22.13H35.2267Z" fill="url(#paint42_linear_23_1445)"/>
<path style="mix-blend-mode:multiply" opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M16.5468 11.34C16.6868 11.49 16.8468 11.63 17.0368 11.76L16.8168 12.29C16.0168 11.76 15.5567 11.09 15.4167 10.35C15.4567 10.53 16.0768 11.67 16.4568 11.56C16.5468 11.53 16.5668 11.44 16.5568 11.34H16.5468Z" fill="url(#paint43_linear_23_1445)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.1267 23.71C39.9267 22.84 39.4067 21.74 38.3867 21.03L38.4267 19.94C39.4067 20.62 40.0867 22.16 40.1067 23.11V23.71H40.1167H40.1267Z" fill="url(#paint44_linear_23_1445)"/>
<path style="mix-blend-mode:screen" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M39.0267 21.23C39.6067 22.08 39.8667 22.62 40.0367 23.38C39.7867 22.57 39.2767 21.66 38.3867 21.03L38.4267 19.94C38.6667 20.11 38.8867 20.33 39.0867 20.57C38.9567 20.53 38.7867 20.55 38.7867 20.72C38.7867 20.89 38.9667 21.15 39.0167 21.23H39.0267Z" fill="url(#paint45_radial_23_1445)"/>
<path style="mix-blend-mode:screen" d="M15.3768 10.38C16.5863 10.38 17.5668 9.39951 17.5668 8.19C17.5668 6.9805 16.5863 6 15.3768 6C14.1673 6 13.1868 6.9805 13.1868 8.19C13.1868 9.39951 14.1673 10.38 15.3768 10.38Z" fill="url(#paint46_radial_23_1445)"/>
<defs>
<linearGradient id="paint0_linear_23_1445" x1="11.1567" y1="7.01996" x2="18.7867" y2="21.85" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCC00"/>
<stop offset="1" stop-color="#B36600"/>
</linearGradient>
<linearGradient id="paint1_linear_23_1445" x1="17.6867" y1="7.37998" x2="18.3567" y2="12.31" gradientUnits="userSpaceOnUse">
<stop stop-color="#DB7D00"/>
<stop offset="1" stop-color="#914900"/>
</linearGradient>
<linearGradient id="paint2_linear_23_1445" x1="12.4967" y1="9.89" x2="14.2567" y2="20.67" gradientUnits="userSpaceOnUse">
<stop stop-color="#C77000"/>
<stop offset="0.4" stop-color="#CC8B00"/>
<stop offset="1" stop-color="#BA5E00"/>
</linearGradient>
<linearGradient id="paint3_linear_23_1445" x1="12.7268" y1="7.61002" x2="16.8368" y2="7.61002" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCC00"/>
<stop offset="1" stop-color="#B36600"/>
</linearGradient>
<linearGradient id="paint4_linear_23_1445" x1="25.1468" y1="26.95" x2="54.8968" y2="17.87" gradientUnits="userSpaceOnUse">
<stop stop-color="#B35100"/>
<stop offset="1" stop-color="#FFCC00"/>
</linearGradient>
<linearGradient id="paint5_linear_23_1445" x1="33.8168" y1="20.91" x2="38.0068" y2="19.18" gradientUnits="userSpaceOnUse">
<stop stop-color="#8A4500"/>
<stop offset="1" stop-color="#B86800"/>
</linearGradient>
<linearGradient id="paint6_linear_23_1445" x1="28.1468" y1="29.12" x2="38.3168" y2="24.56" gradientUnits="userSpaceOnUse">
<stop stop-color="#C75A00"/>
<stop offset="0.4" stop-color="#BF6D00"/>
<stop offset="1" stop-color="#914900"/>
</linearGradient>
<linearGradient id="paint7_linear_23_1445" x1="8.15674" y1="33.69" x2="20.0667" y2="40.57" gradientUnits="userSpaceOnUse">
<stop stop-color="#781916"/>
<stop offset="0.31" stop-color="#963333"/>
<stop offset="1" stop-color="#450E0E"/>
</linearGradient>
<linearGradient id="paint8_linear_23_1445" x1="10.4267" y1="29.76" x2="22.3368" y2="36.64" gradientUnits="userSpaceOnUse">
<stop offset="0.05" stop-color="#ED9500"/>
<stop offset="0.4" stop-color="#FFCC00"/>
<stop offset="0.93" stop-color="#B36600"/>
</linearGradient>
<radialGradient id="paint9_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.4967 34.2) scale(7.7 7.69999)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#E08F48"/>
</radialGradient>
<radialGradient id="paint10_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9768 38.28) scale(8.04001 8.04)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#E08F48"/>
</radialGradient>
<radialGradient id="paint11_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.6468 35.05) scale(5.55999 5.56)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint12_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.4467 31.68) scale(5.56 5.56)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<linearGradient id="paint13_linear_23_1445" x1="8.43672" y1="33.21" x2="9.05672" y2="33.57" gradientUnits="userSpaceOnUse">
<stop stop-color="#616DBE"/>
<stop offset="0.6" stop-color="#C2C7E6"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint14_linear_23_1445" x1="19.3868" y1="39.63" x2="20.3067" y2="40.16" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.4" stop-color="#C2C7E6"/>
<stop offset="1" stop-color="#616DBE"/>
</linearGradient>
<linearGradient id="paint15_linear_23_1445" x1="10.1367" y1="35.76" x2="12.5267" y2="37.13" gradientUnits="userSpaceOnUse">
<stop stop-color="#AB665D"/>
<stop offset="1" stop-color="#2B2321"/>
</linearGradient>
<radialGradient id="paint16_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.8968 20.37) scale(10.94 10.94)">
<stop stop-color="#E08F48"/>
<stop offset="1" stop-color="white"/>
</radialGradient>
<linearGradient id="paint17_linear_23_1445" x1="16.3568" y1="39.14" x2="18.0568" y2="40.12" gradientUnits="userSpaceOnUse">
<stop stop-color="#AB665D"/>
<stop offset="1" stop-color="#2B2321"/>
</linearGradient>
<radialGradient id="paint18_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.2267 28.77) scale(4.70999 4.71)">
<stop stop-color="#FFA163"/>
<stop offset="1" stop-color="white"/>
</radialGradient>
<linearGradient id="paint19_linear_23_1445" x1="13.4167" y1="17.67" x2="31.3167" y2="28" gradientUnits="userSpaceOnUse">
<stop offset="0.05" stop-color="#ED9500"/>
<stop offset="0.4" stop-color="#FFCC00"/>
<stop offset="1" stop-color="#D96D00"/>
</linearGradient>
<radialGradient id="paint20_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.5067 13.49) scale(17.07 17.07)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint21_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.7268 11.86) scale(13.61 13.61)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint22_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.6067 19.8) scale(14.36 14.36)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#E08F48"/>
</radialGradient>
<radialGradient id="paint23_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0268 21.14) scale(12.42 12.42)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#E08F48"/>
</radialGradient>
<radialGradient id="paint24_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.4268 14.18) scale(16.3 16.3)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint25_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.5467 13.11) scale(17.19 17.19)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint26_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.2068 13.94) scale(16.9)">
<stop stop-color="#FFCC00"/>
<stop offset="1" stop-color="#ED9500"/>
</radialGradient>
<radialGradient id="paint27_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.3667 4.75) scale(16.48)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint28_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.8368 7.52997) scale(11.67 11.67)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint29_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.2168 17.79) scale(7.03 7.03001)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFA163"/>
</radialGradient>
<radialGradient id="paint30_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.9967 12.19) scale(7.18 7.18)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFA163"/>
</radialGradient>
<radialGradient id="paint31_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.5367 16.14) scale(6.65999 6.65999)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint32_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.2867 11.61) scale(8.80001 8.8)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint33_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.6868 11.11) scale(24.53 24.53)">
<stop stop-color="#FCF80D"/>
<stop offset="1" stop-color="#FC9C0D"/>
</radialGradient>
<radialGradient id="paint34_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.8167 8.32998) scale(12.76 12.76)">
<stop stop-color="#FCF80D"/>
<stop offset="1" stop-color="#F78A0C"/>
</radialGradient>
<radialGradient id="paint35_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.5567 18.06) scale(16.3 16.3)">
<stop/>
<stop offset="0.15" stop-color="#201F0D"/>
<stop offset="0.48" stop-color="#736E2F"/>
<stop offset="0.97" stop-color="#F6EB65"/>
<stop offset="1" stop-color="#FFF369"/>
</radialGradient>
<radialGradient id="paint36_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.3567 17.97) scale(14.5 14.5)">
<stop stop-color="#E08F48"/>
<stop offset="1" stop-color="white"/>
</radialGradient>
<radialGradient id="paint37_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.2368 31.25) scale(4.83001 4.82999)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint38_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.2867 6.00999) scale(10.75 10.75)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint39_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.2868 6.48997) scale(3.74 3.74001)">
<stop/>
<stop offset="0.08" stop-color="#22210E"/>
<stop offset="0.22" stop-color="#5C5826"/>
<stop offset="0.36" stop-color="#8E873A"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#D6CC58"/>
<stop offset="0.77" stop-color="#ECE161"/>
<stop offset="0.89" stop-color="#FAEE67"/>
<stop offset="1" stop-color="#FFF369"/>
</radialGradient>
<radialGradient id="paint40_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1567 15.17) scale(7.17001 7.17)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#E08F48"/>
</radialGradient>
<radialGradient id="paint41_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.7168 21.57) scale(9.62 9.61999)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#E08F48"/>
</radialGradient>
<linearGradient id="paint42_linear_23_1445" x1="34.2767" y1="22.35" x2="36.6567" y2="22.35" gradientUnits="userSpaceOnUse">
<stop stop-color="#E08F48"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint43_linear_23_1445" x1="17.0468" y1="12.4" x2="15.4368" y2="10.23" gradientUnits="userSpaceOnUse">
<stop stop-color="#E08F48"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint44_linear_23_1445" x1="36.3667" y1="17.52" x2="40.4567" y2="23.33" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCC00"/>
<stop offset="1" stop-color="#9C5900"/>
</linearGradient>
<radialGradient id="paint45_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.6067 22.27) scale(5.34003 5.34)">
<stop/>
<stop offset="1" stop-color="#FFF369"/>
</radialGradient>
<radialGradient id="paint46_radial_23_1445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.3768 8.19) scale(2.19)">
<stop stop-color="#FFF200"/>
<stop offset="0.07" stop-color="#E1D500"/>
<stop offset="0.21" stop-color="#A69D00"/>
<stop offset="0.36" stop-color="#736D00"/>
<stop offset="0.5" stop-color="#4A4600"/>
<stop offset="0.64" stop-color="#292700"/>
<stop offset="0.77" stop-color="#121100"/>
<stop offset="0.89" stop-color="#040400"/>
<stop offset="1"/>
</radialGradient>
</defs>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const best2nd = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6183 13.7027C38.1083 17.1127 38.9683 24.3327 35.4383 30.4527C31.8983 36.5727 25.2183 39.4327 20.0183 37.2527C18.6683 36.6827 17.4583 36.0827 16.0283 35.2527L22.9583 23.2527L29.8883 11.2527C31.3183 12.0827 32.4583 12.8227 33.6183 13.7127V13.7027Z" fill="url(#paint0_linear_40_2337)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M33.4684 15.3327C36.5684 17.6927 37.6184 22.9227 35.7784 27.4927C33.9384 32.0627 29.8584 34.3327 26.3884 32.8927C25.4884 32.5227 24.6684 32.1127 23.6984 31.5527L27.3083 22.6027L30.9184 13.6527C31.8884 14.2127 32.6684 14.7227 33.4684 15.3327Z" fill="url(#paint1_radial_40_2337)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M33.9283 15.0727C37.7483 17.9827 38.5983 24.2627 35.7283 29.6427C33.0583 34.6427 28.0583 37.2227 23.8283 36.0827C21.1583 36.8227 18.3983 36.6027 16.0383 35.2427C17.4683 36.0727 18.6883 36.6827 20.0283 37.2427C25.2283 39.4227 31.9083 36.5627 35.4483 30.4427C38.9883 24.3227 38.1183 17.1027 33.6283 13.6927C32.4683 12.8127 31.3383 12.0727 29.9183 11.2427C31.3283 12.0627 32.4583 13.2127 33.2783 14.5827C33.4983 14.7427 33.7083 14.8927 33.9283 15.0627V15.0727Z" fill="url(#paint2_radial_40_2337)"/>
<g style="mix-blend-mode:screen">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.6684 11.8027C35.7584 14.7427 36.8884 22.3227 33.1784 28.7427C29.4684 35.1627 22.3384 37.9727 17.2484 35.0327C12.1584 32.0927 11.0284 24.5127 14.7384 18.0927C18.4384 11.6727 25.5784 8.86273 30.6684 11.8027Z" fill="#FCCE3A"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8884 11.2527C35.2684 14.3627 36.5283 22.2527 32.7083 28.8827C28.8783 35.5127 21.4183 38.3627 16.0283 35.2627C10.6483 32.1527 9.38834 24.2627 13.2083 17.6327C17.0383 11.0027 24.4984 8.15273 29.8884 11.2527Z" fill="url(#paint3_radial_40_2337)"/>
<g style="mix-blend-mode:screen">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3384 32.9427C24.2684 33.2427 23.9884 33.5127 23.6084 33.6227C23.2784 33.7127 22.9584 33.6527 22.7384 33.4827C21.1284 33.8627 19.4984 33.7527 18.0184 33.0627C13.7484 31.0727 12.3584 25.0027 14.9184 19.5027C16.3184 16.5027 18.6084 14.2927 21.0884 13.2327C21.1084 12.8827 21.4084 12.5427 21.8484 12.4227C22.2484 12.3127 22.6484 12.4227 22.8584 12.6827C23.4284 12.5727 24.0084 12.5127 24.5684 12.5327C24.6884 12.3327 24.9684 12.2227 25.2684 12.2827C25.5084 12.3327 25.6984 12.4827 25.7784 12.6627C26.2984 12.7627 26.8084 12.9327 27.2984 13.1627C31.5684 15.1527 32.9584 21.2227 30.3984 26.7227C29.0184 29.6727 26.7784 31.8627 24.3384 32.9427Z" fill="#FFFCE4"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.0483 13.6927C32.0783 16.0127 32.9183 22.0927 29.9283 27.2727C26.9383 32.4527 21.2583 34.7627 17.2283 32.4327C13.1983 30.1127 12.3583 24.0327 15.3483 18.8527C18.3383 13.6727 24.0183 11.3627 28.0483 13.6927Z" fill="url(#paint4_radial_40_2337)"/>
<path style="mix-blend-mode:multiply" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.5483 20.9127C20.3783 16.0127 25.7583 13.8227 29.5683 16.0227C30.1183 16.3427 30.5983 16.7227 31.0183 17.1727C30.4083 15.7027 29.4083 14.4827 28.0483 13.6927C24.0183 11.3727 18.3383 13.6827 15.3483 18.8527C12.3583 24.0327 13.1983 30.1127 17.2283 32.4327C17.5183 32.6027 17.8183 32.7427 18.1283 32.8627C15.3783 30.2427 15.0383 25.2327 17.5483 20.9027V20.9127Z" fill="url(#paint5_radial_40_2337)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6783 19.6227C19.4183 14.8827 24.4083 12.5427 28.3183 13.9627C28.4383 14.0127 28.5683 14.0527 28.6883 14.1127C28.5783 14.0327 28.4783 13.9627 28.3683 13.8827C28.2683 13.8127 28.1583 13.7527 28.0483 13.6927C24.0183 11.3727 18.3383 13.6827 15.3483 18.8527C12.3583 24.0327 13.1983 30.1127 17.2283 32.4327C17.3383 32.4927 17.4483 32.5527 17.5583 32.6127C17.6783 32.6727 17.7984 32.7327 17.9184 32.7827C17.8084 32.7027 17.7084 32.6227 17.6084 32.5327C14.4184 29.8527 13.9483 24.3627 16.6883 19.6227H16.6783Z" fill="url(#paint6_linear_40_2337)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M25.5083 13.5627C26.4783 13.5127 27.4283 13.6427 28.3183 13.9627C28.4383 14.0127 28.5683 14.0527 28.6883 14.1127C28.5783 14.0327 28.4783 13.9627 28.3683 13.8827C28.2683 13.8127 28.1583 13.7527 28.0483 13.6927C24.0183 11.3727 18.3383 13.6827 15.3483 18.8527C12.3583 24.0327 13.1983 30.1127 17.2283 32.4327C17.3383 32.4927 17.4483 32.5527 17.5583 32.6127C17.6783 32.6727 17.7984 32.7327 17.9184 32.7827C17.8084 32.7027 17.7084 32.6227 17.6084 32.5327C17.1184 32.1227 16.6884 31.6427 16.3284 31.1027C13.3584 28.6127 12.8683 23.4827 15.3483 19.0427C17.7083 14.8127 21.9783 12.6227 25.5183 13.5627H25.5083Z" fill="url(#paint7_radial_40_2337)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M28.9484 15.9428C21.8184 12.7028 15.1484 21.9927 16.1284 28.0027C20.0784 26.5327 26.6384 23.2928 28.9484 15.9428Z" fill="url(#paint8_radial_40_2337)"/>
<defs>
<linearGradient id="paint0_linear_40_2337" x1="22.2683" y1="38.8627" x2="36.1283" y2="14.8527" gradientUnits="userSpaceOnUse">
<stop stop-color="#E86F0C"/>
<stop offset="0.69" stop-color="#FC940D"/>
<stop offset="1" stop-color="#E86F0C"/>
</linearGradient>
<radialGradient id="paint1_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3484 22.8327) scale(13.02 13.02)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint2_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.5183 21.9427) scale(18.89 18.89)">
<stop offset="0.51" stop-color="white"/>
<stop offset="0.68" stop-color="#E5DCC2"/>
<stop offset="1" stop-color="#B09444"/>
</radialGradient>
<radialGradient id="paint3_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9983 10.7527) scale(24.22 24.22)">
<stop stop-color="#FCF80D"/>
<stop offset="1" stop-color="#FC9C0D"/>
</radialGradient>
<radialGradient id="paint4_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0283 8.35274) scale(29.6 29.6)">
<stop stop-color="#FCF80D"/>
<stop offset="1" stop-color="#F78A0C"/>
</radialGradient>
<radialGradient id="paint5_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.5283 25.3227) scale(17.1 17.1)">
<stop offset="0.51" stop-color="white"/>
<stop offset="0.69" stop-color="#FFE1C2"/>
<stop offset="1" stop-color="#FFA84B"/>
</radialGradient>
<linearGradient id="paint6_linear_40_2337" x1="13.9183" y1="30.5227" x2="24.5783" y2="12.0627" gradientUnits="userSpaceOnUse">
<stop stop-color="#FC940D"/>
<stop offset="1" stop-color="#E86F0C"/>
</linearGradient>
<radialGradient id="paint7_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.8283 26.0427) scale(16.58 16.58)">
<stop offset="0.51" stop-color="white"/>
<stop offset="0.68" stop-color="#E5DCC2"/>
<stop offset="1" stop-color="#B09444"/>
</radialGradient>
<radialGradient id="paint8_radial_40_2337" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.4484 8.69275) scale(22.04 22.04)">
<stop stop-color="#FFF369"/>
<stop offset="0.11" stop-color="#FAEE67"/>
<stop offset="0.23" stop-color="#ECE161"/>
<stop offset="0.36" stop-color="#D6CC58"/>
<stop offset="0.5" stop-color="#B6AE4B"/>
<stop offset="0.64" stop-color="#8E873A"/>
<stop offset="0.78" stop-color="#5C5826"/>
<stop offset="0.92" stop-color="#22210E"/>
<stop offset="1"/>
</radialGradient>
</defs>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const best3rd = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6183 13.7027C38.1083 17.1127 38.9683 24.3327 35.4383 30.4527C31.8983 36.5727 25.2183 39.4327 20.0183 37.2527C18.6683 36.6827 17.4583 36.0827 16.0283 35.2527L22.9583 23.2527L29.8883 11.2527C31.3183 12.0827 32.4583 12.8227 33.6183 13.7127V13.7027Z" fill="url(#paint0_linear_40_2377)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M33.4684 15.3327C36.5684 17.6927 37.6184 22.9227 35.7784 27.4927C33.9384 32.0627 29.8584 34.3327 26.3884 32.8927C25.4884 32.5227 24.6684 32.1127 23.6984 31.5527L27.3084 22.6027L30.9184 13.6527C31.8884 14.2127 32.6684 14.7227 33.4684 15.3327Z" fill="url(#paint1_radial_40_2377)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M33.9183 15.0727C37.7383 17.9827 38.5883 24.2627 35.7183 29.6427C33.0483 34.6427 28.0483 37.2227 23.8183 36.0827C21.1483 36.8227 18.3883 36.6027 16.0283 35.2427C17.4583 36.0727 18.6783 36.6827 20.0183 37.2427C25.2183 39.4227 31.8983 36.5627 35.4383 30.4427C38.9783 24.3227 38.1083 17.1027 33.6183 13.6927C32.4583 12.8127 31.3283 12.0727 29.9083 11.2427C31.3183 12.0627 32.4483 13.2127 33.2683 14.5827C33.4883 14.7427 33.6983 14.8927 33.9183 15.0627V15.0727Z" fill="url(#paint2_radial_40_2377)"/>
<g style="mix-blend-mode:screen">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.6684 11.8027C35.7584 14.7427 36.8884 22.3227 33.1784 28.7427C29.4784 35.1627 22.3384 37.9727 17.2484 35.0327C12.1584 32.0927 11.0284 24.5127 14.7384 18.0927C18.4384 11.6727 25.5784 8.86273 30.6684 11.8027Z" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8883 11.2527C35.2683 14.3627 36.5283 22.2527 32.7083 28.8827C28.8783 35.5127 21.4183 38.3627 16.0283 35.2627C10.6483 32.1527 9.38834 24.2627 13.2083 17.6327C17.0383 11.0027 24.4983 8.15273 29.8883 11.2527Z" fill="url(#paint3_radial_40_2377)"/>
<g style="mix-blend-mode:screen">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3384 32.9427C24.2684 33.2427 23.9884 33.5127 23.6084 33.6227C23.2784 33.7127 22.9584 33.6527 22.7384 33.4827C21.1284 33.8627 19.4984 33.7527 18.0184 33.0627C13.7484 31.0727 12.3584 25.0027 14.9184 19.5027C16.3184 16.5027 18.6084 14.2927 21.0884 13.2327C21.1084 12.8827 21.4084 12.5427 21.8484 12.4227C22.2484 12.3127 22.6484 12.4227 22.8584 12.6827C23.4284 12.5727 24.0084 12.5127 24.5684 12.5327C24.6884 12.3327 24.9684 12.2227 25.2684 12.2827C25.5084 12.3327 25.6984 12.4827 25.7784 12.6627C26.2984 12.7627 26.8084 12.9327 27.2984 13.1627C31.5684 15.1527 32.9584 21.2227 30.3984 26.7227C29.0184 29.6727 26.7784 31.8627 24.3384 32.9427Z" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.0483 13.6927C32.0783 16.0127 32.9183 22.0927 29.9283 27.2727C26.9383 32.4527 21.2583 34.7627 17.2283 32.4327C13.1983 30.1127 12.3584 24.0327 15.3484 18.8527C18.3384 13.6727 24.0183 11.3627 28.0483 13.6927Z" fill="url(#paint4_radial_40_2377)"/>
<path style="mix-blend-mode:multiply" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.5483 20.9127C20.3783 16.0127 25.7583 13.8227 29.5683 16.0227C30.1183 16.3427 30.5983 16.7227 31.0183 17.1727C30.4083 15.7027 29.4083 14.4827 28.0483 13.6927C24.0183 11.3727 18.3384 13.6827 15.3484 18.8527C12.3584 24.0327 13.1983 30.1127 17.2283 32.4327C17.5183 32.6027 17.8184 32.7427 18.1284 32.8627C15.3784 30.2427 15.0383 25.2327 17.5483 20.9027V20.9127Z" fill="url(#paint5_radial_40_2377)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6783 19.6227C19.4183 14.8827 24.4083 12.5427 28.3183 13.9627C28.4383 14.0127 28.5684 14.0527 28.6884 14.1127C28.5784 14.0327 28.4783 13.9627 28.3683 13.8827C28.2683 13.8127 28.1583 13.7527 28.0483 13.6927C24.0183 11.3727 18.3384 13.6827 15.3484 18.8527C12.3584 24.0327 13.1983 30.1127 17.2283 32.4327C17.3383 32.4927 17.4483 32.5527 17.5583 32.6127C17.6783 32.6727 17.7983 32.7327 17.9183 32.7827C17.8083 32.7027 17.7083 32.6227 17.6083 32.5327C14.4183 29.8527 13.9484 24.3627 16.6884 19.6227H16.6783Z" fill="url(#paint6_linear_40_2377)"/>
<path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M25.5083 13.5627C26.4783 13.5127 27.4283 13.6427 28.3183 13.9627C28.4383 14.0127 28.5684 14.0527 28.6884 14.1127C28.5784 14.0327 28.4783 13.9627 28.3683 13.8827C28.2683 13.8127 28.1583 13.7527 28.0483 13.6927C24.0183 11.3727 18.3384 13.6827 15.3484 18.8527C12.3584 24.0327 13.1983 30.1127 17.2283 32.4327C17.3383 32.4927 17.4483 32.5527 17.5583 32.6127C17.6783 32.6727 17.7983 32.7327 17.9183 32.7827C17.8083 32.7027 17.7083 32.6227 17.6083 32.5327C17.1183 32.1227 16.6883 31.6427 16.3283 31.1027C13.3583 28.6127 12.8684 23.4827 15.3484 19.0427C17.7084 14.8127 21.9783 12.6227 25.5183 13.5627H25.5083Z" fill="url(#paint7_radial_40_2377)"/>
<path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M28.9483 15.9428C21.8183 12.7028 15.1484 21.9927 16.1284 28.0027C20.0784 26.5327 26.6383 23.2928 28.9483 15.9428Z" fill="url(#paint8_radial_40_2377)"/>
<defs>
<linearGradient id="paint0_linear_40_2377" x1="22.2683" y1="38.8627" x2="36.1283" y2="14.8527" gradientUnits="userSpaceOnUse">
<stop stop-color="#546578"/>
<stop offset="0.64" stop-color="#8DA0B8"/>
<stop offset="1" stop-color="#546578"/>
</linearGradient>
<radialGradient id="paint1_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3384 22.8327) scale(13.02 13.02)">
<stop stop-color="white"/>
<stop offset="0.09" stop-color="#F7F7F7"/>
<stop offset="0.22" stop-color="#E2E2E2"/>
<stop offset="0.38" stop-color="#BFBFBF"/>
<stop offset="0.56" stop-color="#8F8F8F"/>
<stop offset="0.76" stop-color="#525252"/>
<stop offset="0.98" stop-color="#080808"/>
<stop offset="1"/>
</radialGradient>
<radialGradient id="paint2_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.5183 21.9427) scale(18.89 18.89)">
<stop offset="0.51" stop-color="white"/>
<stop offset="0.77" stop-color="#C3CEDF"/>
<stop offset="1" stop-color="#8A9FC2"/>
</radialGradient>
<radialGradient id="paint3_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.1883 12.4127) scale(25.87 25.87)">
<stop stop-color="#EBF6FF"/>
<stop offset="1" stop-color="#6F7F8C"/>
</radialGradient>
<radialGradient id="paint4_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.3783 12.2127) scale(23.07 23.07)">
<stop stop-color="#EBF6FF"/>
<stop offset="1" stop-color="#647480"/>
</radialGradient>
<radialGradient id="paint5_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.5283 25.3227) scale(17.1 17.1)">
<stop offset="0.51" stop-color="white"/>
<stop offset="0.7" stop-color="#C2CBDA"/>
<stop offset="1" stop-color="#566D99"/>
</radialGradient>
<linearGradient id="paint6_linear_40_2377" x1="13.9183" y1="30.5227" x2="24.5783" y2="12.0627" gradientUnits="userSpaceOnUse">
<stop stop-color="#8DA0B8"/>
<stop offset="1" stop-color="#546578"/>
</linearGradient>
<radialGradient id="paint7_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.8284 26.0427) scale(16.58 16.58)">
<stop offset="0.51" stop-color="white"/>
<stop offset="0.82" stop-color="#C3CCD8"/>
<stop offset="1" stop-color="#9DACBF"/>
</radialGradient>
<radialGradient id="paint8_radial_40_2377" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.4484 8.69275) scale(22.04 22.04)">
<stop stop-color="white"/>
<stop offset="0.11" stop-color="#FAFAFA"/>
<stop offset="0.23" stop-color="#ECECEC"/>
<stop offset="0.36" stop-color="#D6D6D6"/>
<stop offset="0.5" stop-color="#B6B6B6"/>
<stop offset="0.64" stop-color="#8E8E8E"/>
<stop offset="0.78" stop-color="#5C5C5C"/>
<stop offset="0.92" stop-color="#222222"/>
<stop offset="1"/>
</radialGradient>
</defs>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const greenClock = (w: any = '100%', h: any = '100%', color?: any) => {

    const xml = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.8955 9.89697C40.3755 14.477 42.4155 23.867 37.6755 32.077C32.9355 40.287 23.7855 43.217 16.5755 39.897L14.7855 39.077L32.2855 8.76697L33.8955 9.89697Z" fill="url(#paint0_linear_23_1440)"/>
    <path style="mix-blend-mode:screen" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M33.7755 10.327C39.9155 14.667 41.8455 23.557 37.3555 31.337C32.8655 39.117 24.1955 41.887 17.3655 38.747L15.6755 37.967L32.2555 9.25696L33.7755 10.337V10.327Z" fill="url(#paint1_radial_23_1440)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1555 8.67695C39.1555 12.7169 40.9155 22.787 36.0855 31.157C31.2555 39.527 21.6555 43.0369 14.6555 38.9969C7.65553 34.9569 5.89552 24.8869 10.7255 16.5169C15.5555 8.14695 25.1555 4.63695 32.1555 8.67695Z" fill="url(#paint2_radial_23_1440)"/>
    <path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M38.7956 22.067C39.0456 16.477 36.7056 11.3069 32.1556 8.67695C25.1556 4.63695 15.5556 8.14695 10.7256 16.5169C9.38556 18.8269 8.55557 21.2769 8.20557 23.6769C11.6656 29.3869 19.5656 32.1869 27.5156 30.0569C32.4756 28.7269 36.4656 25.7369 38.7956 22.0569V22.067Z" fill="url(#paint3_radial_23_1440)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9556 10.7569C36.9956 14.2469 38.5156 22.9269 34.3456 30.1569C30.1756 37.3769 21.8955 40.4069 15.8555 36.9169C9.81555 33.4269 8.29555 24.7469 12.4655 17.5169C16.6355 10.2969 24.9156 7.26692 30.9556 10.7569Z" fill="url(#paint4_radial_23_1440)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4155 11.6869C30.1455 11.5269 29.7655 11.6669 29.5755 11.9969L28.8355 13.2769C28.6455 13.6069 28.7155 14.0069 28.9855 14.1569C29.2555 14.3169 29.6355 14.1769 29.8255 13.8469L30.5655 12.5669C30.7555 12.2369 30.6855 11.8369 30.4155 11.6869ZM17.8255 33.5069C17.5555 33.3469 17.1755 33.4869 16.9855 33.8169L16.2455 35.0969C16.0555 35.4269 16.1255 35.8269 16.3955 35.9769C16.6655 36.1369 17.0455 35.9969 17.2355 35.6669L17.9755 34.3869C18.1655 34.0569 18.0955 33.6569 17.8255 33.5069ZM33.5655 29.6969C33.7555 29.3669 33.6855 28.9669 33.4155 28.8169L32.3455 28.1969C32.0755 28.0369 31.6955 28.1769 31.5055 28.5069C31.3155 28.8369 31.3855 29.2369 31.6555 29.3869L32.7255 30.0069C32.9955 30.1669 33.3755 30.0269 33.5655 29.6969ZM15.3155 19.1669C15.5055 18.8369 15.4355 18.4369 15.1655 18.2869L14.0955 17.6669C13.8255 17.5069 13.4455 17.6469 13.2555 17.9769C13.0655 18.3069 13.1355 18.7069 13.4055 18.8569L14.4755 19.4769C14.7455 19.6369 15.1255 19.4969 15.3155 19.1669ZM32.8755 17.3969C33.0155 17.6969 33.3755 17.7769 33.6855 17.5769C33.9855 17.3669 34.1155 16.9569 33.9755 16.6569C33.8355 16.3569 33.4755 16.2769 33.1655 16.4869C32.8655 16.6969 32.7355 17.1069 32.8755 17.4069V17.3969ZM33.8555 22.9969C33.8255 23.3569 34.0755 23.6369 34.4055 23.6069C34.7355 23.5769 35.0355 23.2669 35.0555 22.8969C35.0855 22.5369 34.8355 22.2569 34.5055 22.2869C34.1755 22.3169 33.8755 22.6269 33.8555 22.9969ZM27.8955 33.3069C27.5955 33.5169 27.4655 33.9269 27.6055 34.2269C27.7455 34.5269 28.1055 34.6069 28.4155 34.3969C28.7155 34.1869 28.8455 33.7769 28.7055 33.4769C28.5655 33.1769 28.2055 33.0969 27.8955 33.2969V33.3069ZM22.5655 35.2569C22.2355 35.2869 21.9355 35.5969 21.9155 35.9669C21.8855 36.3269 22.1355 36.6069 22.4655 36.5769C22.7955 36.5469 23.0955 36.2369 23.1155 35.8669C23.1455 35.5069 22.8955 35.2269 22.5655 35.2569ZM13.9355 30.2769C13.7955 29.9769 13.4355 29.8969 13.1255 30.0969C12.8255 30.3069 12.6955 30.7169 12.8355 31.0169C12.9755 31.3169 13.3355 31.3969 13.6455 31.1869C13.9455 30.9769 14.0755 30.5669 13.9355 30.2669V30.2769ZM12.9555 24.6769C12.9855 24.3169 12.7355 24.0369 12.4055 24.0669C12.0755 24.0969 11.7755 24.4069 11.7555 24.7769C11.7255 25.1369 11.9755 25.4169 12.3055 25.3869C12.6355 25.3569 12.9355 25.0469 12.9555 24.6769ZM18.9155 14.3669C19.2155 14.1569 19.3455 13.7469 19.2055 13.4469C19.0655 13.1469 18.7055 13.0669 18.3955 13.2669C18.0955 13.4769 17.9655 13.8869 18.1055 14.1869C18.2455 14.4869 18.6055 14.5669 18.9155 14.3569V14.3669ZM24.2455 12.4169C24.5755 12.3869 24.8755 12.0769 24.8955 11.7069C24.9255 11.3469 24.6755 11.0669 24.3455 11.0969C24.0155 11.1269 23.7155 11.4369 23.6955 11.8069C23.6655 12.1669 23.9155 12.4469 24.2455 12.4169Z" fill="black"/>
    <path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M25.6755 22.257L23.5155 23.817L25.8955 24.597L34.8255 22.257L35.3555 21.787L34.7555 21.507L25.6755 22.257Z" fill="url(#paint5_linear_23_1440)"/>
    <path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M25.1156 25.4269L23.5155 23.8369L22.8055 26.1469L25.0255 32.2469L25.4855 32.5469L25.7655 32.0169L25.1156 25.4269Z" fill="url(#paint6_linear_23_1440)"/>
    <path style="mix-blend-mode:multiply" fill-rule="evenodd" clip-rule="evenodd" d="M12.6456 18.3169C16.7356 11.2269 24.7856 8.18692 30.7956 11.3669C30.8556 11.3969 30.9156 11.4369 30.9756 11.4669C31.0356 11.4969 31.0856 11.5269 31.1456 11.5569C33.8456 13.1169 35.6456 15.7069 36.4356 18.7469C35.7956 15.4869 34.0356 12.6669 31.2856 10.9469C31.2256 10.9069 31.1656 10.8769 31.1056 10.8369C31.0556 10.8069 31.0156 10.7869 30.9656 10.7569C24.9256 7.26692 16.6456 10.2969 12.4756 17.5169C10.1656 21.5169 9.60556 25.9569 10.5856 29.7269C9.87556 26.1469 10.5156 22.0369 12.6656 18.3169H12.6456Z" fill="url(#paint7_radial_23_1440)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3456 21.847L23.0555 23.627L25.4655 24.3669L34.7355 21.4269L35.3055 20.8969L34.7056 20.6169L25.3456 21.847Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6156 25.287L23.0456 23.647L22.2056 26.167L24.2056 32.647L24.6756 32.957L24.9856 32.367L24.6156 25.287Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0555 23.627L35.3055 20.8969L34.7056 20.6169L25.3456 21.847L23.0555 23.627Z" fill="url(#paint8_radial_23_1440)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9855 32.367L24.6155 25.287L23.0455 23.647L24.6755 32.957L24.9855 32.367Z" fill="url(#paint9_radial_23_1440)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1456 22.5569C24.7356 22.8969 24.8855 23.7469 24.4755 24.4569C24.0655 25.1669 23.2555 25.4569 22.6655 25.1169L22.3156 24.9169L23.7955 22.3569L24.1456 22.5569Z" fill="#1D1D1B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7955 22.3469C24.3855 22.6869 24.5355 23.5369 24.1255 24.2469C23.7155 24.9569 22.9055 25.2469 22.3155 24.9069C21.7255 24.5669 21.5755 23.7169 21.9855 23.0069C22.3955 22.2969 23.2055 22.0069 23.7955 22.3469Z" fill="url(#paint10_radial_23_1440)"/>
    <path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M23.8955 22.737C24.1155 23.127 23.9255 23.647 23.4655 23.917C23.0055 24.187 22.4555 24.0869 22.2255 23.6969C22.0055 23.3069 22.1955 22.787 22.6555 22.517C23.1155 22.247 23.6655 22.347 23.8955 22.737Z" fill="url(#paint11_radial_23_1440)"/>
    <path style="mix-blend-mode:screen" fill-rule="evenodd" clip-rule="evenodd" d="M17.3656 9.96695C16.7356 10.437 16.1256 10.947 15.5656 11.507C14.3256 12.727 15.1056 13.027 16.2356 12.207C22.0156 7.95695 27.5256 7.17695 33.7556 11.1669C34.0956 11.3869 34.3856 11.497 34.5056 11.397C34.6356 11.287 34.5556 10.927 34.2456 10.607C32.8156 9.11695 30.4756 7.70695 27.1956 7.28695C23.9356 6.86695 20.0156 8.01695 17.3756 9.96695H17.3656Z" fill="url(#paint12_radial_23_1440)"/>
    <defs>
    <linearGradient id="paint0_linear_23_1440" x1="21.8355" y1="43.077" x2="39.1055" y2="13.317" gradientUnits="userSpaceOnUse">
    <stop offset="0.29" stop-color="#2A4501"/>
    <stop offset="1" stop-color="#76B000"/>
    </linearGradient>
    <radialGradient id="paint1_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.4255 19.767) scale(22.92 22.92)">
    <stop stop-color="#95C11F"/>
    <stop offset="1"/>
    </radialGradient>
    <radialGradient id="paint2_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.2355 8.32695) scale(28.67 28.67)">
    <stop stop-color="#88D10B"/>
    <stop offset="1" stop-color="#4F8707"/>
    </radialGradient>
    <radialGradient id="paint3_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.3456 28.0669) scale(37.2 37.2)">
    <stop/>
    <stop offset="1" stop-color="#95C11F"/>
    </radialGradient>
    <radialGradient id="paint4_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.5456 10.9769) scale(44.93 44.93)">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#B1C6F2"/>
    </radialGradient>
    <linearGradient id="paint5_linear_23_1440" x1="23.3855" y1="23.847" x2="36.4555" y2="21.557" gradientUnits="userSpaceOnUse">
    <stop stop-color="#616DBE"/>
    <stop offset="0.6" stop-color="#C2C7E6"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint6_linear_23_1440" x1="23.5355" y1="23.9669" x2="26.1555" y2="35.2869" gradientUnits="userSpaceOnUse">
    <stop stop-color="#616DBE"/>
    <stop offset="0.6" stop-color="#C2C7E6"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <radialGradient id="paint7_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.7656 29.4969) scale(23.84 23.84)">
    <stop offset="0.59" stop-color="white"/>
    <stop offset="0.76" stop-color="#B2CEC6"/>
    <stop offset="0.92" stop-color="#6BA090"/>
    <stop offset="1" stop-color="#4F8F7C"/>
    </radialGradient>
    <radialGradient id="paint8_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.2255 10.6469) scale(14.86 14.86)">
    <stop stop-color="white"/>
    <stop offset="1"/>
    </radialGradient>
    <radialGradient id="paint9_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.9555 33.857) scale(17.79 17.79)">
    <stop stop-color="white"/>
    <stop offset="1"/>
    </radialGradient>
    <radialGradient id="paint10_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.7455 20.5569) scale(4.77 4.77)">
    <stop stop-color="#A9DCED"/>
    <stop offset="1"/>
    </radialGradient>
    <radialGradient id="paint11_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.0555 21.227) scale(3.02002 3.01999)">
    <stop stop-color="white"/>
    <stop offset="1"/>
    </radialGradient>
    <radialGradient id="paint12_radial_23_1440" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.8656 21.4469) scale(21.88 21.88)">
    <stop/>
    <stop offset="1" stop-color="#95C11F"/>
    </radialGradient>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const tripleline = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="#FCFAFF" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 12H21" stroke="#FCFAFF" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 17H21" stroke="#FCFAFF" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const bgEren = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="375" height="547" viewBox="0 0 375 547" fill="none">
  <g filter="url(#filter0_f_104_6314)">
    <path d="M113.208 90.1403C70.0472 95.6259 19.7524 298.138 0 398.709V457C21.816 359.858 76.4151 187.563 120.283 168.363C175.118 144.363 203.42 470.074 262.677 422.075C310.083 383.675 357.311 229.261 375 143.548V90.1403C359.965 90.1403 293.632 330.138 262.677 330.138C231.722 330.138 167.158 83.2832 113.208 90.1403Z" fill="#53389E"/>
  </g>
  <defs>
    <filter id="filter0_f_104_6314" x="-90" y="0" width="555" height="547" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_104_6314"/>
    </filter>
  </defs>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const leftHand = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3482 6.95387C27.5036 8.01499 27.3878 9.12804 27.0167 10.5011L25.0859 9.97933C25.4137 8.76642 25.4719 7.94425 25.3693 7.24369C25.2659 6.53757 24.9873 5.86671 24.4917 4.9558L26.2485 4C26.7822 4.98099 27.1936 5.8983 27.3482 6.95387ZM22.9856 6.86409L22.9813 7.80787L22.945 15.6996L23.988 14.9307C25.0844 14.1224 26.5878 14.1542 27.649 15.0082L28.7928 15.9286L29.4571 16.4632L29.0342 17.2037L25.698 23.045L25.1564 24.0664C23.5896 27.0216 20.4123 28.7585 17.0789 28.4821C12.6929 28.1185 9.33978 24.417 9.41002 20.0165L9.58455 9.08196L9.59904 8.174L10.5042 8.10115L13.3625 7.8711L13.4628 6.00648L13.5122 5.08766L14.4319 5.06062L18.1564 4.95112L19.2036 4.92033L19.1857 5.96775L19.1744 6.62591L22.0437 6.80522L22.9856 6.86409ZM17.1681 6.98104L17.1584 7.5473L17.0148 15.9594L19.0145 15.9936L19.1403 8.62768L20.977 8.74246L20.9359 17.6813L22.5293 18.4908L25.1748 16.5405C25.5403 16.2711 26.0414 16.2817 26.3951 16.5663L26.8746 16.9522L23.9535 22.0668L23.9457 22.0804L23.9383 22.0943L23.3894 23.1295C22.1974 25.3778 19.7802 26.6992 17.2442 26.489C13.9074 26.2123 11.3563 23.3963 11.4098 20.0485L11.5698 10.0218L13.2704 9.88498L13.0332 15.8935L15.0317 15.9724L15.313 8.84435L15.4104 7.03272L17.1681 6.98104ZM4.77121 12.5498C4.67644 11.3088 4.89872 10.0209 5.4486 8.43189L7.33863 9.08596C6.84301 10.5181 6.69838 11.5198 6.7654 12.3975C6.83285 13.2808 7.1204 14.1271 7.63845 15.2595L5.81974 16.0915C5.2685 14.8866 4.86555 13.7852 4.77121 12.5498Z" fill="#B692F6"/>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const rightHand = (w: any = '100%', h: any = '100%', color?:any) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.65178 6.95387C5.49638 8.01499 5.61223 9.12804 5.98334 10.5011L7.91407 9.97933C7.58626 8.76642 7.52807 7.94425 7.63067 7.24369C7.73408 6.53757 8.01273 5.86671 8.50831 4.9558L6.75148 4C6.21778 4.98099 5.80637 5.8983 5.65178 6.95387ZM10.0144 6.86409L10.0187 7.80787L10.055 15.6996L9.01198 14.9307C7.91556 14.1224 6.41219 14.1542 5.35098 15.0082L4.20723 15.9286L3.54293 16.4632L3.96582 17.2037L7.30204 23.045L7.84357 24.0664C9.41039 27.0216 12.5877 28.7585 15.9211 28.4821C20.3071 28.1185 23.6602 24.417 23.59 20.0165L23.4155 9.08196L23.401 8.174L22.4958 8.10115L19.6375 7.8711L19.5372 6.00648L19.4878 5.08766L18.5681 5.06062L14.8436 4.95112L13.7964 4.92033L13.8143 5.96775L13.8256 6.62591L10.9563 6.80522L10.0144 6.86409ZM15.8319 6.98104L15.8416 7.5473L15.9852 15.9594L13.9855 15.9936L13.8597 8.62768L12.023 8.74246L12.0641 17.6813L10.4707 18.4908L7.82521 16.5405C7.45973 16.2711 6.95861 16.2817 6.60487 16.5663L6.12541 16.9522L9.04653 22.0668L9.05432 22.0804L9.06167 22.0943L9.61057 23.1295C10.8026 25.3778 13.2198 26.6992 15.7558 26.489C19.0926 26.2123 21.6437 23.3963 21.5902 20.0485L21.4302 10.0218L19.7296 9.88498L19.9668 15.8935L17.9683 15.9724L17.687 8.84435L17.5896 7.03272L15.8319 6.98104ZM28.2288 12.5498C28.3236 11.3088 28.1013 10.0209 27.5514 8.43189L25.6614 9.08596C26.157 10.5181 26.3016 11.5198 26.2346 12.3975C26.1671 13.2808 25.8796 14.1271 25.3615 15.2595L27.1803 16.0915C27.7315 14.8866 28.1344 13.7852 28.2288 12.5498Z" fill="#B692F6"/>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

// export const NAME = (w: any = '100%', h: any = '100%', color?:any) => {
//     const xml = ``
//     return (
//         <SvgXml xml={xml} width={w} height={h} />
//     )
// }

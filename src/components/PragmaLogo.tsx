import React from 'react';

interface PragmaLogoProps {
  variant?: 'dark' | 'light' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const PragmaLogo: React.FC<PragmaLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'light' || variant === 'white';
  const mainColor = isDark ? '#FFFFFF' : '#071327';
  const subColor = isDark ? '#94A3B8' : '#55657E';

  const heightClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16',
  };

  const idSuffix = isDark ? '_light_mode' : '_dark_mode';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200`}
        aria-label="PRAGMA TECHNOLOGIES"
      >
        <defs>
          {/* Gradient for 'p' foot accent */}
          <linearGradient id={`pFootGrad${idSuffix}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#005BFF" />
            <stop offset="100%" stopColor="#00C8FF" />
          </linearGradient>

          {/* Gradient for top-right arrow accent */}
          <linearGradient id={`arrowGrad${idSuffix}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0058FF" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>
        </defs>

        {/* --- Letter 'p' --- */}
        <g id="letter-p">
          {/* Upper stem & circular bowl */}
          <path
            fill={mainColor}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 48 20 C 64.568 20 78 33.431 78 50 C 78 66.569 64.568 80 48 80 C 37.8 80 28.8 74.8 23.5 67 L 23.5 73.5 L 8 83.5 L 8 22 L 23.5 22 L 23.5 33 C 28.8 25.2 37.8 20 48 20 Z M 48 35.5 C 40 35.5 33.5 42 33.5 50 C 33.5 58 40 64.5 48 64.5 C 56 64.5 62.5 58 62.5 50 C 62.5 42 56 35.5 48 35.5 Z"
          />
          {/* Diagonal cyan-blue parallelogram at foot of 'p' */}
          <path
            fill={`url(#pFootGrad${idSuffix})`}
            d="M 8 87.5 L 23.5 77.5 L 23.5 95 L 8 105 Z"
          />
        </g>

        {/* --- Letter 'r' --- */}
        <g id="letter-r">
          <path
            fill={mainColor}
            d="M 90 32 L 105 32 L 105 40.5 C 109.5 35 116.5 31.5 125 31.5 C 127.5 31.5 129.5 31.8 131 32.2 L 131 46.5 C 128.5 45.8 125.5 45.5 122 45.5 C 112.5 45.5 105 52 105 64 L 105 80 L 90 80 Z"
          />
        </g>

        {/* --- Letter 'a' (first) --- */}
        <g id="letter-a1">
          <path
            fill={mainColor}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 166 31 C 175.5 31 183.5 35.5 188 42.5 L 188 32 L 203 32 L 203 80 L 188 80 L 188 74 C 183.5 78.5 175.5 81.5 166 81.5 C 151 81.5 139 70 139 56 C 139 42 151 31 166 31 Z M 169 45 C 161.5 45 155 50 155 56.5 C 155 63 161.5 68 169 68 C 176.5 68 188 63 188 56.5 L 188 47.5 C 183.5 45.5 177 45 169 45 Z"
          />
        </g>

        {/* --- Letter 'g' --- */}
        <g id="letter-g">
          <path
            fill={mainColor}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 242 31 C 257 31 268 42.5 268 56 C 268 62 266 67.5 262.5 72 C 258 77.5 251 81.5 241 81.5 C 233 81.5 226 79 221 74 L 221 82 C 221 95 214 103 198 103 C 187 103 178 99.5 173 93.5 L 181 83.5 C 184 87 190 89.5 197 89.5 C 207 89.5 209.5 83.5 209.5 76 L 209.5 32 L 223 32 L 223 38.5 C 227.5 34 234.5 31 242 31 Z M 240 45 C 232.5 45 224 50 224 56.5 C 224 63 232.5 68 240 68 C 247.5 68 253.5 63 253.5 56.5 C 253.5 50 247.5 45 240 45 Z"
          />
        </g>

        {/* --- Letter 'm' --- */}
        <g id="letter-m">
          <path
            fill={mainColor}
            d="M 278 32 L 293 32 L 293 40 C 297.5 34.5 305 31 314 31 C 322 31 328.5 34.5 332.5 40.5 C 337.5 34.5 345.5 31 355 31 C 369.5 31 378 40.5 378 55.5 L 378 80 L 363 80 L 363 56.5 C 363 48.5 358.5 45 352 45 C 345 45 340 49 340 57 L 340 80 L 325 80 L 325 56.5 C 325 48.5 320.5 45 314 45 C 307 45 302 49 302 57 L 302 80 L 278 80 Z"
          />
        </g>

        {/* --- Letter 'a' (second) --- */}
        <g id="letter-a2">
          <path
            fill={mainColor}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 414 31 C 423.5 31 431.5 35.5 436 42.5 L 436 32 L 451 32 L 451 80 L 436 80 L 436 74 C 431.5 78.5 423.5 81.5 414 81.5 C 399 81.5 387 70 387 56 C 387 42 399 31 414 31 Z M 417 45 C 409.5 45 403 50 403 56.5 C 403 63 409.5 68 417 68 C 424.5 68 436 63 436 56.5 L 436 47.5 C 431.5 45.5 425 45 417 45 Z"
          />
        </g>

        {/* --- Dynamic Gradient Arrow ↗ Above final 'a' --- */}
        <g id="arrow-corner">
          <path
            fill={`url(#arrowGrad${idSuffix})`}
            d="M 423 7 L 459 7 C 462 7 465 10 465 13 L 465 43 L 453 43 L 453 19 L 423 19 Z"
          />
        </g>

        {/* --- Subtitle: "technologies" --- */}
        {showSubtitle && (
          <g id="subtitle-technologies">
            <text
              x="276"
              y="102"
              fill={subColor}
              fontFamily="'Plus Jakarta Sans', 'Manrope', 'Poppins', sans-serif"
              fontSize="19"
              fontWeight="400"
              letterSpacing="0.32em"
            >
              technologies
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

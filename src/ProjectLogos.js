import React from 'react';

// Icon portion of the Face Recognition Attendance System logo.
// Uses currentColor for the person, so it follows the text color in light/dark mode.
export const FaceRecognitionLogo = ({ size = 64, className = '' }) => (
  <svg
    viewBox="8 21 128 128"
    width={size}
    height={size}
    className={className}
    role="img"
    aria-label="Face Recognition Attendance System logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="fr-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#22D3EE" />
        <stop offset="1" stopColor="#22C55E" />
      </linearGradient>
      <linearGradient id="fr-s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#22D3EE" stopOpacity="0" />
        <stop offset=".5" stopColor="#22D3EE" />
        <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
      </linearGradient>
      <filter id="fr-f" x="-20%" y="-300%" width="140%" height="700%">
        <feGaussianBlur stdDeviation="2.5" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <mask id="fr-m">
        <rect width="128" height="128" fill="#fff" />
        <circle cx="98" cy="98" r="23" fill="#000" />
      </mask>
    </defs>
    <g transform="translate(8 21)">
      <g mask="url(#fr-m)">
        <path
          d="M16 42V26a10 10 0 0 1 10-10h16M86 16h16a10 10 0 0 1 10 10v16M112 86v16a10 10 0 0 1-10 10H86M42 112H26a10 10 0 0 1-10-10V86"
          fill="none"
          stroke="url(#fr-g)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="64" cy="51" r="16" fill="currentColor" />
        <path d="M36 96c0-15 12.5-25 28-25s28 10 28 25z" fill="currentColor" />
        <rect x="22" y="56" width="84" height="3.5" rx="1.75" fill="url(#fr-s)" filter="url(#fr-f)" />
      </g>
      <circle cx="98" cy="98" r="17" fill="url(#fr-g)" />
      <path
        d="M90 98.5l5.5 5.5L106.5 93"
        fill="none"
        stroke="#fff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

// Browser window with a profile layout inside. Uses currentColor for the content,
// so it follows the text color in light/dark mode.
export const PortfolioLogo = ({ size = 64, className = '' }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    role="img"
    aria-label="Personal Portfolio Website logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="pf-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#A855F7" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <rect x="5" y="9" width="54" height="46" rx="9" stroke="url(#pf-g)" strokeWidth="4" />
    <path d="M5 18a9 9 0 0 1 9-9h36a9 9 0 0 1 9 9v3H5z" fill="url(#pf-g)" />
    <circle cx="12.5" cy="15" r="1.8" fill="#fff" opacity=".9" />
    <circle cx="18" cy="15" r="1.8" fill="#fff" opacity=".7" />
    <circle cx="23.5" cy="15" r="1.8" fill="#fff" opacity=".5" />
    <circle cx="20" cy="33" r="6" fill="currentColor" />
    <path d="M11 47c0-5 4-8 9-8s9 3 9 8z" fill="currentColor" />
    <rect x="34" y="29" width="17" height="4" rx="2" fill="url(#pf-g)" />
    <rect x="34" y="37" width="13" height="3" rx="1.5" fill="currentColor" opacity=".55" />
    <rect x="34" y="43" width="15" height="3" rx="1.5" fill="currentColor" opacity=".55" />
  </svg>
);

export const CodebaseQALogo = ({ size = 64, className = '' }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
    role="img"
    aria-label="Codebase Q&A Assistant logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="32" y1="5" x2="32" y2="14" stroke="#E8603C" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="5" r="3.5" fill="#F4B39C" />
    <rect x="3" y="28" width="5" height="13" rx="2.5" fill="#B8462A" />
    <rect x="56" y="28" width="5" height="13" rx="2.5" fill="#B8462A" />
    <rect x="8" y="14" width="48" height="42" rx="14" fill="#E8603C" />
    <rect x="14" y="23" width="36" height="22" rx="8" fill="#141413" />
    <polyline points="25,28.5 20.5,34 25,39.5" stroke="#E8603C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="39,28.5 43.5,34 39,39.5" stroke="#E8603C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="34.5" y1="28.5" x2="29.5" y2="39.5" stroke="#ECE8DF" strokeWidth="3" strokeLinecap="round" />
    <rect x="24" y="49" width="16" height="3" rx="1.5" fill="#141413" opacity=".35" />
  </svg>
);

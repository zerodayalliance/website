import React from "react";
import Image from "next/image";
import { getActiveTheme, ThemeKey } from "@/config/branding";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: ThemeKey;
  showGlow?: boolean;
  priority?: boolean;
  scale?: number;
}

export const DefaultSvgLogo = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width="650"
    height="593"
    viewBox="0 0 650 593"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M153.38 346.732H192.194C196.684 374.507 203.832 399.663 213.173 421.871L522.381 281.759L522.381 281.756L522.474 281.717L558.923 265.201L561.174 265.476L561.178 265.475L561.178 265.477L649.608 276.305L560.535 306.237C551.593 482.906 463.065 592.652 355.174 592.652C255.785 592.652 172.827 499.52 153.38 346.732ZM213.578 422.829C243.473 493.154 295.458 533.632 354.585 533.632C438.438 533.632 507.928 452.221 520.414 319.719L213.578 422.829Z"
      fill="url(#paint0_linear_44_82)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M89.0609 288.903C97.937 111.073 186.495 0 294.432 0C393.827 0 476.789 94.189 496.228 247.961H456.336C451.938 220.286 444.939 195.166 435.789 172.93L126.035 314.053L126.035 314.055L125.958 314.088L90.6849 330.158L88.4332 329.881L0 318.994L89.0609 288.903ZM127.897 275.782C140.057 141.718 209.722 58.8666 293.843 58.8666C353.309 58.8666 405.551 100.27 435.362 171.899L127.897 275.782Z"
      fill="url(#paint1_linear_44_82)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_44_82"
        x1="401.494"
        y1="265.201"
        x2="401.494"
        y2="592.652"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111111" />
        <stop offset="1" stopColor="#777777" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_44_82"
        x1="248.114"
        y1="0"
        x2="248.114"
        y2="330.158"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#983131" />
        <stop offset="1" stopColor="#321010" />
      </linearGradient>
    </defs>
  </svg>
);

const Logo = ({
  className = "",
  theme: themeOverride,
  showGlow = true,
  priority = true,
  scale: scaleOverride,
  ...props
}: LogoProps) => {
  const currentTheme = getActiveTheme(themeOverride);
  const { logo, glow } = currentTheme;
  const scale = scaleOverride ?? logo.scale ?? 1;

  const contentStyle: React.CSSProperties =
    scale !== 1
      ? {
          width: `${scale * 100}%`,
          height: `${scale * 100}%`,
          position: "absolute",
          top: `${(1 - scale) * 50}%`,
          left: `${(1 - scale) * 50}%`,
        }
      : {
          width: "100%",
          height: "100%",
        };

  return (
    <div className={`relative ${className}`} {...props}>
      {showGlow && (
        <div
          className="absolute inset-0 blur-3xl scale-150 pointer-events-none"
          style={{ opacity: glow.opacity ?? 0.6 }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${glow.topColor}, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 rounded-full"
            style={{
              background: `linear-gradient(to top, ${glow.bottomColor}, transparent)`,
            }}
          />
          {glow.centerColor && (
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${glow.centerColor} 0%, transparent 65%)`,
              }}
            />
          )}
        </div>
      )}

      <div
        className="relative z-10 flex items-center justify-center pointer-events-none"
        style={contentStyle}
      >
        {logo.type === "svg" ? (
          <DefaultSvgLogo className="w-full h-full" />
        ) : (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={1500}
            height={1500}
            priority={priority}
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default Logo;

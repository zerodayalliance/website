/**
 * Available themes:
 * - "default"     : Vector SVG logo + default favicon
 * - "durga_puja"  : Durga Puja festive logo + favicon
 * - "diwali"      : Diwali festive logo + favicon
 * - "zda"         : PNG version of the ZDA logo + default favicon
 */
export type ThemeKey = "default" | "durga_puja" | "diwali" | "zda";

export const ACTIVE_THEME: ThemeKey =
  (process.env.NEXT_PUBLIC_THEME as ThemeKey) || "default";

export interface ThemeGlow {
  topColor: string;
  bottomColor: string;
  centerColor?: string;
  opacity?: number;
}

export interface ThemeConfig {
  name: string;
  logo:
    | {
        type: "svg";
        alt: string;
        scale?: number;
      }
    | {
        type: "image";
        src: string;
        alt: string;
        scale?: number;
      };
  glow: ThemeGlow;
  favicon: string;
}

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  default: {
    name: "Default (Vector)",
    logo: {
      type: "svg",
      alt: "ZeroDay Alliance Logo",
      scale: 1,
    },
    glow: {
      topColor: "rgba(185, 28, 28, 0.8)", // red-700
      bottomColor: "rgba(107, 114, 128, 0.5)", // gray-500
      centerColor: "rgba(152, 49, 49, 0.3)",
      opacity: 0.75,
    },
    favicon: "/favicon/default.ico",
  },
  durga_puja: {
    name: "Durga Puja",
    logo: {
      type: "image",
      src: "/logo/durga_puja.png",
      alt: "ZeroDay Alliance Durga Puja Logo",
      scale: 1.38,
    },
    glow: {
      topColor: "rgba(220, 38, 38, 0.65)", // soft sindoor red
      bottomColor: "rgba(217, 119, 6, 0.45)", // soft golden amber mandala
      centerColor: "rgba(239, 68, 68, 0.2)",
      opacity: 0.6,
    },
    favicon: "/favicon/durga_puja.ico",
  },
  diwali: {
    name: "Diwali",
    logo: {
      type: "image",
      src: "/logo/diwali.png",
      alt: "ZeroDay Alliance Diwali Logo",
      scale: 1.2,
    },
    glow: {
      topColor: "rgba(245, 158, 11, 0.65)", // soft golden flame amber
      bottomColor: "rgba(217, 119, 6, 0.45)", // soft warm diya glow
      centerColor: "rgba(251, 191, 36, 0.2)",
      opacity: 0.6,
    },
    favicon: "/favicon/diwali.ico",
  },
  zda: {
    name: "ZDA (Raster PNG)",
    logo: {
      type: "image",
      src: "/logo/default.png",
      alt: "ZeroDay Alliance Logo",
      scale: 1,
    },
    glow: {
      topColor: "rgba(185, 28, 28, 0.8)",
      bottomColor: "rgba(107, 114, 128, 0.5)",
      centerColor: "rgba(152, 49, 49, 0.3)",
      opacity: 0.75,
    },
    favicon: "/favicon/default.ico",
  },
};

export const getActiveTheme = (
  themeKey: ThemeKey = ACTIVE_THEME
): ThemeConfig => {
  return THEMES[themeKey] || THEMES.default;
};

export const getThemeFavicons = (themeKey: ThemeKey = ACTIVE_THEME) => {
  const theme = getActiveTheme(themeKey);
  return {
    icon: theme.favicon,
    shortcut: theme.favicon,
    apple: theme.favicon,
  };
};

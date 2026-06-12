export const SITE_HEADER_MOBILE_HEIGHT = "3.25rem";
export const PRINCIPLES_MOBILE_BAR_HEIGHT = "2.75rem";

export const PRINCIPLES_MOBILE_CHROME_OFFSET = `calc(${SITE_HEADER_MOBILE_HEIGHT} + ${PRINCIPLES_MOBILE_BAR_HEIGHT})`;

export const siteHeaderChromeTransition = {
  duration: 0.26,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

/**
 * FundMeOut — Icon weight config
 * One line, app-wide. Applied by IconProvider.
 * Change this single export to switch the entire app.
 */
export const APP_ICON_WEIGHT = 'regular' as const; // thin | light | regular | bold | fill | duotone

// Status/solid icons opt out with explicit weight="fill" per usage:
// <ShieldCheck weight="fill" />, <Heart weight="fill" /> etc.
// Preview toggle in index.html is page-local only — does not mutate this file.

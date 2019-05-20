const BRAKEPOINTS_PX = {
    MOBILE: 600,
    MEDIUM: 790
};

export const BRAKEPOINTS_QUERY = {
    MOBILE: `(max-width: ${BRAKEPOINTS_PX.MOBILE}px)`,
    MEDIUM: `(min-width: ${BRAKEPOINTS_PX.MEDIUM}px)`
};

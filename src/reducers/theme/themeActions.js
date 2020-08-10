const {SWITCH_THEME} = require('../../lib/constants').default;

export const switchTheme = payload => {
    return {
        type: SWITCH_THEME,
        payload
    }
}
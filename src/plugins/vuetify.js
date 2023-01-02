import {createApp} from 'vue'
import {createVuetify} from 'vuetify'

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            myCustomTheme: {
                dark: false,
                colors: {
                    ..., // We have omitted the standard color properties here to emphasize the custom one that we've added
                    something: '#00ff00'
                }
            }
        }
    }
})
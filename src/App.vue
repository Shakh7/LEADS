<template>
  <v-layout>

    <v-app-bar :elevation="1">

      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Leads</v-app-bar-title>

      <template v-slot:append>
        <v-avatar color="secondary" class="me-5">
        A
      </v-avatar>
      </template>

      <v-spacer></v-spacer>

      <v-btn class="me-3 px-0"
             @click="toggleTheme()"
      >
        <v-icon :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'">
        </v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import {useTheme} from 'vuetify'

export default {
  setup() {
    const theme = useTheme()
    let bgColor = theme.global.current.value.dark ? 'dark' : 'light'

    return {
      theme, bgColor,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
    }
  }
}
</script>


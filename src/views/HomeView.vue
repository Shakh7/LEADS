<template>
  <v-card class="mx-auto mt-10" max-width="800" elevation="2">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-autocomplete
              v-model="model"
              v-model:search="search"
              :items="items"
              :loading="isLoading"
              hide-no-data
              hide-selected
              label="What is your vehicle year?"
              :placeholder="'Year should be greater than' + ' ' + minYear"
          ></v-autocomplete>

          <h1 class="text-caption text-grey-darken-1">
            If you don’t know the year, let’s find one similar by entering the
            year you purchased your vehicle
          </h1>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
              placeholder="ie Ford Explorer"
              label="What is the make and model?"
              type="text"
          ></v-text-field>
          <span class="text-caption text-grey-darken-1">
            Please select a make/model from the drop-down
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
          <v-text-field
              placeholder="ie Dallas, Texas or 75201"
              label="Where should we pick up your vehicle?"
              type="text"
          ></v-text-field>
          <span class="text-caption text-grey-darken-1">
            Begin by entering the city of your pick up location
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="4">
        <div class="pa-4 text-center">
          <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="text-caption text-grey">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn v-if="step > 1" variant="text" @click="step--"> Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="step < 4" color="primary" @click="step++"> Next</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    step: 1,
    minYear: 2000,
    maxYear: 2023,

    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Vehicle year";
        case 2:
          return "Make and model";
        case 3:
          return "Pick up location";
        default:
          return "Account created";
      }
    },

    items() {
      return this.entries
    },
  },

  watch: {
    search(val) {
      if (this.search.length < 3) {
        this.entries = [];
        return;
      } else {
        this.isLoading = true;
        let years = [];
        for (let i = this.minYear; i <= this.maxYear; i++) {
          years.push(i);
        }

        this.entries = years.filter(y => y.toString().includes(val)).slice(0, 6).map(year => year);
        this.isLoading = false;
      }
    },
  },

  methods: {
    range(_start_, _end_) {
      return new Array(_end_ - _start_ + 1)
          .fill(undefined)
          .map((_, k) => k + _start_);
    },
  },
};
</script>

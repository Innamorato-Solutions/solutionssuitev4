import { defineStore } from "pinia";
import { MainApp, MainAppMode, MainAppState } from './ts_types/MainAppState';


export const useMainStore = defineStore('mainStore', {
  state: () => {
    return {
      mainApp: {
        state: MainAppState.IDLE,
        mode: MainAppMode.NONE
      } as MainApp,
    }
  },
  getters: {
    getState: (state) => state.mainApp.state,
    getMode: (state) => state.mainApp.mode,
  },
  actions: {
    changeState(nState: MainAppState) {
      this.mainApp.state = nState
    },
    changeMode(nMode: MainAppMode) {
      this.mainApp.mode = nMode
    },
  }
})
import { defineStore } from "pinia";
import { SolutionsSuite, App } from "../ts_types/SolSuiteState";


export const useSolutionsSuiteStore = defineStore('solutionsSuiteStore', {
  state: () => {
    return {
      showSidebar: true,
      apps: [],
      tabActiveKey: 0
    } as SolutionsSuite
  },
  getters: {
    getTabActiveKey(): number { return this.tabActiveKey },
  },
  actions: {
    openApp(app: App) {
      this.apps.push(app)
      if (this.tabActiveKey < 0) {
        this.tabActiveKey = 0
      } else {
        if (this.apps.length === 1) {
          this.tabActiveKey = 0
        } else {
          this.tabActiveKey = this.apps.length - 1
        }
      }
    },
    removeApp(index: number) {
      if (this.apps.length === 0) {
        return;
      } else {
        this.apps = this.apps.filter((val, i) => (i === index ? false : true))
        if (index === 0) {
          this.tabActiveKey = 0
          return
        }
        this.tabActiveKey = (index - 1)
      }
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    setSidebar(state: boolean) {
      if (state) {
        this.showSidebar = state
      }
    },
  }
})
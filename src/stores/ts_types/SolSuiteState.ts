export interface SolutionsSuite {
  showSidebar: boolean,
  apps: App[]
  tabActiveKey: number
}

export interface App {
  name: string
  active: boolean
}
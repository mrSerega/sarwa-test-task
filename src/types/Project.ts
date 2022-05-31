export interface Project {
  coverImage?: string
  clientName: string
  title: string
  projectUrl: string
  industry: ProjectIndustry
  category: ProjectCategory
}

export enum ProjectIndustry {
  CATS = 'CATS',
  DOGS = 'DOGS',
  POKEMONS = 'POKEMONS'
}

export enum ProjectCategory {
  AWESOME = 'AWESOME',
  COOL = 'COOL',
  MEH = 'MEH'
}

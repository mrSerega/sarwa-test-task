import { rest } from 'msw'
import { MOCK_PROJECT_LIST } from '../fixtures'
import { ProjectCategory, ProjectIndustry } from '../types'

export const handlers = [
  rest.get('/projects', async (req, res, ctx) => {
    await new Promise((res, _rej) => {
      setTimeout(() => res(true), 1000)
    })

    const searchIndustries = req.url.searchParams.getAll('industry')
    const industries = searchIndustries.length === 0 ? Object.keys(ProjectIndustry) : searchIndustries

    const searchCategories =  req.url.searchParams.getAll('category')
    const categories = searchCategories.length === 0 ? Object.keys(ProjectCategory) : searchCategories

    return res(
      ctx.status(200),
      ctx.json(
        MOCK_PROJECT_LIST
          .filter(
            project => 
              industries.includes(project.industry) && categories.includes(project.category)
          )
      )
    )
  }),
]
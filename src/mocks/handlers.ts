import { rest } from 'msw'
import { MOCK_PROJECT_LIST } from '../fixtures'
import { ProjectIndustry } from '../types'

export const handlers = [
  rest.get('/projects', async (req, res, ctx) => {
    await new Promise((res, _rej) => {
      setTimeout(() => res(true), 1000)
    })

    const searchIndustries = req.url.searchParams.getAll('industries')
    const industries = searchIndustries.length === 0 ? Object.keys(ProjectIndustry) : searchIndustries

    return res(
      ctx.status(200),
      ctx.json(MOCK_PROJECT_LIST.filter(project => industries.includes(project.industry)))
    )
  }),
]
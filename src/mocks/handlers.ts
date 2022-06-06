import { rest } from 'msw'
import { MOCK_ACCOUNTS } from '../fixtures'
import { Account, AccountStatus } from '../types'

sessionStorage.setItem('accounts', JSON.stringify(MOCK_ACCOUNTS))

export const handlers = [
  rest.get('/accounts', async (req, res, ctx) => {
    console.log('TEST')

    await new Promise((res, _rej) => {
      setTimeout(() => res(true), 1000)
    })

    const accounts = JSON.parse(sessionStorage.getItem('accounts') ?? '') as Account[]

    const searchStatuses = req.url.searchParams.getAll('status')
    const statuses = searchStatuses.length === 0 ? Object.values(AccountStatus) : searchStatuses

    return res(
      ctx.status(200),
      ctx.json(
        accounts
          .filter(
            account => 
              statuses.includes(account.status)
          )
        )
    )
  }),
  rest.post('/account', async (req, res, ctx) => {
    if(req.body && typeof req.body === 'string') {
      const body = JSON.parse(req.body)
      let accounts = JSON.parse(sessionStorage.getItem('accounts') ?? '') as Account[]
      accounts = accounts.map(account => {
        if (account.id === body.id) {
          return {
            ...account,
            status: body.status
          }
        }
        return account
      })

      console.log('accounts', accounts)

      sessionStorage.setItem('accounts', JSON.stringify(accounts))
    }
    ctx.status(200)
  })
]
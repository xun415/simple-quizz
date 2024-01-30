import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'

type CustomRenderOptions = {
  routeHistory?: Array<string>
  initialRouterIndex?: number
  renderOptions?: Omit<RenderOptions, "wrapper">
}

type CustomRenderResult = RenderResult & { history: MemoryHistory }

function render(ui: ReactElement, { routeHistory, initialRouterIndex, ...renderOptions}: CustomRenderOptions): CustomRenderResult {

  const history = createMemoryHistory({
    initialEntries: routeHistory,
    initialIndex: initialRouterIndex
  })

  const Wrapper =({ children }: { children: ReactElement }) => {
    return (
        <Router location={history.location} navigator={history} >
          {children}
        </Router>
    )
  }

  const rtlRenderObject = rtlRender(ui, { wrapper: Wrapper, ...renderOptions })

  return { ...rtlRenderObject, history }
}

export * from "@testing-library/react"
export * from '@testing-library/user-event'
export { render }
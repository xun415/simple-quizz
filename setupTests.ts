import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import {server} from "./src/mocks/server.ts";
import 'vitest-canvas-mock'

vi.mock('zustand')



beforeAll(() => {
  server.listen() // msw
  // chart -> canvas mock 필요
  // @ts-ignore
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
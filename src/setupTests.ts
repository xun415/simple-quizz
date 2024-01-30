import { afterAll, afterEach, beforeAll } from 'vitest'
import {server} from "./mocks/server.ts";

beforeAll(() => {
  server.listen() // msw
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
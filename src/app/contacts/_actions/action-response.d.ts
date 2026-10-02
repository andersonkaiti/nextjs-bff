import type { ZodError } from 'zod'

export interface IActionResponse {
  status: 'error' | 'success'
  body?: Record<string, string | ZodError>
}

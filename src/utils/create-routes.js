import { buildRoutePath } from './build-route-path.js'

export function createRoutes(routes = []) {
  return routes.map((route) => {
    return {
      ...route,
      path: buildRoutePath(route.path)
    }
  })
}
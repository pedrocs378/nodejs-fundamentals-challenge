import { createTask } from './use-cases/create-task.js'
import { listTasks } from './use-cases/list-tasks.js'
import { deleteTask } from './use-cases/delete-task.js'
import { updateTask } from './use-cases/update-task.js'
import { completeTask } from './use-cases/complete-task.js'

import { createRoutes } from './utils/create-routes.js'

export const routes = createRoutes([
  {
    method: 'GET',
    path: '/tasks',
    handler: listTasks,
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: createTask
  },
  {
    method: 'DELETE',
    path: '/tasks/:id',
    handler: deleteTask
  },
  {
    method: 'PUT',
    path: '/tasks/:id',
    handler: updateTask
  },
  {
    method: 'PATCH',
    path: '/tasks/:id/complete',
    handler: completeTask
  }
])
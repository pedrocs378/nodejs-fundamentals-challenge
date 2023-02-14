import { database } from '../database.js'

export function updateTask(req, res) {
  try {
    const { id } = req.params
    const { title, description } = req.body

    if (!title?.trim()) {
      return res.writeHead(400).end(JSON.stringify({
        error: 'Title must be provided'
      }))
    }

    if (!description?.trim()) {
      return res.writeHead(400).end(JSON.stringify({
        error: 'Description must be provided'
      }))
    }

    const task = database.findOne('tasks', id)

    if (!task) {
      return res.writeHead(404).end(JSON.stringify({
        error: 'Task not found'
      }))
    }

    database.update('tasks', id, {
      title,
      description,
      updated_at: new Date()
    })

    return res.writeHead(204).end()
  } catch (error) {
    if (error instanceof Error) {
      return res.writeHead(500).end(JSON.stringify(error.message))
    }
  }
}
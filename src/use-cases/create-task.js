import { randomUUID } from 'node:crypto'

import { database } from '../database.js'

export function createTask(req, res) {
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

  const task = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date()
  }

  database.insert('tasks', task)

  return res.writeHead(201).end()
}
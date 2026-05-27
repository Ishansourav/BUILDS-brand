import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { linksPage } from './pages/links'
import { contactPage } from './pages/contact'
import { waitlistPage } from './pages/waitlist'

const app = new Hono()

app.use(renderer)
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/images/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.render(homePage(), { title: 'SANIBUILDS – Building in Public. Creating in Silence.' })
})

app.get('/about', (c) => {
  return c.render(aboutPage(), { title: 'About – SANIBUILDS' })
})

app.get('/links', (c) => {
  return c.render(linksPage(), { title: 'Links – SANIBUILDS' })
})

app.get('/contact', (c) => {
  return c.render(contactPage(), { title: 'Contact – SANIBUILDS' })
})

app.get('/waitlist', (c) => {
  return c.render(waitlistPage(), { title: 'Join the Inner Circle – SANIBUILDS' })
})

// API endpoint for waitlist (frontend-only simulation)
app.post('/api/waitlist', async (c) => {
  const body = await c.req.json()
  const { name, email } = body
  if (!name || !email) {
    return c.json({ success: false, message: 'Name and email are required.' }, 400)
  }
  // Phase 1: just acknowledge
  return c.json({ success: true, message: "You're on the list!" })
})

export default app

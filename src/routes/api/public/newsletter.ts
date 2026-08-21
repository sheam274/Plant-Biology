import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { supabase } from '@/integrations/supabase/client'

export const Route = createFileRoute('/api/public/newsletter')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json()
          const { email } = z.object({ email: z.string().email() }).parse(body)

          const { error } = await supabase
            .from('newsletter_subscribers')
            .insert([{ email }])

          if (error) {
            if (error.code === '23505') {
              return new Response(JSON.stringify({ message: 'Already subscribed' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
              })
            }
            throw error
          }

          return new Response(JSON.stringify({ message: 'Subscribed successfully' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (err) {
          console.error('Newsletter error:', err)
          return new Response(JSON.stringify({ error: 'Invalid request' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },
    },
  },
})

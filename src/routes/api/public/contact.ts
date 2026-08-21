import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { supabase } from '@/integrations/supabase/client'

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json()
          const validated = z.object({
            name: z.string().min(2),
            email: z.string().email(),
            message: z.string().min(10),
          }).parse(body)

          const { error } = await supabase
            .from('contact_messages')
            .insert([validated])

          if (error) throw error

          return new Response(JSON.stringify({ message: 'Message sent' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (err) {
          console.error('Contact error:', err)
          return new Response(JSON.stringify({ error: 'Invalid request' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },
    },
  },
})

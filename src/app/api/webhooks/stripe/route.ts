import { headers } from 'next/headers'
import type Stripe from 'stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) return new Response('No signature', { status: 400 })

  let event: Stripe.Event

  try {
    const { default: Stripe } = await import('stripe')
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return new Response(`Webhook error: ${err instanceof Error ? err.message : 'Unknown error'}`, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      break
    }
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      break
    }
  }

  return new Response(null, { status: 200 })
}

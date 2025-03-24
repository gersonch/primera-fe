import { Vexor } from 'vexor'

export const vexor = new Vexor({
  publishableKey: process.env.NEXT_PUBLIC_VEXOR_PUBLISHABLE_KEY!,
  secretKey: process.env.VEXOR_SECRET_KEY!,
  projectId: process.env.NEXT_PUBLIC_VEXOR_PROJECT!,
})

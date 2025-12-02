import { ArrowLeft, Command, Eye, Globe, Loader2, MapPin, Send } from 'lucide-react'
import {
  SiAndroid,
  SiDiscord,
  SiFivem,
  SiGithub,
  SiGmail,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { FaStar } from 'react-icons/fa'
import { cn } from '@/lib/utils'

export type ValidIcon = keyof typeof Icons

export const Icons = {
  Logo: Command,
  Contact: Send,
  Next: SiNextdotjs,
  React: SiReact,
  JavaScript: SiJavascript,
  Android: SiAndroid,
  Fivem: SiFivem,
  OpenAI: SiOpenai,
  Tailwind: SiTailwindcss,
  MongoDB: SiMongodb,
  Github: SiGithub,
  Star: FaStar,
  LinkedIn: SiLinkedin,
  Discord: SiDiscord,
  Gmail: SiGmail,
  Loading: ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
    <Loader2 className={cn('animate-spin w-4 h-4', className)} />
  ),
  ArrowLeft,
  Eye,
  Globe,
  Location: MapPin,
}

import {
  Briefcase,
  Code,
  Home,
  Shield,
  ShieldCheck,
  Dog,
  Sparkles,
  Moon,
  Star,
  Wallet,
  Handshake,
  HeartHandshake,
  Heart,
  Building2,
  VolumeX,
  CheckCircle2,
  Footprints,
  Users,
  Bot,
  Wind,
  SprayCan,
  Wrench,
  Mail,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

// Simple outline icons (Lucide) referenced by string name from content.ts.
const map: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  code: Code,
  home: Home,
  shield: Shield,
  "shield-check": ShieldCheck,
  dog: Dog,
  sparkles: Sparkles,
  moon: Moon,
  star: Star,
  wallet: Wallet,
  handshake: Handshake,
  "heart-handshake": HeartHandshake,
  heart: Heart,
  building: Building2,
  "volume-x": VolumeX,
  "check-circle": CheckCircle2,
  footprints: Footprints,
  users: Users,
  bot: Bot,
  wind: Wind,
  "spray-can": SprayCan,
  wrench: Wrench,
  email: Mail,
  linkedin: Linkedin,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

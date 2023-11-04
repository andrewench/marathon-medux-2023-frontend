import {
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Star,
  Stethoscope,
  Users,
  Wallet2,
} from 'lucide-react'

const iconProps = {
  size: 20,
  strokeWidth: 1.25,
  className: 'icon',
}

export const SideBarList = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard {...iconProps} />,
  },
  {
    href: '/appointments',
    label: 'Appointments',
    icon: <Calendar {...iconProps} />,
  },
  {
    href: '/patients',
    label: 'Patients',
    icon: <Users {...iconProps} />,
  },
  {
    href: '/doctors',
    label: 'Doctors',
    icon: <Stethoscope {...iconProps} />,
  },
  {
    href: '/messages',
    label: 'Messages',
    icon: <MessageSquare {...iconProps} />,
  },
  {
    href: '/reviews',
    label: 'Reviews',
    icon: <Star {...iconProps} />,
  },
  {
    href: '/finances',
    label: 'Finances',
    icon: <Wallet2 {...iconProps} />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <Settings {...iconProps} />,
  },
]

import {
  CalendarIcon,
  DashboardIcon,
  DoctorsIcon,
  FinancesIcon,
  MessageIcon,
  PeopleIcon,
  StarIcon,
} from '@/components/icons'

export const SideBarList = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    href: '/appointments',
    label: 'Appointments',
    icon: <CalendarIcon />,
  },
  {
    href: '/patients',
    label: 'Patients',
    icon: <PeopleIcon />,
  },
  {
    href: '/doctors',
    label: 'Doctors',
    icon: <DoctorsIcon />,
  },
  {
    href: '/messages',
    label: 'Messages',
    icon: <MessageIcon />,
  },
  {
    href: '/reviews',
    label: 'Reviews',
    icon: <StarIcon />,
  },
  {
    href: '/finances',
    label: 'Finances',
    icon: <FinancesIcon />,
  },
]

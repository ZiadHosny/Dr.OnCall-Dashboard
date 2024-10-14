import { mdiMenu, mdiAccount, mdiCogOutline, mdiEmail, mdiLogout, mdiThemeLightDark } from '@mdi/js'

export type MenuNavBarItem = {
  label?: string
  icon?: string
  href?: string
  target?: string
  isDivider?: boolean
  isLogout?: boolean
  isDesktopNoLabel?: boolean
  isToggleLightDark?: boolean
  isCurrentUser?: boolean
  isIconImg?: boolean
  menu?: MenuNavBarItem[]
}

const menuNavBar: MenuNavBarItem[] = [
  {
    icon: mdiMenu,
    label: 'Language',
    menu: [
      {
        isIconImg: true,
        icon: 'flags/eg.svg',
        label: 'Arabic',
      },
      {
        isIconImg: true,
        icon: 'flags/us.svg',
        label: 'English',
      },
    ],
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'My Profile',
        href: '/profile',
      },
      {
        icon: mdiCogOutline,
        label: 'Settings',
      },
      {
        icon: mdiEmail,
        label: 'Messages',
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
  {
    icon: mdiLogout,
    label: 'Log out',
    isDesktopNoLabel: true,
    isLogout: true,
  },
]

export default menuNavBar

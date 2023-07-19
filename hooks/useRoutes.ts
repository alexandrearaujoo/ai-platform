import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon
} from 'lucide-react';

export const useRoutes = () => {
  const routes = [
    {
      id: 1,
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: '#06b6d4'
    },
    {
      id: 2,
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: '#8b5cf6'
    },
    {
      id: 3,
      label: 'Image Generation',
      icon: ImageIcon,
      href: '/image',
      color: '#be185d'
    },
    {
      id: 4,
      label: 'Video Generation',
      icon: VideoIcon,
      href: '/video',
      color: '#c2410c'
    },
    {
      id: 5,
      label: 'Music Generation',
      icon: Music,
      href: '/music',
      color: '#10b981'
    },
    {
      id: 6,
      label: 'Code Generation',
      icon: Code,
      href: '/code',
      color: '#15803d'
    },
    {
      id: 7,
      label: 'Settings',
      icon: Settings,
      href: '/settings'
    }
  ];

  return { routes };
};

import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
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
      label: 'Bate-Papo',
      icon: MessageSquare,
      href: '/conversation',
      color: '#8b5cf6'
    },
    {
      id: 3,
      label: 'Geração de Imagens',
      icon: ImageIcon,
      href: '/image',
      color: '#be185d'
    },
    {
      id: 4,
      label: 'Geração de Vídeos',
      icon: VideoIcon,
      href: '/video',
      color: '#c2410c'
    },
    {
      id: 5,
      label: 'Geração de Músicas',
      icon: Music,
      href: '/music',
      color: '#10b981'
    },
    {
      id: 6,
      label: 'Geração de Codigo',
      icon: Code,
      href: '/code',
      color: '#15803d'
    },
    {
      id: 7,
      label: 'Configurações',
      icon: Settings,
      href: '/settings'
    }
  ];

  return { routes, pathname };
};

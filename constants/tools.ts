import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from 'lucide-react';

export const tools = [
  {
    id: 1,
    label: 'Conversation',
    icon: MessageSquare,
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246 , 0.1)',
    href: '/conversation'
  },
  {
    id: 2,
    label: 'Music Generation',
    icon: Music,
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    href: '/music'
  },
  {
    id: 3,
    label: 'Image Generation',
    icon: ImageIcon,
    color: '#be185d',
    bgColor: 'rgba(190, 24, 93, 0.1)',
    href: '/image'
  },
  {
    id: 4,
    label: 'Video Generation',
    icon: VideoIcon,
    color: '#c2410c',
    bgColor: 'rgba(194, 65, 12, 0.1)',
    href: '/video'
  },
  {
    id: 5,
    label: 'Code Generation',
    icon: Code,
    color: '#15803d',
    bgColor: 'rgba(21, 128, 61, 0.1)',
    href: '/code'
  }
];

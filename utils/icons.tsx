import {
    Sparkles,
    Home,
    Hammer,
    Key,
    Move,
    ShieldCheck,
    Clock,
    Star,
    MapPin,
    Layers,
    Feather,
    Armchair,
    Brush,
    Fan,
    Gem,
    PanelTop,
    ClipboardCheck,
    Eraser,
    Bed,
    Camera,
    LucideIcon,
} from 'lucide-react';

// Icon name to component mapping
const iconMap: Record<string, LucideIcon> = {
    Sparkles,
    Home,
    Hammer,
    Key,
    Move,
    ShieldCheck,
    Clock,
    Star,
    MapPin,
    Layers,
    Feather,
    Armchair,
    Brush,
    Fan,
    Gem,
    PanelTop,
    ClipboardCheck,
    Eraser,
    Bed,
    Camera,
};

/**
 * Get a Lucide icon component by name
 * @param iconName - The name of the icon (e.g., 'Sparkles', 'Home')
 * @returns The icon component or Sparkles as fallback
 */
export function getIcon(iconName: string): LucideIcon {
    return iconMap[iconName] || Sparkles;
}

export default iconMap;

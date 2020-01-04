// Sidebar route metadata
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    badge: string;
    badgeClass?: '';
    isExternalLink?: boolean;
    submenu: RouteInfo[];
}

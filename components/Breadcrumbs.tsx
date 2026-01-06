import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    // Build breadcrumb items based on path
    const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    if (pathnames.length > 0) {
        const type = pathnames[0];
        const slug = pathnames[1];

        if (type === 'service' && slug) {
            breadcrumbItems.push({ label: 'Services', href: '/#services' });
            // Convert slug to title case
            const title = slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            breadcrumbItems.push({ label: title });
        } else if (type === 'location' && slug) {
            breadcrumbItems.push({ label: 'Locations', href: '/#locations' });
            const title = slug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            breadcrumbItems.push({ label: title });
        } else if (type === 'about') {
            breadcrumbItems.push({ label: 'About Us' });
        } else if (type === 'booking') {
            breadcrumbItems.push({ label: 'Book Now' });
        } else if (type === 'policies') {
            breadcrumbItems.push({ label: 'Policies' });
        } else if (type === 'house-cleaning') {
            breadcrumbItems.push({ label: 'House Cleaning' });
        } else if (type === 'blog') {
            breadcrumbItems.push({ label: 'Blog', href: slug ? '/blog' : undefined });
            if (slug) {
                // Convert slug to readable title
                const title = slug
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                breadcrumbItems.push({ label: title });
            }
        }
    }

    // Don't show breadcrumbs on homepage
    if (pathnames.length === 0) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="bg-slate-100 py-3 mt-14">
            <div className="container mx-auto px-4">
                <ol
                    className="flex items-center flex-wrap text-sm"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                >
                    {breadcrumbItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 mx-2 text-slate-400" aria-hidden="true" />
                            )}
                            {item.href ? (
                                <Link
                                    to={item.href}
                                    className="text-teal-600 hover:text-teal-700 flex items-center"
                                    itemProp="item"
                                >
                                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                    <span itemProp="name">{item.label}</span>
                                </Link>
                            ) : (
                                <span className="text-slate-600 font-medium" itemProp="name">
                                    {item.label}
                                </span>
                            )}
                            <meta itemProp="position" content={String(index + 1)} />
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;

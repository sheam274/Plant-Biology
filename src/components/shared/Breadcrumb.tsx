import React from "react";
import { Link, useRouterState } from "@tanstack/react-router";

export const Breadcrumb: React.FC = () => {
  const routerState = useRouterState();
  const pathnames = routerState.location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": typeof window !== "undefined" ? window.location.origin : ""
      },
      ...pathnames.map((name, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": name.replace(/-/g, " "),
        "item": typeof window !== "undefined" ? `${window.location.origin}/${pathnames.slice(0, index + 1).join("/")}` : ""
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 mono-data text-[10px] text-primary-soft uppercase tracking-wider">
          <li>
            <Link to="/" className="hover-underline">
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={name}>
                <li className="text-amber">/</li>
                <li>
                  {isLast ? (
                    <span className="text-ink">{name.replace(/-/g, " ")}</span>
                  ) : (
                    <Link
                      to={routeTo as any}
                      className="hover-underline"
                    >
                      {name.replace(/-/g, " ")}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

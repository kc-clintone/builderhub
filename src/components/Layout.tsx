import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'BuilderHub',
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                🚀 BuilderHub
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="/roadmap"
                className="text-gray-700 hover:text-gray-900"
              >
                Roadmap
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                href="/community"
                className="text-gray-700 hover:text-gray-900"
              >
                Community
              </Link>
              <Link href="/docs" className="text-gray-700 hover:text-gray-900">
                Docs
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                BuilderHub
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Learn fullstack development through real project contributions.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Learn
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/roadmap"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Learning Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Community
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/community"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Join Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contributors"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Contributors
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://github.com/kc-clintone/builderhub"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              © 2026 BuilderHub. Open source and community-driven.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

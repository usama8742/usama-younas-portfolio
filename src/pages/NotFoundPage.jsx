import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 Page Not Found | 3X AI Automation"
        description="The requested page could not be found on 3X AI Automation."
        canonicalUrl="/404"
      />

      <div className="min-h-[80vh] bg-[#030712] text-slate-100 flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-mono text-3xl font-black mb-6 shadow-glow-cyan">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-400 max-w-md mb-8 font-normal text-sm sm:text-base">
          The page or route you requested does not exist or has been moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link to="/services" className="btn-secondary">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </>
  );
}

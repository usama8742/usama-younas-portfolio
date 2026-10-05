import React, { useEffect } from 'react';

const SITE_URL = 'https://usama-ai-portfolio.vercel.app';
const SITE_NAME = '3X AI Automation';

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/hero.png',
  schemaData = null,
}) {
  useEffect(() => {
    // 1. Update Title
    const pageTitle = title ? title : `${SITE_NAME} | AI Automation Agency & Enterprise Solutions`;
    document.title = pageTitle;

    // 2. Helper to set or update meta tag
    const updateMetaTag = (selector, attr, attrValue, content) => {
      let element = document.querySelector(`${selector}[${attr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };

    // Description & Keywords
    if (description) updateMetaTag('meta', 'name', 'description', description);
    if (keywords) updateMetaTag('meta', 'name', 'keywords', keywords);

    // Open Graph
    updateMetaTag('meta', 'property', 'og:title', pageTitle);
    if (description) updateMetaTag('meta', 'property', 'og:description', description);
    updateMetaTag('meta', 'property', 'og:type', 'website');
    updateMetaTag('meta', 'property', 'og:site_name', SITE_NAME);

    const fullCanonical = canonicalUrl 
      ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${SITE_URL}${canonicalUrl.startsWith('/') ? canonicalUrl : '/' + canonicalUrl}`)
      : `${SITE_URL}${window.location.pathname}`;

    updateMetaTag('meta', 'property', 'og:url', fullCanonical);
    
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;
    updateMetaTag('meta', 'property', 'og:image', fullOgImage);

    // Twitter Card
    updateMetaTag('meta', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta', 'name', 'twitter:title', pageTitle);
    if (description) updateMetaTag('meta', 'name', 'twitter:description', description);
    updateMetaTag('meta', 'name', 'twitter:image', fullOgImage);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. JSON-LD Structured Data
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup dynamically injected script if needed
      const script = document.getElementById('json-ld-schema');
      if (script) script.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, schemaData]);

  return null;
}

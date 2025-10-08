"use client";

import { useEffect, useRef } from "react";

interface LivePreviewProps {
  code: string;
}

export default function LivePreview({ code }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current || !code) return;

    // ✅ Nettoyage complet du code
    const cleanCode = code
      // ✅ Supprime tout texte avant export default function
      .replace(/^[\s\S]*?(?=export\s+default\s+function)/g, "")
      // Supprime tous les blocs markdown
      .replace(/```(?:tsx?|typescript|javascript|jsx?)?\n?/g, "")
      .replace(/```\n?$/g, "")
      // Supprime les explications après la fonction
      .replace(
        /(export\s+default\s+function\s+\w+\s*\([^)]*\)\s*\{[\s\S]*?\})[\s\S]*$/g,
        "$1"
      )
      // Supprime "use client"
      .replace(/^["']?use client["']?;?\s*\n?/g, "")
      // Nettoie les espaces
      .trim();

    // ✅ Extrait le nom du composant depuis export default
    const extractComponentName = (code: string): string => {
      // Cherche export default function ComponentName()
      const functionMatch = code.match(/export\s+default\s+function\s+(\w+)/);
      if (functionMatch) {
        return functionMatch[1];
      }

      // Fallback
      return "App";
    };

    const componentName = extractComponentName(cleanCode);

    // ✅ Transforme les imports/exports pour l'iframe
    const transformedCode = cleanCode
      // Remplace les imports React par du global
      .replace(
        /import\s+React(?:\s*,\s*\{[^}]*\})?\s+from\s+['"]react['"];?\s*/g,
        ""
      )
      .replace(
        /import\s+\{([^}]+)\}\s+from\s+['"]react['"];?\s*/g,
        (match, hooks) => {
          // Transforme { useState, useEffect } en const { useState, useEffect } = React;
          return `const { ${hooks} } = React;\n`;
        }
      )
      // Supprime export default (on le gère manuellement)
      .replace(/export\s+default\s+\w+;?\s*$/g, "");

    // Avant htmlContent
    const safeCode = transformedCode
      .replace(/`/g, "\\`") // échappe les backticks
      .replace(/"/g, '\\"') // échappe les guillemets doubles
      .replace(/'/g, "\\'") // échappe les guillemets simples
      .replace(/\n/g, "\\n"); // échappe les retours à la ligne

    // Template HTML avec Tailwind CDN
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { 
            margin: 0; 
            padding: 16px; 
            font-family: system-ui; 
            background: white;
          }
          .error {
            color: red;
            background: #fee;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #fcc;
            white-space: pre-wrap;
            font-family: monospace;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/babel">
          // ✅ Les imports/exports sont maintenant transformés
          ${transformedCode}
          
          // Rend le composant
          try {
            const container = document.getElementById('root');
            const root = ReactDOM.createRoot(container);
            
            // ✅ Utilise le nom de composant détecté
            let ComponentToRender = null;
            
            // Cherche le composant par son nom
            if (typeof ${componentName} !== 'undefined') {
              ComponentToRender = ${componentName};
            } else {
              // Fallback: cherche parmi les noms communs
              const possibleNames = ['BlueButton', 'PurpleButton', 'Button', 'Card', 'Modal', 'Form', 'App', 'Component'];
              for (const name of possibleNames) {
                if (typeof window[name] !== 'undefined') {
                  ComponentToRender = window[name];
                  break;
                }
              }
            }
            
            if (ComponentToRender && typeof ComponentToRender === 'function') {
              root.render(React.createElement(ComponentToRender));
            } else {
root.render(React.createElement('div', { className: 'error' }, 
  "Component ${componentName} not found.\\n\\nTransformed code:\\n" + "${safeCode}"));
            }
            
          } catch (error) {
            console.error('Preview error:', error);
            const container = document.getElementById('root');
            container.innerHTML = '<div class="error">Render Error:\\n' + error.message + '\\n\\nStack:\\n' + (error.stack || 'No stack trace') + '</div>';
          }
        </script>
      </body>
      </html>
    `;

    // Injecte dans l'iframe
    const iframe = iframeRef.current;
    iframe.srcdoc = htmlContent;
  }, [code]);

  return (
    <div className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        className="w-full h-full border-0 rounded"
        title="Component Preview"
        sandbox="allow-scripts allow-same-origin"
      />
      {/* ✅ Debug info - retire en prod */}
      <div className="absolute top-2 right-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-70">
        Live Preview
      </div>
    </div>
  );
}

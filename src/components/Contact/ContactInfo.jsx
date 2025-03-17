import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContactInfo = ({ icon, title, content, link, href }) => {
  const [copied, setCopied] = useState(false);
  
  // Function to copy text to clipboard
  const copyToClipboard = async (text) => {
    try {
      // Try the modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
      
      // Fallback for older browsers and non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      // Handle iOS specific issues
      if (navigator.userAgent.match(/ipad|iphone/i)) {
        textArea.contentEditable = true;
        textArea.readOnly = false;
        
        const range = document.createRange();
        range.selectNodeContents(textArea);
        
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
      
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
        {icon}
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="flex items-center">
          {link ? (
            <a href={href} className="text-indigo-600 hover:text-indigo-800">
              {content}
            </a>
          ) : (
            <p className="text-gray-600">{content}</p>
          )}
          
          {/* Only show copy button for email and phone */}
          {(title === 'Email' || title === 'Phone') && (
            <button 
              onClick={() => copyToClipboard(content)}
              className="ml-2 p-1 text-gray-400 hover:text-indigo-600 focus:outline-none"
              aria-label={`Copy ${title} to clipboard`}
              title={`Copy ${title} to clipboard`}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
            <a
              href="/public/PDFs//Resume AmitHalbreich.pdf"
              download
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="mb-8">
            <embed
              src="/public/PDFs/Resume AmitHalbreich.pdf"
              type="application/pdf"
              className="w-full h-96 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

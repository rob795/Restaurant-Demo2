import React from 'react';

const DemoNotice = () => (
  <aside aria-label="About this design demo" className="mt-20 bg-[#0f172a] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <p className="font-semibold text-[#ECEC75] mb-1">Illustrative design demo</p>
      <p className="text-sm leading-relaxed text-gray-200">
        La Maison Verte is fictional. All content and prices are samples. Forms are not connected and no reservations are accepted.
      </p>
      <details className="mt-3 text-sm text-gray-200">
        <summary className="cursor-pointer font-medium text-[#ECEC75] w-fit">Separate $500 offer: one page + one revision</summary>
        <p className="mt-2 max-w-4xl leading-relaxed">
          This three-page demo shows design possibilities. The separate $500 offer covers one page with services,
          contact information and a quote button, plus one revision. Extra pages and reservation systems are not included.
          Domain, hosting and maintenance cost extra.
        </p>
      </details>
    </div>
  </aside>
);

export default DemoNotice;

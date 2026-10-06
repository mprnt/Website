import type { LegalBlock, LegalDocument as Doc } from '@/lib/legal';

const anchor = (heading: string) => `section-${heading.split('.')[0]}`;

// Turns "Email: x" / "Customer Support: +91 …" lines into tappable links.
function ContactLine({ line }: { line: string }) {
  const [label, ...rest] = line.split(':');
  const value = rest.join(':').trim();
  if (!value) return <>{line}</>;
  if (/^email$/i.test(label.trim())) {
    return (
      <>
        <strong className="text-text">{label}:</strong>{' '}
        <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a>
      </>
    );
  }
  if (/support|phone/i.test(label)) {
    return (
      <>
        <strong className="text-text">{label}:</strong>{' '}
        <a href={`tel:${value.replace(/[^\d+]/g, '')}`} className="text-primary hover:underline">{value}</a>
      </>
    );
  }
  return (
    <>
      <strong className="text-text">{label}:</strong> {value}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'h3':
      return <h3 className="text-lg font-semibold text-text mt-6 mb-2">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="list-disc pl-6 space-y-1.5 mb-4">
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case 'lines':
      return (
        <div className="bg-surface-secondary p-6 rounded-lg border border-border mb-4 space-y-2">
          {block.lines.map((line, i) => (
            <p key={line} className={i === 0 && !line.includes(':') ? 'font-semibold text-text' : ''}>
              <ContactLine line={line} />
            </p>
          ))}
        </div>
      );
    default:
      return <p className={`leading-relaxed mb-4 ${block.strong ? 'font-semibold text-text' : ''}`}>{block.text}</p>;
  }
}

export function LegalDocument({ doc }: { doc: Doc }) {
  return (
    <div className="text-text-muted">
      <div className="bg-surface-secondary p-6 rounded-lg border border-border mb-10 space-y-1.5 text-sm">
        <p><strong className="text-text">Effective date:</strong> {doc.effectiveDate}</p>
        {doc.meta.map((line) => (
          <p key={line}><ContactLine line={line} /></p>
        ))}
      </div>

      <nav aria-label="Contents" className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wider text-text mb-3">Contents</h2>
        <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
          {doc.sections.map((s) => (
            <li key={s.heading}>
              <a href={`#${anchor(s.heading)}`} className="hover:text-primary transition-colors">{s.heading}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-10">
        {doc.sections.map((s) => (
          <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-text mb-4">{s.heading}</h2>
            {s.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm">Last updated: {doc.lastUpdated}</p>
    </div>
  );
}

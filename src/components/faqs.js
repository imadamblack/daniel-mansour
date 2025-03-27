import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "How is this different from an agency?",
      a: "I don’t run campaigns or sell additional services. My job is to optimize your strategy and help you make better decisions."
    },
    {
      q: "How soon will I see results?",
      a: "It depends on your current strategy, but many businesses see improvements in 2-4 weeks."
    },
    {
      q: "Is the first consultation free?",
      a: "Yes. It’s an opportunity for me to assess whether I can truly help you."
    },
    {
      q: "Can I keep working with my current agency?",
      a: "Absolutely. The goal is to help you get the most out of their work while keeping full control."
    },
    {
      q: "What if I don’t see improvements after a month?",
      a: "I’ll help you set realistic expectations for results. If you’re not convinced, you can cancel anytime."
    }
  ];

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
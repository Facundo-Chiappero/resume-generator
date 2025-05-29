import { useEffect, useRef, useState } from "react"

export const FAQAccordion = () => {
  // Estado para controlar qué acordeón está abierto
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  // Array de preguntas y respuestas
  const faqs = [
    {
      question: "What's included in the Pro plan?",
      answer:
        "The Pro plan includes unlimited AI-powered resume enhancements. You'll get access to all our AI features to make your resume stand out to recruiters.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! You can cancel your Pro subscription at any time with no questions asked. There are no long-term commitments, and you'll continue to have access until the end of your billing period.",
    },
    {
      question: "How is the free plan different from Pro?",
      answer:
        "The free plan allows you to generate a basic resume, while the Pro plan unlocks unlimited AI suggestions to enhance your writing.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, all payments are processed securely through Stripe. We never store your full credit card details on our servers. Your transaction is protected with bank-level encryption.",
    },
  ]

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length)
  }, [faqs.length])

  // Función para manejar el clic en un acordeón
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getMaxHeight = (index: number): string => {
    const element = contentRefs.current[index]
    if (openIndex === index && element?.scrollHeight) {
      // + 32 to mimic the padding
      return `${element.scrollHeight + 32}px`
    }
    return "0"
  }

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    contentRefs.current[index] = el
  }

  return (
    <section className="w-full max-w-3xl mx-auto mt-8 mb-12 px-4">
      <h2 className="text-2xl font-bold   mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className="border border-light-background-primary dark:border-dark-background-primary
            rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none bg-light-background-secondary dark:bg-dark-background-secondary  cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium  ">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out
                         bg-light-background-tertiary dark:bg-dark-background-tertiary`}
              style={{
                maxHeight: getMaxHeight(index),
                opacity: openIndex === index ? 1 : 0,
                padding: openIndex === index ? "0.75rem 1rem" : "0 1rem",
              }}
            >
              <p ref={setRef(index)}>{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

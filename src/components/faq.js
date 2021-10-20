const faqs = [
    {
      id: 1,
      question: "What is your name?",
      answer:
        "My name is Jacob Kyed Andreassen.",
    },
    {
      id: 2,
      question: "How old are you?",
      answer:
        "I am currently 21 years old.",
    },
    {
      id: 3,
      question: "Where do you live?",
      answer:
        "I currently live in Denmark, Aalborg, where im studying Computer Science at Aalborg University.",
    },
    {
      id: 4,
      question: "What are your ambitions?",
      answer:
        "My ambition is to gain more knowledge about several coding languages. If I don't do this I try to expand my horizon with different kind of new skills.",
    },
    
]

export default function FAQ() {

    return (
    <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
    <div className="mt-6 pt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
            <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
    </div>
    )
 }
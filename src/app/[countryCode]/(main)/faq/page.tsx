import { Metadata } from 'next'

import { getFAQ } from '@lib/data/fetch'
import { Container } from '@modules/common/components/container'
import { FAQAccordion } from '@modules/content/components/faq-accordion'

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Find quick answers to common questions about our products/services.',
}

export default async function FAQPage() {
  const {
    data: { FAQSection },
  } = await getFAQ()

  return (
    <Container className="max-w-full bg-secondary px-0 py-0 small:px-0 small:py-0">
      <Container className="flex flex-col gap-10">
        {FAQSection.map((section, id) => (
          <FAQAccordion key={id} data={section} />
        ))}
      </Container>
    </Container>
  )
}

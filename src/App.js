import React from 'react';
import Accordion from './components/Accordion'

export default () => {
  const items = [
    {
      title: 'what is React?',
      content: 'React is frontend javascript framework.'
    },
    {
      title: 'why use React?',
      content: 'React is a favorite JS library among engineers.'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components.'
    }
  ]
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
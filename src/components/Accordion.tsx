import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { useState, useRef } from 'react';

const Accordion = () => {
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? '0px' : `${content.current?.scrollHeight}px`);
  }

  return (
    <Card>
      <CardHeader
        role="button"
        tabIndex={0}
        className={`cursor-pointer ${active ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <div
        ref={content}
        className="transition-height ease-in-out duration-200 overflow-hidden"
        style={{ maxHeight: height }}
      >
        <CardContent>Accordion content</CardContent>
      </div>
    </Card>
  );
};

export default Accordion;

import { Button } from '@/components/ui/button';

import { ClipboardList } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
      <Button>
        <ClipboardList className="mr-2 h-4 w-4" />
        Generate report
      </Button>
    </header>
  );
};

export default Header;

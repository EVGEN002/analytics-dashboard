import { ReactNode } from 'react';

import { Card } from '@/components/ui/card';
import Aside from '@/components/Aside';
import Header from '@/components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="theme-zinc grid min-h-screen w-full grid-cols-[280px_1fr]">
      <Aside />
      <div className="flex flex-col p-4">
        <Card className='p-4 min-h-full'>
          <Header />
          <main>{children}</main>
        </Card>
      </div>
    </div>
  );
};

export default Layout;

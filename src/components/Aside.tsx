import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import {
  Bell,
  LayoutDashboard,
  TableProperties,
  Calendar,
  Users,
  MessageCircle
} from 'lucide-react';

const Aside = () => {
  return (
    <div className="mg-muted/40 hidden border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <span className="text-xl font-semibold text-white">PROPS</span>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4"></Bell>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              Analytics
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <TableProperties className="h-4 w-4" />
              Properties
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Community
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              AI Chat
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Aside;

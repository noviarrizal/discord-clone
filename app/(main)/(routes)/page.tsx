import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </main>
  );
}

import DragCalendar from '@/components/DragCalendar';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen text-black">
      {/* Navbar components */}
      <Navbar />

      {/* Main */}
      <main className="h-screen w-full">
        <DragCalendar />
      </main>
    </div>
  );
}

'use client';

import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

// Éléments déplacables
function DraggableItem({ id, title }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : '',
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="mb-2 cursor-move rounded-lg bg-indigo-600 p-3 text-white shadow-lg hover:bg-indigo-700"
    >
      {title}
    </div>
  );
}

function Day({ name, items }) {
  const { setNodeRef, isOver } = useDroppable({ id: name });

  return (
    <div
      ref={setNodeRef}
      className={`m-2 flex-1 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-md ${isOver ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'}`}
    >
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
        {name}
      </h2>
      {items.map((item) => (
        <DraggableItem key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default function SimpleCalendar() {
  const events = {
    Lundi: [
      { id: '1', title: 'Réunion 1' },
      { id: '2', title: 'Café avec Paul' },
    ],
    Mardi: [{ id: '3', title: 'Cours de programmation' }],
    Mercredi: [{ id: '4', title: 'Développement du projet' }],
    Jeudi: [{ id: '5', title: "Réunion avec l'équipe" }],
    Vendredi: [{ id: '6', title: 'Test du produit' }],
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const fromDay = Object.keys(events).find((d) =>
      events[d].some((e) => e.id === active.id)
    );
    const dragged = events[fromDay].find((e) => e.id === active.id);

    if (fromDay === over.id) return;

    const updatedEvents = { ...events };
    updatedEvents[fromDay] = updatedEvents[fromDay].filter(
      (e) => e.id !== active.id
    );
    updatedEvents[over.id] = [...updatedEvents[over.id], dragged];
  };

  return (
    <div className="flex h-screen flex-col bg-gradient-to-r from-blue-50 via-blue-100 to-white">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-1 gap-4 overflow-auto p-6">
          {days.map((d) => (
            <Day key={d} name={d} items={events[d]} />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

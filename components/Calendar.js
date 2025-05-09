'use client';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import fr from 'date-fns/locale/fr';
import { useState } from 'react';

const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function MyCalendar() {
  const [events, setEvents] = useState([
    {
      title: 'Réunion équipe',
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
    {
      title: 'Réunion équipe',
      start: new Date(2025, 4, 15, 12, 0, 0),
      end: new Date(2025, 4, 15, 13, 0, 0),
      allDay: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const handleAddEvent = () => {
    const { title, date, startTime, endTime } = newEvent;
    const start = new Date(`${date}T${startTime}`);
    const end = new Date(`${date}T${endTime}`);

    if (start >= end) {
      alert("L'heure de début doit précéder l'heure de fin.");
      return;
    }

    setEvents([...events, { title, start, end, allDay: false }]);
    setShowModal(false);
    setNewEvent({ title: '', date: '', startTime: '', endTime: '' });
  };

  return (
    <div className="rounded-lg bg-white">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        className="rounded-xl border border-gray-200"
        components={{
          toolbar: ({ onNavigate, label, onView }) => (
            <div className="flex flex-col items-center justify-between space-y-2 rounded-t-xl bg-blue-500 p-3 text-white">
              <div className="text-lg font-semibold">{label}</div>

              <div className="flex flex-wrap justify-center gap-2">
                <button
                  className="rounded-lg px-4 py-2 text-white hover:bg-blue-100"
                  onClick={() => onNavigate('PREV')}
                >
                  Précédent
                </button>
                <button
                  className="rounded-lg px-4 py-2 text-white hover:bg-blue-100"
                  onClick={() => onNavigate('NEXT')}
                >
                  Suivant
                </button>
                <button
                  className="rounded-lg px-4 py-2 text-white hover:bg-blue-100"
                  onClick={() => onNavigate('TODAY')}
                >
                  Aujourd'hui
                </button>

                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    className="rounded-lg bg-green-400 px-4 py-2 text-white"
                    onClick={() => onView('day')}
                  >
                    Jour
                  </button>
                  <button
                    className="rounded-lg bg-yellow-400 px-4 py-2 text-white"
                    onClick={() => onView('week')}
                  >
                    Semaine
                  </button>
                  <button
                    className="rounded-lg bg-red-400 px-4 py-2 text-white"
                    onClick={() => onView('month')}
                  >
                    Mois
                  </button>
                  <button
                    className="rounded-lg bg-white px-4 py-2 text-blue-500 hover:bg-indigo-700"
                    onClick={() => setShowModal(true)}
                  >
                    <i className="fa-solid fa-plus cursor-pointer text-sm transition-all hover:-translate-y-px hover:translate-x-0.5"></i>
                  </button>
                </div>
              </div>
            </div>
          ),
        }}
      />

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-400/50 bg-opacity-40">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Nouvel événement</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Titre"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
              <div className="flex space-x-2">
                <input
                  type="time"
                  value={newEvent.startTime}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, startTime: e.target.value })
                  }
                  className="w-1/2 rounded border border-gray-300 px-3 py-2"
                />
                <input
                  type="time"
                  value={newEvent.endTime}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, endTime: e.target.value })
                  }
                  className="w-1/2 rounded border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={handleAddEvent}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

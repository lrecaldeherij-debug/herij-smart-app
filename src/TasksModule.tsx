import React, { useState, useMemo } from 'react';

// Interfaces TypeScript
interface Task {
  id: string;
  proyecto: string;
  responsable: string;
  prioridad: 'Baja' | 'Normal' | 'Alta' | 'Emergencia';
  progreso: number;
  estado: 'Pendiente' | 'Peligro' | 'En Progreso' | 'Completado' | 'Emergencia';
  descripcion: string;
}

interface FilterState {
  priority: string;
  status: string;
  responsible: string;
  sortBy: string;
}

// Componente de Badge de Estado
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Pendiente':
        return 'bg-orange-500';
      case 'Peligro':
        return 'bg-orange-600';
      case 'Emergencia':
        return 'bg-red-600';
      case 'En Progreso':
        return 'bg-blue-500';
      case 'Completado':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
      getStatusColor(status)
    }`}>
      {status}
    </span>
  );
};

// Componente Principal
const TasksModule: React.FC = () => {
  // Estado de filtros
  const [filters, setFilters] = useState<FilterState>({
    priority: 'all',
    status: 'all',
    responsible: 'all',
    sortBy: 'recent',
  });

  // Datos de tareas (datos de ejemplo)
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      proyecto: 'Gran Tierra',
      responsable: 'Juan García',
      prioridad: 'Alta',
      progreso: 75,
      estado: 'En Progreso',
      descripcion: 'Proyecto de infraestructura en Gran Tierra',
    },
    {
      id: '2',
      proyecto: 'Puembo Conducto',
      responsable: 'María López',
      prioridad: 'Normal',
      progreso: 45,
      estado: 'Pendiente',
      descripcion: 'Conducción de servicios en Puembo',
    },
    {
      id: '3',
      proyecto: 'OS152025',
      responsable: 'Carlos Herij',
      prioridad: 'Emergencia',
      progreso: 20,
      estado: 'Emergencia',
      descripcion: 'Orden de servicio crítica',
    },
    {
      id: '4',
      proyecto: 'Herij Visitas',
      responsable: 'Ana Silva',
      prioridad: 'Alta',
      progreso: 60,
      estado: 'En Progreso',
      descripcion: 'Desarrollo de plan de visitas',
    },
    {
      id: '5',
      proyecto: 'Mantenimiento General',
      responsable: 'Roberto Martín',
      prioridad: 'Normal',
      progreso: 30,
      estado: 'Pendiente',
      descripcion: 'Mantenimiento preventivo de equipos',
    },
  ]);

  // Filtrar y ordenar tareas
  const filteredTasks = useMemo(() => {
    let result = tasks.filter((task) => {
      const priorityMatch = filters.priority === 'all' || task.prioridad === filters.priority;
      const statusMatch = filters.status === 'all' || task.estado === filters.status;
      const responsibleMatch = filters.responsible === 'all' || task.responsable === filters.responsible;
      return priorityMatch && statusMatch && responsibleMatch;
    });

    // Ordenamiento
    if (filters.sortBy === 'recent') {
      result = result.reverse();
    } else if (filters.sortBy === 'priority') {
      const priorityOrder: { [key: string]: number } = {
        Emergencia: 1,
        Alta: 2,
        Normal: 3,
        Baja: 4,
      };
      result.sort((a, b) => priorityOrder[a.prioridad] - priorityOrder[b.prioridad]);
    }

    return result;
  }, [tasks, filters]);

  // Obtener lista de responsables únicos
  const responsibleList = useMemo(
    () => [...new Set(tasks.map((task) => task.responsable))],
    [tasks]
  );

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const handleDeleteTask = (taskId: string) => {
    console.log(`Eliminar tarea: ${taskId}`);
  };

  const handleViewDetails = (taskId: string) => {
    console.log(`Ver detalles de tarea: ${taskId}`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-6 shadow-xl">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Gestión de <span className="text-blue-400">Tareas</span>
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition">
          + Añadir Tarea
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Filtro de Prioridad */}
          <div>
            <label className="text-gray-300 text-sm font-semibold mb-2 block">
              Prioridad
            </label>
            <select
              value={filters.priority}
              onChange={(e) => handleFilterChange('priority', e.target.value)}
              className="w-full bg-slate-700 text-white rounded px-3 py-2 border border-slate-600 focus:border-blue-500 outline-none"
            >
              <option value="all">Todas las Prioridades</option>
              <option value="Baja">Baja</option>
              <option value="Normal">Normal</option>
              <option value="Alta">Alta</option>
              <option value="Emergencia">Emergencia</option>
            </select>
          </div>

          {/* Filtro de Estado */}
          <div>
            <label className="text-gray-300 text-sm font-semibold mb-2 block">
              Estado
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full bg-slate-700 text-white rounded px-3 py-2 border border-slate-600 focus:border-blue-500 outline-none"
            >
              <option value="all">Todos los Estados</option>
              <option value="Pendiente">Pendiente</option>
              <option value="En Progreso">En Progreso</option>
              <option value="Peligro">Peligro</option>
              <option value="Emergencia">Emergencia</option>
              <option value="Completado">Completado</option>
            </select>
          </div>

          {/* Filtro de Responsable */}
          <div>
            <label className="text-gray-300 text-sm font-semibold mb-2 block">
              Responsable
            </label>
            <select
              value={filters.responsible}
              onChange={(e) => handleFilterChange('responsible', e.target.value)}
              className="w-full bg-slate-700 text-white rounded px-3 py-2 border border-slate-600 focus:border-blue-500 outline-none"
            >
              <option value="all">Todos los Responsables</option>
              {responsibleList.map((responsible) => (
                <option key={responsible} value={responsible}>
                  {responsible}
                </option>
              ))}
            </select>
          </div>

          {/* Ordenamiento */}
          <div>
            <label className="text-gray-300 text-sm font-semibold mb-2 block">
              Ordenar por
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full bg-slate-700 text-white rounded px-3 py-2 border border-slate-600 focus:border-blue-500 outline-none"
            >
              <option value="recent">Más Recientes Primero</option>
              <option value="priority">Prioridad (Mayor a Menor)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabla de Tareas */}
      <div className="overflow-x-auto border border-slate-700 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-700/50 border-b border-slate-600">
              <th className="px-4 py-3 text-left text-gray-300 font-semibold text-sm">PROYECTO</th>
              <th className="px-4 py-3 text-left text-gray-300 font-semibold text-sm">RESPONSABLE</th>
              <th className="px-4 py-3 text-center text-gray-300 font-semibold text-sm">PRIORIDAD</th>
              <th className="px-4 py-3 text-center text-gray-300 font-semibold text-sm">PROGRESO</th>
              <th className="px-4 py-3 text-center text-gray-300 font-semibold text-sm">ESTADO</th>
              <th className="px-4 py-3 text-center text-gray-300 font-semibold text-sm">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <tr key={task.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition">
                  <td className="px-4 py-3 text-gray-200 font-medium">{task.proyecto}</td>
                  <td className="px-4 py-3 text-gray-300">{task.responsable}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300">
                      {task.prioridad}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                        style={{ width: `${task.progreso}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{task.progreso}%</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <StatusBadge status={task.estado} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleViewDetails(task.id)}
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition"
                      >
                        Ver Detalles
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-red-400 hover:text-red-300 transition"
                        title="Eliminar tarea"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                  No hay tareas que coincidan con los filtros seleccionados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Resumen */}
      <div className="mt-4 text-gray-400 text-sm">
        Mostrando <span className="text-blue-400 font-semibold">{filteredTasks.length}</span> de{' '}
        <span className="text-blue-400 font-semibold">{tasks.length}</span> tareas
      </div>
    </div>
  );
};

export default TasksModule;

import React, { useState } from 'react';
import { app, analytics, auth, db } from './firebase-config';
import TasksModule from './TasksModule';


const App: React.FC = () => {
    // Firebase Integration: app initialized with Firestore, Analytics, and Authentication
  console.log('Firebase initialized for herij-smart project');

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState<'general' | 'commercial' | 'financial' | 'rrhh' | 'product | 'tareas'ion'>('general');

  const renderContent = () => {
    switch (activeView) {
      case 'general':
        return (
          <div style={{ padding: '2rem', color: '#fff' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#3b82f6' }}>Dashboard General</h1>
            <p>Información general del sistema HERIJ S.M.A.R.T.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Total Usuarios</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>247</p>
              </div>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Módulos Activos</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>5</p>
              </div>
            </div>
          </div>
        );
      case 'commercial':
        return (
          <div style={{ padding: '2rem', color: '#fff' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#3b82f6' }}>Gestión Comercial</h1>
            <p>Módulo de gestión de ventas y clientes</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Ventas Mensuales</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>$125,430</p>
              </div>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Clientes Activos</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>89</p>
              </div>
            </div>
          </div>
        );
      case 'financial':
        return (
          <div style={{ padding: '2rem', color: '#fff' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#3b82f6' }}>Finanzas</h1>
            <p>Módulo de control financiero y presupuestos</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Balance Total</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>$542,890</p>
              </div>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Ingresos Mes</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>$298,560</p>
              </div>
            </div>
          </div>
        );
      case 'rrhh':
        return (
          <div style={{ padding: '2rem', color: '#fff' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#3b82f6' }}>Recursos Humanos</h1>
            <p>Módulo de gestión de personal</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Total Empleados</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>156</p>
              </div>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Departamentos</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>12</p>
              </div>
            </div>
          </div>
        );
      case 'production':
        return (
          <div style={{ padding: '2rem', color: '#fff' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#3b82f6' }}>Producción</h1>
            <p>Módulo de control de producción</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Producción Diaria</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>2,340 unidades</p>
              </div>
              <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Eficiencia</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>94.2%</p>
              </div>
            </div>
          </div>
        );
                  case 'tareas':
        return <TasksModule />;

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0f172a', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? '250px' : '80px',
        background: '#0f172a',
        borderRight: '1px solid #1e293b',
        padding: '1.5rem 1rem',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#3b82f6',
            whiteSpace: 'nowrap',
            opacity: sidebarOpen ? 1 : 0,
            transition: 'opacity 0.3s',
            display: sidebarOpen ? 'block' : 'none'
          }}>HERIJ</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              fontSize: '1.25rem',
              padding: '0.5rem'
            }}
          >
            ☰
          </button>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { id: 'general', label: 'Dashboard General', icon: '📊' },
            { id: 'commercial', label: 'Gestión Comercial', icon: '💼' },
            { id: 'financial', label: 'Finanzas', icon: '💰' },
            { id: 'rrhh', label: 'RRHH', icon: '👥' },
            { id: 'production', label: 'Producción', icon: '⚙️' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as any)}
              style={{
                background: activeView === item.id ? '#1e293b' : 'transparent',
                border: 'none',
                color: activeView === item.id ? '#3b82f6' : '#94a3b8',
                padding: '0.75rem 1rem',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.2s',
                justifyContent: sidebarOpen ? 'flex-start' : 'center',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        overflowY: 'auto',
        background: '#0f172a'
      }}>
        <div style={{ background: '#1e293b', borderBottom: '1px solid #334155', padding: '1rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>Asistente de Gestión S.M.A.R.T. HERIJ</h2>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;

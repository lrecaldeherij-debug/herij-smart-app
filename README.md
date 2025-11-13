# Asistente de Gestión S.M.A.R.T. HERIJ

**Versión:** 1.0.0  
**Estado:** En Desarrollo Activo  
**Última Actualización:** Noviembre 2025

---

## 📋 Descripción

HERIJ es una aplicación web empresarial integrada que proporciona un sistema completo de gestión S.M.A.R.T. (Specific, Measurable, Achievable, Relevant, Time-bound) diseñada para empresas especializadas en servicios de Ensayos No Destructivos (NDT) y gestión empresarial.

### Módulos Principales

1. **📊 Dashboard General** - Visión ejecutiva del sistema con KPIs principales
2. **💼 Gestión Comercial** - Gestión de ventas, clientes y oportunidades
3. **💰 Finanzas** - Control de flujo de caja, cuentas por cobrar/pagar
4. **👥 Recursos Humanos** - Gestión de personal, nómina y selección
5. **⚙️ Producción** - Control de proyectos y eficiencia operativa

---

## 🔧 Stack Tecnológico

### Frontend
- **React 18** - Librería UI moderna
- **TypeScript** - Tipado estático para mayor seguridad
- **Vite** - Bundler ultra-rápido
- **Tailwind CSS** - Diseño responsive

### Backend
- **Firebase** - Base de datos en tiempo real
- **Firestore** - Base de datos NoSQL escalable
- **Firebase Authentication** - Autenticación segura
- **Cloud Functions** - Lógica serverless

### DevOps
- **GitHub** - Control de versiones
- **Firebase Hosting** - Hosting de producción
- **GitHub Actions** - CI/CD automatizado

---

## 📦 Instalación Rápida

### Prerrequisitos
```bash
Node.js >= 16.0.0
npm >= 8.0.0
git
```

### Clonar Repositorio
```bash
git clone https://github.com/lrecaldeherij-debug/herij-smart-app.git
cd herij-smart-app
```

### Instalar Dependencias
```bash
npm install
```

### Configurar Variables de Entorno
```bash
cp .env.example .env.local
# Editar .env.local con tus credenciales de Firebase
```

### Ejecutar en Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🚀 Build para Producción

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
herij-smart-app/
├── src/
│   ├── components/
│   │   ├── general/
│   │   ├── commercial/
│   │   ├── financial/
│   │   ├── human-resources/
│   │   ├── production/
│   │   └── ui/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── firebase-config.ts
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .gitignore
```

---

## 🔐 Seguridad

- ✅ Autenticación segura con Firebase
- ✅ Encriptación de datos en tránsito
- ✅ Reglas de Firestore restrictivas
- ✅ Variables de entorno protegidas
- ✅ Control de acceso basado en roles (RBAC)

---

## 📊 Performance

- **Carga Inicial:** < 2s
- **TTI (Time to Interactive):** < 3s
- **Lighthouse Score:** > 90
- **Bundle Size:** < 500KB (gzipped)

---

## 🔄 Control de Versiones

Este proyecto usa **Semantic Versioning**:
- `MAJOR.MINOR.PATCH`
- Branches: `main` (producción), `develop` (desarrollo)

### Workflow Git
```bash
# Feature
git checkout -b feature/nombre-feature

# Fix
git checkout -b bugfix/nombre-bug

# Crear Pull Request hacia develop
```

---

## 🤝 Contribuciones

1. Fork del repositorio
2. Crear rama: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add some AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Abrir Pull Request

---

## 📝 Documentación Completa

Ver documentación detallada en:
- [Setup de Firebase](./docs/FIREBASE_SETUP.md)
- [Estructura de Componentes](./docs/COMPONENTS.md)
- [API Reference](./docs/API.md)
- [Guía de Desarrollo](./docs/DEVELOPMENT.md)

---

## 📞 Soporte

- **Issues:** [GitHub Issues](https://github.com/lrecaldeherij-debug/herij-smart-app/issues)
- **Contacto:** herij@company.com
- **Documentación:** [Wiki](https://github.com/lrecaldeherij-debug/herij-smart-app/wiki)

---

## 📄 Licencia

Propietary © 2025 HERIJ S.M.A.R.T. All rights reserved.

---

## 🎯 Roadmap

- [ ] v1.1 - Reportes avanzados
- [ ] v1.2 - Análisis predictivo con IA
- [ ] v1.3 - Integración con sistemas externos
- [ ] v2.0 - App móvil nativa

---

**Construido con ❤️ para la gestión empresarial moderna**

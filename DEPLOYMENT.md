# Guía de Despliegue - HERIJ Smart Management System

## Descripción General

Esta guía proporciona los pasos necesarios para desplegar la aplicación React a Firebase Hosting.

## Requisitos Previos

- Node.js 18+ instalado
- npm o yarn instalado
- Firebase CLI instalado (`npm install -g firebase-tools`)
- Acceso a la consola de Firebase del proyecto `herij-smart`
- Credenciales Firebase en archivo `.env.local`

## Pasos de Despliegue

### 1. Preparar el Ambiente Local

```bash
# Navegar al directorio del proyecto
cd herij-smart-app

# Instalar dependencias
npm install
```

### 2. Compilar la Aplicación React

```bash
# Generar build optimizado
npm run build
```

Esto crea la carpeta `/build` con los archivos compilados.

### 3. Autenticarse con Firebase

```bash
# Iniciar sesión en Firebase
firebase login

# Verificar proyectos disponibles
firebase projects:list
```

### 4. Desplegar a Firebase Hosting

```bash
# Deploy a Firebase Hosting
firebase deploy
```

### 5. Verificar el Despliegue

Una vez completado, accede a la URL:
- **URL de prueba**: https://herij-smart.web.app
- **URL alternativa**: https://herij-smart.firebaseapp.com

## Configuración del Proyecto

- **Archivo `.firebaserc`**: Define el proyecto de Firebase por defecto
- **Archivo `firebase.json`**: Configura las reglas de hosting
  - `public`: Apunta a la carpeta `/build`
  - `rewrites`: Todas las rutas se redireccionan a `/index.html` (SPA)
  - `ignore`: Excluye archivos innecesarios del despliegue

## Despliegue Continuo (Opcional)

Para automatizar deployments futuros con GitHub Actions:

1. Generar token de Firebase:
   ```bash
   firebase login:ci
   ```

2. Crear archivo `.github/workflows/deploy.yml`

3. Configurar secreto en GitHub con el token

## Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "firebase: command not found"
```bash
npm install -g firebase-tools
```

### Error: "Build directory not found"
```bash
# Asegurate de que el build se completó
npm run build
ls -la build/
```

## Variables de Entorno

Asegúrate de que `.env.local` contiene:
```
VITE_FIREBASE_API_KEY=<tu_key>
VITE_FIREBASE_AUTH_DOMAIN=<tu_domain>
VITE_FIREBASE_PROJECT_ID=herij-smart
VITE_FIREBASE_STORAGE_BUCKET=<tu_bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<tu_id>
VITE_FIREBASE_APP_ID=<tu_app_id>
```

## Post-Despliegue

Después de desplegar:

1. Compartir URL con el equipo: https://herij-smart.web.app
2. Probar todos los módulos (Tareas, Comercial, Financiero, etc.)
3. Verificar que los filtros funcionan correctamente
4. Confirmar que no hay errores en la consola del navegador

## Actualizar Despliegue

Para actualizar con nuevas características:

```bash
# Hacer cambios en el código
git add .
git commit -m "feat: Nueva característica"
git push

# Compilar nuevamente
npm run build

# Desplegar
firebase deploy
```

## URL del Proyecto en Línea

🚀 **Tu aplicación está disponible en**: https://herij-smart.web.app

## Soporte

Para más información, consulta:
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [React Vite Deployment](https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server)

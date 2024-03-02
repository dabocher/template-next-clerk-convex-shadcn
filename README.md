# Guía rápida

- Clonar el proyecto e instalarlo.
- Levantar el server de convex.
- Crear app de Clerk y sincronizarla con Convex

## Inicio

```bash
git clone https://github.com/dabocher/template-next-clerk-convex-shadcn.git .
npm i
npm convex dev

```

Cuando levantes el servidor de convex te pedirá autorizar con Github. El servidor de convex se abrirá en otro puerto. Verás un dashboard con todas las utilidades del servidor backend. En local, se generará un archivo env.local con las variables de entorno.

El servidor de desarrollo en local lo levantaremos después de configurar Clerk y Convex.

## Configurar Clerk/Convex

### Crear aplicación

Crear un proyecto / aplicación en Clerk. Localiza las variables de entorn (https://clerk.com/docs/quickstarts/nextjs) que proporciona Clerk (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY y CLERK_SECRET_KEY) y añádelas al archivo env.local junto a las variables que había creado ya Convex.

### Crear Webhook endpoint en Clerk

Ves al dashboard de Clerk y crea un endpoint en el apartado Webhooks. Copia la NEXT_CONVEX_URL que está en el .env.local de tu proyecto, borra el cloud y sustituyelo por site y añade /clerk al endpoint. Selecciona el evento user.created de la lista de eventos. Copia el webhooksecret que te proporciona el nuevo endpoint creado en las variables de entorno de convex (en el dashboard, settings, enviroment variables).

### Crear JWT Template

En el apartado JWT Templates del dashboard de Clerk crea un nuevo template para Convex. Copia el Issuer y asegúrate de guardar los cambios. Pega el Issuer en el "domain" del archivo auth.config.ts que está dentro de la carpeta convex de tu proyecto.

Toda la info en los docs de Clerk https://clerk.com/docs/integrations/databases/convex

## Servidor de desarrollo

Ahora ya puedes levantar el servidor de desarrollo en local

```bash
npm run dev

```

Si todo ha ido bien verás una página en blanco con un header un botón de Sign in y un texto en el cuerpo de la página.

## Logs internos

Tanto Clerk como Convex disponen de logs de las acciones que se ejecutan. En Clerk está dentro de Webhooks. En Convex, hay un apartado en el dashboard llamado Logs

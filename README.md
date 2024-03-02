# Inicio

```bash
git clone https://github.com/dabocher/template-next-clerk-convex-shadcn.git .
npm i
npm convex dev

```

Cuando levantes el servidor de convex te pedirá autorizar con Github. El servidor de convex se abrirá en otro puerto. Se te genera directamente un archivo env.local con las variables de entorno.

El servidor de desarrollo en local lo levantaremos después de configurar Clerk y Convex.

## Configurando Clerk/Convex

Crear cuenta de Clerk y un proyecto / aplicación. Localiza las variables de entorn (https://clerk.com/docs/quickstarts/nextjs) que te proporciona Clerk (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY y CLERK_SECRET_KEY) y añádelas al archivo env.local junto a las variables que ha creado ya Convex.

### Creando Webhook endpoint en Clerk

Ves al dashboard de Clerk y crea un endpoint en el apartado Webhooks. Copia la NEXT_CONVEX_URL que está en el .env.local de tu proyecto, borra el cloud y sustituyelo por site y añade /clerk. Selecciona el evento user.created de la lista de eventos. Copia el webhooksecret que te proporciona el nuevo endpoint creado en las variables de entorno de convex (en el dashboard, settings, enviroment variables).

### Creando JWT Template

En el apartado JWT Templates del dashboard de Clerk crea un nuevo template para Convex. Copia el Issuer y asegúrate de guardar los cambios. Pega el Issuer en el domain del archivo auth.config.ts que está dentro de la carpeta convex de tu proyecto.

Toda la info en los docs de Clerk https://clerk.com/docs/integrations/databases/convex

## Servidor de desarrollo

Ahora ya puedes levantar el servidor de desarrollo en local

```bash
npm run dev

```

## Logs internos

Tanto Clerk como Convex disponen de logs de las acciones que se ejecutan. En Clerk está dentro de Webhooks. En Convex, hay un apartado en el dashboard llamado Logs

# NOIR — Creative Digital Studio

### Landing Page Premium | Proyecto de Portafolio Frontend

NOIR es una landing page conceptual de un estudio creativo de inteligencia artificial, desarrollada con **Next.js 15, React 19, TypeScript y CSS moderno**.

El proyecto tiene como objetivo demostrar habilidades de desarrollo frontend, diseño de interfaces modernas, experiencias visuales interactivas, accesibilidad y optimización del rendimiento web.

La dirección visual es "Monolito" (negro profundo, una pieza metálica protagonista, espacio negativo) con la tipografía y la retícula discreta de una estética técnica: serif editorial, grotesca neutra y mono, sobre una rejilla de 12 columnas (4 en móvil).

> **Nota:** NOIR es un proyecto conceptual creado con fines de portafolio profesional. El estudio y los proyectos presentados son ficticios y no representan trabajos comerciales realizados para clientes.

---

## Tecnologías utilizadas

- **Next.js 15:** Framework para el desarrollo de aplicaciones React.
- **React 19:** Construcción de interfaces mediante componentes reutilizables.
- **TypeScript:** Tipado estático para mejorar la mantenibilidad del código.
- **CSS moderno:** Estilos personalizados, composiciones visuales, efectos y animaciones.
- **IntersectionObserver API:** Detección de elementos visibles para activar animaciones durante el desplazamiento.
- **Git y GitHub:** Control de versiones y gestión del código fuente.
- **Vercel:** Plataforma prevista para el despliegue de la aplicación.

## Características principales

- Diseño editorial premium con identidad visual propia.
- Interfaz responsive adaptable a dispositivos móviles, tabletas y escritorio.
- Hero con un monolito de acero cepillado construido con cinco planos CSS en 3D real, con inclinación según el cursor.
- Tipografías cargadas con `next/font` (Instrument Serif, Inter Tight, JetBrains Mono).
- Animaciones de entrada activadas durante el desplazamiento.
- Compatibilidad con `prefers-reduced-motion` para respetar las preferencias de accesibilidad.
- Estructura semántica HTML.
- Metadatos SEO y descripción Open Graph.
- Composiciones gráficas originales sin depender de imágenes externas.
- Implementación ligera sin bibliotecas de animación innecesarias.

## Decisiones técnicas

### Diseño y rendimiento

Las composiciones visuales se implementaron utilizando capas y transformaciones CSS, evitando incorporar motores WebGL para efectos que pueden lograrse mediante tecnologías nativas del navegador.

Esta decisión busca reducir dependencias y mantener una experiencia visual atractiva con menor complejidad técnica.

### Animaciones

Se utiliza la API nativa `IntersectionObserver` para detectar cuándo determinados elementos entran en el área visible del navegador.

Las animaciones se complementan con CSS y respetan la configuración `prefers-reduced-motion`, permitiendo reducir el movimiento cuando el usuario así lo solicita.

### Accesibilidad

Se contemplan buenas prácticas como navegación mediante teclado, estructura semántica y adaptación a las preferencias de movimiento del sistema operativo.

### Arquitectura frontend

El proyecto utiliza Next.js con App Router y TypeScript, priorizando una estructura sencilla, mantenible y adecuada para una landing page de presentación.

---

## Instalación y ejecución local

**Requisitos:**

- Node.js compatible con Next.js 15.
- npm.
- Git.

Clonar el repositorio:

```bash
git clone git@github.com-personal:jcfvirgilio/noir-creative-portfolio.git
```

> El comando anterior utiliza un alias SSH personal. Si no tienes ese alias configurado, puedes clonar el repositorio mediante HTTPS:

```bash
git clone https://github.com/jcfvirgilio/noir-creative-portfolio.git
```

Entrar al proyecto:

```bash
cd noir-creative-portfolio
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

http://localhost:3000

Para generar la versión de producción:

```bash
npm run build
```

## Vista previa

**Demo en línea:** pendiente de publicación en Vercel.

**Repositorio:** https://github.com/jcfvirgilio/noir-creative-portfolio

Se incorporarán capturas del proyecto una vez publicada y revisada la versión final.

## Aspectos pendientes antes de publicar

- Sustituir `hello@example.com` por un correo de contacto válido.
- Validar el diseño responsive en diferentes resoluciones.
- Comprobar la compilación de producción.
- Incorporar capturas reales de la interfaz.
- Publicar la aplicación en Vercel.
- Agregar la URL de demostración al repositorio.

## Objetivo profesional

Este proyecto forma parte de un portafolio de desarrollo frontend orientado a demostrar competencias en:

- Desarrollo de interfaces modernas con React y Next.js.
- Diseño y construcción de experiencias digitales.
- Aplicación de buenas prácticas de accesibilidad web.
- Optimización de rendimiento frontend.
- Organización y mantenimiento del código.
- Implementación de interfaces responsivas.

## Autor

**Juan Carlos Fuentes**

Desarrollo Frontend | React | Next.js | TypeScript

GitHub: https://github.com/jcfvirgilio

## Licencia y uso

Proyecto conceptual desarrollado con fines educativos y de demostración profesional.

El diseño, la identidad visual y el contenido deben revisarse antes de cualquier uso comercial.

# Solutions Tech · Web demostrativa para estudios profesionales

Una sola web, cuatro identidades: **jurídico, contable, gestoría y arquitectura**. Se personaliza en
minutos para mostrarle a un cliente potencial cómo se vería su sitio antes de contratar.
React 19 + TypeScript + Vite + Tailwind v4 + Lucide. Sin librería de animación (CSS +
IntersectionObserver). Sin backend ni servicios externos: las fuentes están alojadas localmente
(`@fontsource`) y las fotos se sirven desde `/public/img`.

## Instalación y uso

Requisitos: Node 20+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build a dist/
npm run preview    # sirve el build
```

### Cambiar de rubro y personalizar sin tocar código

| URL | Efecto |
|---|---|
| `/?rubro=juridico` · `contable` · `gestoria` · `arquitectura` | elige el rubro (también desde la barra superior de demo) |
| `&nombre=Estudio%20Ferreyra` | reemplaza el nombre del estudio en logo, títulos y pie |
| `&color=0b5d3b` | reemplaza el color de acento (hex de 6 dígitos, sin `#`) |
| `&demo=0` | oculta la barra de demostración (para capturas o para mostrar el sitio "limpio") |

Ejemplo para una reunión: `https://<demo>.vercel.app/?rubro=contable&nombre=Estudio%20Ferreyra&color=14532d&demo=0`

## Dirección artística: Modern Boutique (rama `direccion/modern-boutique`)

La versión anterior (biblioteca y columnas, paleta bordó intenso) está guardada como la etiqueta git `v1-clasica`
(`git checkout v1-clasica`); la rama `master` sigue en ese punto. Esta rama explora: carbón, marfil, gris piedra y
bordó suave; fotografía de arquitectura contemporánea (travertino, hormigón, luz natural); botones y navegación en píldora.
Se eligió el hero A (foto a sangre) como diseño base y la rama se integró en `master`; el hero editorial queda disponible como opción reutilizable. Para compararlos: `?rubro=juridico&hero=full` (A, foto a sangre) y `&hero=editorial` (B, asimétrico).
Capturas en `screenshots/comparar/`. `npm run test:contrast` audita contraste AA y tamaño mínimo de texto.

## Configuración de cada rubro

Todo el contenido vive en `src/config/`. Los componentes no tienen textos.

```
src/config/
  types.ts        esquema (StudioConfig) documentado
  shared.ts       datos de contacto de ejemplo, textos del formulario, créditos de Solutions Tech
  juridico.ts  contable.ts  gestoria.ts  arquitectura.ts
  index.ts        registro + lectura de parámetros de URL
```

Cada archivo define: nombre y descriptor, **tema de color** (papel, tinta, acento, fondo oscuro),
**composición del hero** (`full` · `split` · `arch`), titular y bajada, sección del estudio,
áreas/servicios (con foto asociada), principios de trabajo, contacto, y los metadatos de las 6 fotos.
En títulos, `*texto*` genera cursiva de acento y `\n` un salto de línea.

**Crear una demo para un cliente concreto**: copiar el archivo del rubro más cercano, cambiar
`name`, textos y `theme.accent`, y registrarlo en `index.ts`. Para fotos propias: dejar
`public/img/<id>/1..6-{800,1400,2200}.jpg` (o cambiar `Photo.tsx`) y actualizar `photos`.

## Publicación

GitHub Pages se despliega solo con cada push a `master` (`.github/workflows/pages.yml`, base `/solutions-tech-studios/`). Para Vercel o un dominio propio compilar con `VITE_BASE=/ npm run build`.

## Despliegue en Vercel

No se publicó nada desde este proyecto. Cuando haya autorización:

1. Subir la carpeta a un repositorio (GitHub/GitLab).
2. En [vercel.com/new](https://vercel.com/new) importar el repo. Vercel detecta Vite; `vercel.json` ya define
   build (`npm run build`), salida (`dist`) y caché larga para `/img` y `/assets`.
3. *Deploy*. Opcional: asociar un dominio propio de la demo (p. ej. `demo.solutionstech.com.ar`).

Por CLI: `npx vercel` (preview) y `npx vercel --prod`. El sitio incluye `noindex` mientras sea demo.

## Pruebas

```bash
npm run build && npm run test:e2e     # Playwright sobre el build
npm run shots                         # capturas en screenshots/ (1440×900, 768×1024, 390×844)
```

`test:e2e` verifica en los 4 rubros × 3 tamaños: consola sin errores ni avisos, sin desborde
horizontal, imágenes visibles cargadas, texto alternativo y un único `h1`, y ninguna petición a dominios
externos. Además: menú móvil (apertura, foco, Escape, cierre al navegar), formulario simulado (confirma
sin emitir peticiones), precarga del motivo desde "Consultar por…", selector de rubro, parámetros de URL y
`prefers-reduced-motion`. **Resultado actual: todas las pruebas pasan.**

## Decisiones de diseño

- **Idea rectora: "papel, tinta y piedra".** Fondos cálidos de papel, tinta casi negra, y un único acento
  por rubro (bordó, verde inglés, azul tinta, naranja óxido). Se evitó el azul marino + dorado genérico.
  Los acentos pasan contraste AA con su texto.
- **Tipografía como protagonista.** *Instrument Serif* (serif editorial de alto contraste, con cursiva
  expresiva) para títulos a escala grande y *Manrope* (sans geométrica muy legible) para contenido.
  Títulos con interlineado ~0.95 y tracking negativo; cuerpo a 17–19 px / 1.65. La cursiva en una palabra de
  cada titular es el "gesto" de marca.
- **Tres composiciones de hero**, elegidas por rubro, sin tarjetas flotantes, métricas ni mockups:
  foto a sangre con titular sobre ella (jurídico: biblioteca; arquitectura: hormigón), columnas con foto vertical y
  marco desplazado (contable: lectura "ordenada"), y foto en arco (gestoría: eco de las arcadas y del "umbral").
- **Áreas como lista editorial**, no tarjetas: títulos grandes numerados, la activa se expande y una foto
  sticky cambia con ella (hover/foco/clic). En móvil se muestran todas completas, sin interacciones ocultas.
  Cada área tiene "Consultar…" que precarga el motivo en el formulario.
- **Ritmo de color:** papel → papel alternativo → bloque oscuro (filosofía) → bloque de acento (contacto)
  → pie oscuro. Cierre con color pleno para un CTA claro.
- **Iconos:** solo Lucide, trazo 1.5, y solo donde informan (flechas de acción, datos de contacto, menú).
- **Movimiento con propósito:** entrada enmascarada de titulares y fotos, revelado al scroll, crossfade en áreas.
  Todo se desactiva con `prefers-reduced-motion`. Sin librerías de animación.
- **Rendimiento:** fuentes locales (2 familias, solo latin), JS ≈ 82 kB gzip, imágenes con `srcset` de 3 anchos,
  `loading="lazy"` salvo el hero (`fetchpriority="high"`).
- **Accesibilidad:** enlace "Saltar al contenido", foco visible, `aria-current` en navegación, menú móvil con
  foco gestionado y cierre con Escape, `inert` cuando está cerrado, formularios con etiquetas visibles.
- **Contenido honesto:** nombres de estudio conceptuales (no son apellidos de personas), áreas genéricas
  marcadas como de ejemplo, datos de contacto placeholder, cero testimonios, cifras, matrículas ni trayectoria.
  Formulario 100 % simulado.

## Pendientes para convertir una demo en web real

1. Datos reales: nombre, logo/wordmark, dirección, teléfono, correo, WhatsApp, horarios, redes.
2. Especialidades y servicios realmente prestados (y eliminar los de ejemplo); confirmar el tono con el cliente.
3. Fotografía propia del estudio/obras (o sesión profesional); reemplazar fotos de Unsplash y actualizar créditos.
4. Si corresponde: equipo/profesionales y matrículas (solo con datos y autorización del cliente), trayectoria, clientes, obras.
5. Formulario real: backend o servicio (Formspree, Resend, API propia), validación, antispam, aviso de privacidad y consentimiento (Ley 25.326, AAIP).
6. Quitar `DemoBar`, el aviso "Datos de ejemplo", `noindex`, y el texto de demo del pie (`demo: false` en la config).
7. SEO: títulos/descripciones finales, imagen Open Graph, `sitemap.xml`/`robots.txt`, datos estructurados (`LegalService`, `AccountingService`, `Architect`…), Search Console.
8. Dominio propio, correo corporativo, certificado (Vercel lo gestiona), analítica respetuosa (Plausible/Umami).
9. Páginas legales: política de privacidad, términos; textos de colegios profesionales si aplica (p. ej. publicidad de servicios profesionales).
10. Revisión final de contenidos con el cliente y prueba en dispositivos reales.

# EuroHeaters México – Sección de productos

Prueba práctica de Diseño y Desarrollo Web. Es una sección de presentación de productos para EuroHeaters México, con catálogo completo y vista de detalle por producto: resistencias, sensores, controladores, sistema de colada caliente y accesorios.

## Cómo verlo

No necesita instalación ni build. Puedes servir la carpeta con un servidor estático:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

También se puede abrir `index.html` directamente en el navegador.

Rutas:

| Ruta | Vista |
|---|---|
| `#/` | Inicio: hero, catálogo, empresa, sedes y contacto |
| `#/c/<familia>` | Catálogo filtrado (`colada`, `res`, `sen`, `ctrl`, `acc`) |
| `#/p/<id>` | Detalle de producto (p. ej. `#/p/resistencia-cartucho`) |
| `#/p/<id>/cotizar` | Detalle con scroll directo al formulario de cotización |
| `#/p/<id>/specs` | Detalle con scroll directo a la ficha técnica |

## Estructura

```
index.html          Maquetación de la página
styles.css          Estilos (tokens de color, componentes, responsive)
data.js             Catálogo: 23 productos, 5 familias, sedes y datos de contacto
app.js              Lógica: filtros, búsqueda, router, galería, configurador, pestañas, formulario
assets/img/         Logo, fotos de producto y fotos de sedes
assets/docs/        Fichas técnicas oficiales en PDF
```

## Contenido

El contenido sale del sitio oficial [euroheaters.mx](https://www.euroheaters.mx):

- **Productos y especificaciones.** Reescribí los textos para que se lean con claridad, porque el sitio original tiene traducciones automáticas. Los valores técnicos (temperaturas, potencias, medidas, tablas de modelos) no cambiaron.
- **Logo, fotos de producto y fotos de sedes:** las imágenes oficiales del sitio, optimizadas a un máximo de 900 px.
- **Fichas técnicas PDF:** las oficiales de los controladores y de las resistencias de cartucho. El catálogo general (33 MB) se enlaza al sitio oficial en lugar de incluirse.
- **Contacto:** teléfono, correo, dirección de oficinas centrales, horario y las 6 oficinas en México.

## Herramientas y tecnologías

- **Diseño / prototipo:** Claude Design (ver `Prueba práctica – Controlador de temperatura.pdf`).
- **Desarrollo:** HTML5, CSS3 y JavaScript sin frameworks ni dependencias.
- **Tipografía:** Archivo (títulos y texto) e IBM Plex Mono (datos técnicos), vía Google Fonts.
- **Ilustraciones de controladores:** hechas con HTML y CSS. Escalan con su contenedor (`cqw`) y cambian con la configuración elegida (número de zonas, línea o voltaje).

## Principales decisiones de diseño

- **Paleta derivada del logo.** El rojo de la marca se reserva para las acciones de cotizar, para que la conversión siempre destaque. El azul marino da solidez técnica y el verde marca disponibilidad y estados OK.
- **Fotos y ilustraciones en un mismo sistema visual.** Las fotos del sitio original tienen fondos y tamaños distintos. Se colocan sobre la misma retícula de las ilustraciones con `mix-blend-mode: multiply`, así el fondo blanco desaparece y el catálogo se ve uniforme.
- **Jerarquía pensada para el comprador industrial.** Primero van el nombre, la descripción y 3 datos clave. Después el configurador, cuando aplica, y las acciones. Al final la ficha completa en pestañas: especificaciones, tabla de modelos, aplicaciones y descargas.
- **Configurador antes de cotizar.** En controladores y cartuchos el cliente elige la configuración. La ficha, la ilustración y el resumen de la cotización se actualizan con esa elección, así el asesor recibe la solicitud con contexto.
- **Varios caminos de contacto:** barra superior con teléfono y correo, "Cotizar" en cada tarjeta, formulario en el detalle, línea directa junto al botón principal y bloque final de llamada o correo.
- **Confianza:** marca inglesa con más de 40 años, certificaciones, visitas técnicas sin costo, oficinas en México y presencia internacional.
- **Responsive y accesible.** Layout fluido con `flex-wrap`, `grid auto-fit` y `clamp()`, sin scroll horizontal a 390 px. Hay áreas táctiles de al menos 44 px, foco visible, pestañas ARIA con navegación por flechas, tablas con scroll propio en móvil y soporte de `prefers-reduced-motion`.

## Alcance

El formulario de cotización es demostrativo: valida los campos y muestra una confirmación, pero no envía datos (la prueba no requiere backend). Los teléfonos y correos sí son enlaces funcionales (`tel:` y `mailto:`).

## Tiempo dedicado

Aproximadamente **[X] horas** (diseño + desarrollo).

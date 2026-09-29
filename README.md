# Correos de Onboarding · Fortalecernos

Sitio estático (sin backend) que guarda las 5 plantillas de correo del proceso de onboarding y permite personalizarlas por persona antes de enviarlas.

## Funcionalidades incluidas
- **Plantillas de Onboarding y Aniversarios**:
  1. Bienvenida · Día 1
  2. Check-in · 7 días
  3. Primer mes · 30 días
  4. Aniversario · 6 meses
  5. Aniversario · 1 año
  6. Cumpleaños 🎂
- **Herramientas**:
  - **✍️ Firma Digital**: Generador de firma HTML corporativa alineada a la imagen institucional (con logo, datos de contacto y nota opcional de horarios flexibles).

## Cómo funciona
- **Datos de la persona** (nombre, género, fecha, etc.): se llenan cada vez que generas un correo nuevo.
- **Datos de la empresa** (logo, link de Notion, contacto RRHH): se llenan una vez y quedan guardados en el navegador (localStorage), no hace falta repetirlos en cada correo.
- El campo **Género** ajusta automáticamente palabras como "Bienvenido/Bienvenida" en el texto.
- Puedes **copiar la firma o correo HTML** (para pegarlo directo en Gmail/Outlook) o **descargar el archivo .html**.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser privado), por ejemplo `onboarding-emails`.
2. Sube estos archivos a la raíz del repositorio:
   - `index.html`
   - `style.css`
   - `templates.js`
   - `signatures.js`
   - `app.js`
   - `README.md`
3. Ve a **Settings → Pages** del repositorio.
4. En "Branch", selecciona `main` y carpeta `/ (root)`, luego **Save**.
5. En un par de minutos tu sitio estará disponible en:
   `https://TU-USUARIO.github.io/onboarding-emails/`

## Sobre el logo

Por ahora el logo apunta a tu link de Google Drive convertido a formato de imagen directa:
```
https://drive.google.com/uc?export=view&id=1487A2v79sQ0CuQvDgRmKdL6Xl0gWn5u_
```

⚠️ **Importante:** Google Drive a veces bloquea o falla al mostrar imágenes incrustadas en correos (Gmail/Outlook no siempre lo cargan bien). Para máxima confiabilidad en los correos que realmente vayas a enviar, lo ideal es:

1. Subir el logo (por ejemplo `logo.png`) a la carpeta `assets/` de este mismo repositorio.
2. Reemplazar el link por defecto en el sitio (en el campo "URL del logo") por:
   `https://TU-USUARIO.github.io/onboarding-emails/assets/logo.png`

Ese link sí es 100% estable en cualquier cliente de correo.

## Completar el link de Notion

El campo "Link de la guía de Notion" está en blanco a propósito — solo debes llenarlo una vez en el sitio (sección "Datos de la empresa") y se guardará automáticamente para todos los correos.

## Notas
- No requiere ningún backend, base de datos ni build — es HTML/CSS/JS puro.
- Los datos de empresa se guardan solo en el navegador donde lo uses (si lo abres desde otra computadora, tendrás que volver a llenarlos una vez).
- Si más adelante quieres enviar los correos automáticamente en vez de copiar/pegar, se puede conectar este mismo formulario a Gmail API o a un servicio como SendGrid/Brevo.

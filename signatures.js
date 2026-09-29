// ============================================================
// SIGNATURES.JS — Generador de Firma Digital HTML Fortalecernos
// ============================================================

const SIGNATURE_FIELDS = [
  { key: "sig_nombre", label: "Nombre y Apellidos", type: "text", placeholder: "Ej. Ricardo Aguero", default: "Ricardo Aguero" },
  { key: "sig_cargo", label: "Cargo / Puesto", type: "text", placeholder: "Ej. KAM Canal Masivo S2", default: "KAM Canal Masivo S2" },
  { key: "sig_area", label: "Área / Gerencia / Sede", type: "text", placeholder: "Ej. Gerencia Regional Consumidores Sur", default: "Gerencia Regional Consumidores Sur" },
  { key: "sig_celular", label: "Celular / WhatsApp", type: "text", placeholder: "Ej. 998 102 183", default: "998 102 183" },
  { key: "sig_correo", label: "Correo electrónico", type: "text", placeholder: "Ej. ricardo.aguero@fortalecernos.com", default: "ricardo.aguero@fortalecernos.com" },
  { key: "sig_disclaimer", label: "Nota de Horarios Flexibles / Disclaimer", type: "toggle-text", placeholder: "Nuestros horarios son flexibles y mi día de trabajo puede ser distinto al tuyo, no te sientas obligad@ a responder este correo, si está fuera de tu horario laboral.", default: "Nuestros horarios son flexibles y mi día de trabajo puede ser distinto al tuyo, no te sientas obligad@ a responder este correo, si está fuera de tu horario laboral." }
];

function generateSignatureHTML(data) {
  const logoUrl = data.logo_url || "https://github.com/guevaralizarragaf/Correos_FLN/blob/main/assets/LOGO%20FLN%20HD%20-%20AZUL.png?raw=true";
  const nombre = data.sig_nombre || "";
  const cargo = data.sig_cargo || "";
  const area = data.sig_area || "";
  const celular = data.sig_celular || "";
  const correo = data.sig_correo || "";
  const disclaimerText = data.sig_disclaimer || "";

  let detailsHtml = "";

  if (nombre) {
    detailsHtml += `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; color: #1428D6; margin-bottom: 3px; line-height: 1.2;">${nombre}</div>`;
  }
  if (cargo) {
    detailsHtml += `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; color: #1e3a8a; margin-bottom: 3px; line-height: 1.2;">${cargo}</div>`;
  }
  if (area) {
    detailsHtml += `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #71717a; margin-bottom: 3px; line-height: 1.2;">${area}</div>`;
  }
  if (celular) {
    detailsHtml += `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #71717a; margin-bottom: 3px; line-height: 1.2;">C. ${celular}</div>`;
  }
  if (correo) {
    detailsHtml += `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; margin-bottom: 2px; line-height: 1.2;"><a href="mailto:${correo}" style="color: #0284c7; text-decoration: none;">[${correo}]</a></div>`;
  }

  let disclaimerRow = "";
  if (disclaimerText && disclaimerText.trim() !== "") {
    disclaimerRow = `
  <tr>
    <td colspan="2" style="padding-top: 24px;">
      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12.5px; color: #2563eb; font-style: italic; line-height: 1.45;">
        <span style="text-decoration: underline; font-weight: bold; font-style: italic;">Importante:</span> ${disclaimerText}
      </p>
    </td>
  </tr>`;
  }

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; background-color: #ffffff; padding: 12px 0; max-width: 600px; text-align: left;">
  <tr>
    <td valign="top" style="padding-right: 22px; vertical-align: top; width: 130px;">
      <img src="${logoUrl}" alt="Fortalecernos" width="130" style="display: block; border: 0; width: 130px; max-width: 130px; height: auto;">
    </td>
    <td valign="top" style="vertical-align: top; padding-top: 2px;">
      ${detailsHtml}
    </td>
  </tr>
  ${disclaimerRow}
</table>`;
}

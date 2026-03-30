import { ENV } from "./env";

/**
 * Email service module for sending emails through configured provider
 * Supports: Resend, SendGrid, and Gmail (via Nodemailer)
 */

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send email using configured provider
 */
export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const provider = ENV.emailProvider;
  const apiKey = ENV.emailApiKey;
  const fromAddress = ENV.emailFromAddress;

  if (!provider || !apiKey || !fromAddress) {
    console.error("Email configuration missing");
    return { success: false, error: "Email service not configured" };
  }

  try {
    if (provider === "resend") {
      return await sendViaResend(options, apiKey, fromAddress);
    } else if (provider === "sendgrid") {
      return await sendViaSendGrid(options, apiKey, fromAddress);
    } else if (provider === "gmail") {
      return await sendViaGmail(options, apiKey, fromAddress);
    } else {
      return { success: false, error: `Unknown email provider: ${provider}` };
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

/**
 * Send email via Resend API
 */
async function sendViaResend(
  options: EmailOptions,
  apiKey: string,
  fromAddress: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: fromAddress,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Resend error: ${error.message || response.statusText}`);
  }

  const data = await response.json();
  return { success: true, messageId: data.id };
}

/**
 * Send email via SendGrid API
 */
async function sendViaSendGrid(
  options: EmailOptions,
  apiKey: string,
  fromAddress: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: options.to }] }],
      from: { email: fromAddress },
      subject: options.subject,
      content: [
        { type: "text/html", value: options.html },
        ...(options.text ? [{ type: "text/plain", value: options.text }] : []),
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid error: ${error || response.statusText}`);
  }

  const messageId = response.headers.get("x-message-id") || "sent";
  return { success: true, messageId };
}

/**
 * Send email via Gmail (requires nodemailer)
 * Note: For Gmail, apiKey should be an app-specific password
 */
async function sendViaGmail(
  options: EmailOptions,
  apiKey: string,
  fromAddress: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  // Gmail support via nodemailer would require additional setup
  // For now, we'll return an error and recommend using Resend or SendGrid
  throw new Error("Gmail provider requires additional setup. Please use Resend or SendGrid instead.");
}

/**
 * Format anamnese data into HTML email
 */
export function formatAnamneseEmail(data: Record<string, any>): string {
  const sections = [
    {
      title: "DADOS PESSOAIS",
      fields: [
        { label: "Nome", value: data.nome },
        { label: "Idade", value: data.idade },
        { label: "Data de Nascimento", value: data.dataNascimento },
        { label: "Sexo", value: data.sexo },
        { label: "Altura (m)", value: data.altura },
        { label: "Peso (kg)", value: data.peso },
        { label: "Telefone", value: data.telefone },
        { label: "E-mail", value: data.email },
      ],
    },
    {
      title: "OBJETIVO E SAÚDE",
      fields: [
        { label: "Objetivo", value: data.objetivo },
        { label: "Meta Específica", value: data.metaEspecifica },
        { label: "Doenças", value: data.doencas || "Nenhuma" },
        { label: "Cirurgias", value: data.cirurgias || "Nenhuma" },
        { label: "Medicamentos", value: data.medicamentos || "Nenhum" },
        { label: "Alergias/Intolerâncias", value: data.alergias || "Nenhuma" },
        { label: "Funcionamento Intestinal", value: data.intestino },
      ],
    },
    {
      title: "HÁBITOS ALIMENTARES",
      fields: [
        { label: "Rotina Alimentar", value: data.rotina },
        { label: "Refeições por dia", value: data.refeicoes },
        { label: "Pula refeições", value: data.pularefeicoes },
        { label: "Compulsão alimentar", value: data.compulsao },
        { label: "Consome bastante", value: Array.isArray(data.consumo) ? data.consumo.join(", ") : data.consumo },
      ],
    },
    {
      title: "HIDRATAÇÃO E BEBIDAS",
      fields: [
        { label: "Água por dia (L)", value: data.agua },
        { label: "Bebidas alcoólicas", value: data.alcool },
      ],
    },
    {
      title: "ATIVIDADE FÍSICA",
      fields: [
        { label: "Pratica atividade", value: data.atividade },
        { label: "Frequência", value: data.frequencia },
        { label: "Duração", value: data.duracao },
      ],
    },
    {
      title: "SONO E ROTINA",
      fields: [
        { label: "Horas de sono", value: data.sono },
        { label: "Qualidade do sono", value: data.qualidadeSono },
        { label: "Nível de estresse (0-10)", value: data.estresse },
      ],
    },
    {
      title: "COMPORTAMENTO ALIMENTAR",
      fields: [{ label: "Come por", value: Array.isArray(data.comePor) ? data.comePor.join(", ") : data.comePor }],
    },
    {
      title: "HISTÓRICO COM DIETAS",
      fields: [
        { label: "Já fez dieta", value: data.dietas },
        { label: "Teve resultado", value: data.resultado },
        { label: "Efeito rebote", value: data.rebote },
      ],
    },
    {
      title: "PREFERÊNCIAS",
      fields: [
        { label: "Alimentos que gosta", value: data.alimentos },
        { label: "Restrições", value: data.restricoes || "Nenhuma" },
      ],
    },
    {
      title: "COMPROMETIMENTO",
      fields: [
        { label: "Disposição (0-10)", value: data.comprometimento },
        { label: "Disposto a mudar hábitos", value: data.mudanca },
      ],
    },
  ];

  let html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { background: oklch(0.50 0.09 130); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .header h1 { margin: 0; font-size: 24px; }
          .section { margin-bottom: 20px; border-left: 4px solid oklch(0.50 0.09 130); padding-left: 15px; }
          .section h2 { margin: 0 0 10px 0; font-size: 16px; color: oklch(0.50 0.09 130); }
          .field { margin-bottom: 8px; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Anamnese Nutricional Recebida</h1>
            <p>Dados de: ${data.nome || "Cliente"}</p>
          </div>
  `;

  sections.forEach((section) => {
    html += `<div class="section"><h2>${section.title}</h2>`;
    section.fields.forEach((field) => {
      if (field.value) {
        html += `
          <div class="field">
            <span class="label">${field.label}:</span>
            <span class="value">${field.value}</span>
          </div>
        `;
      }
    });
    html += `</div>`;
  });

  if (data.observacoes) {
    html += `
      <div class="section">
        <h2>OBSERVAÇÕES ADICIONAIS</h2>
        <div class="field">
          <span class="value">${data.observacoes}</span>
        </div>
      </div>
    `;
  }

  html += `
          <div class="footer">
            <p>Esta anamnese foi enviada automaticamente pelo sistema de agendamento.</p>
            <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return html;
}

/**
 * Format contact form data into HTML email
 */
export function formatContactEmail(data: { name: string; email: string; phone?: string; message: string }): string {
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: oklch(0.50 0.09 130); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; }
          .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nova Mensagem de Contato</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Nome:</span><br>
              <span class="value">${data.name}</span>
            </div>
            <div class="field">
              <span class="label">E-mail:</span><br>
              <span class="value">${data.email}</span>
            </div>
            ${
              data.phone
                ? `
            <div class="field">
              <span class="label">Telefone:</span><br>
              <span class="value">${data.phone}</span>
            </div>
            `
                : ""
            }
            <div class="field">
              <span class="label">Mensagem:</span><br>
              <span class="value">${data.message.replace(/\n/g, "<br>")}</span>
            </div>
          </div>
          <div class="footer">
            <p>Esta mensagem foi enviada automaticamente pelo formulário de contato.</p>
            <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

import { describe, it, expect, vi, beforeEach } from "vitest";
import { sendEmail, formatAnamneseEmail, formatContactEmail } from "./_core/email";

// Mock do fetch global
global.fetch = vi.fn();

describe("Email Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("formatAnamneseEmail", () => {
    it("deve formatar corretamente os dados da anamnese em HTML", () => {
      const mockData = {
        nome: "João Silva",
        idade: "30",
        dataNascimento: "1994-01-15",
        sexo: "Masculino",
        altura: "1.80",
        peso: "85",
        telefone: "(11) 99999-9999",
        email: "joao@example.com",
        objetivo: "Emagrecimento",
        metaEspecifica: "Perder 10kg",
        doencas: "Nenhuma",
        intestino: "Regular",
        rotina: "Corrida",
        refeicoes: "3",
        pularefeicoes: "Não",
        compulsao: "Não",
        consumo: ["Doces", "Refrigerantes"],
        agua: "2",
        alcool: "Raramente",
        atividade: "Sim",
        frequencia: "3x por semana",
        duracao: "1 hora",
        sono: "7",
        qualidadeSono: "Bom",
        estresse: "5",
        comePor: ["Fome", "Ansiedade"],
        dietas: "Sim",
        resultado: "Sim",
        rebote: "Não",
        alimentos: "Fruta, Verdura",
        restricoes: "Nenhuma",
        comprometimento: "8",
        mudanca: "Sim, totalmente",
        observacoes: "Sem observações",
      };

      const html = formatAnamneseEmail(mockData);

      expect(html).toContain("Anamnese Nutricional Recebida");
      expect(html).toContain("João Silva");
      expect(html).toContain("DADOS PESSOAIS");
      expect(html).toContain("OBJETIVO E SAÚDE");
      expect(html).toContain("HÁBITOS ALIMENTARES");
      expect(html).toContain("Emagrecimento");
      expect(html).toContain("Perder 10kg");
      expect(html).toContain("1.80");
      expect(html).toContain("85");
      expect(html).toContain("<html>");
      expect(html).toContain("</html>");
    });

    it("deve lidar com campos opcionais ausentes", () => {
      const minimalData = {
        nome: "Maria",
        idade: "25",
        dataNascimento: "1999-05-20",
        sexo: "Feminino",
        altura: "1.65",
        peso: "60",
        telefone: "(11) 98888-8888",
        email: "maria@example.com",
        objetivo: "Saúde",
        metaEspecifica: "Melhorar energia",
        intestino: "Regular",
        rotina: "Sedentária",
        refeicoes: "3",
        pularefeicoes: "Não",
        compulsao: "Não",
        agua: "1.5",
        alcool: "Não",
        atividade: "Não",
        sono: "6",
        qualidadeSono: "Regular",
        estresse: "3",
        dietas: "Não",
        alimentos: "Salada",
        comprometimento: "7",
        mudanca: "Sim, parcialmente",
      };

      const html = formatAnamneseEmail(minimalData);

      expect(html).toContain("Maria");
      expect(html).toContain("Nenhuma"); // Para campos opcionais não preenchidos
    });
  });

  describe("formatContactEmail", () => {
    it("deve formatar corretamente os dados de contato em HTML", () => {
      const mockData = {
        name: "Pedro Costa",
        email: "pedro@example.com",
        phone: "(11) 97777-7777",
        message: "Gostaria de agendar uma consulta.",
      };

      const html = formatContactEmail(mockData);

      expect(html).toContain("Nova Mensagem de Contato");
      expect(html).toContain("Pedro Costa");
      expect(html).toContain("pedro@example.com");
      expect(html).toContain("(11) 97777-7777");
      expect(html).toContain("Gostaria de agendar uma consulta.");
      expect(html).toContain("<html>");
      expect(html).toContain("</html>");
    });

    it("deve formatar corretamente sem telefone", () => {
      const mockData = {
        name: "Ana Silva",
        email: "ana@example.com",
        message: "Tenho uma dúvida sobre os serviços.",
      };

      const html = formatContactEmail(mockData);

      expect(html).toContain("Ana Silva");
      expect(html).toContain("ana@example.com");
      expect(html).toContain("Tenho uma dúvida sobre os serviços.");
      expect(html).not.toContain("Telefone:");
    });

    it("deve escapar quebras de linha como <br>", () => {
      const mockData = {
        name: "Test User",
        email: "test@example.com",
        message: "Linha 1\nLinha 2\nLinha 3",
      };

      const html = formatContactEmail(mockData);

      expect(html).toContain("Linha 1<br>Linha 2<br>Linha 3");
    });
  });

  describe("sendEmail", () => {
    it("deve retornar erro se configuração de e-mail estiver faltando", async () => {
      // Limpar variáveis de ambiente
      const originalProvider = process.env.EMAIL_PROVIDER;
      delete process.env.EMAIL_PROVIDER;

      try {
        const result = await sendEmail({
          to: "test@example.com",
          subject: "Test",
          html: "<p>Test</p>",
        });

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
      } finally {
        if (originalProvider) {
          process.env.EMAIL_PROVIDER = originalProvider;
        }
      }
    });

    it("deve retornar erro para provedor desconhecido", async () => {
      process.env.EMAIL_PROVIDER = "unknown_provider";
      process.env.EMAIL_API_KEY = "test-key";
      process.env.EMAIL_FROM_ADDRESS = "test@example.com";

      const result = await sendEmail({
        to: "recipient@example.com",
        subject: "Test",
        html: "<p>Test</p>",
      });

      expect(result.success).toBe(false);
      expect(result.error).toContain("Unknown email provider");
    });
  });
});

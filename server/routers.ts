import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendEmail, formatAnamneseEmail, formatContactEmail } from "./_core/email";
import { z } from "zod";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Email routes for forms
  email: router({
    sendAnamnese: publicProcedure
      .input(
        z.object({
          nome: z.string(),
          idade: z.string(),
          dataNascimento: z.string(),
          sexo: z.string(),
          altura: z.string(),
          peso: z.string(),
          telefone: z.string(),
          email: z.string().email(),
          objetivo: z.string(),
          metaEspecifica: z.string(),
          doencas: z.string().optional(),
          cirurgias: z.string().optional(),
          medicamentos: z.string().optional(),
          alergias: z.string().optional(),
          intestino: z.string(),
          rotina: z.string(),
          refeicoes: z.string(),
          pularefeicoes: z.string(),
          compulsao: z.string(),
          consumo: z.array(z.string()).optional(),
          agua: z.string(),
          alcool: z.string(),
          atividade: z.string(),
          frequencia: z.string().optional(),
          duracao: z.string().optional(),
          sono: z.string(),
          qualidadeSono: z.string(),
          estresse: z.string(),
          comePor: z.array(z.string()).optional(),
          dietas: z.string(),
          resultado: z.string().optional(),
          rebote: z.string().optional(),
          alimentos: z.string(),
          restricoes: z.string().optional(),
          comprometimento: z.string(),
          mudanca: z.string(),
          observacoes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const htmlContent = formatAnamneseEmail(input);
        const result = await sendEmail({
          to: input.email,
          subject: `Anamnese Nutricional Recebida - ${input.nome}`,
          html: htmlContent,
          text: `Anamnese recebida para ${input.nome}. Você receberá um retorno em breve.`,
        });

        if (!result.success) {
          throw new Error(result.error || "Erro ao enviar e-mail");
        }

        return { success: true, messageId: result.messageId };
      }),

    sendContact: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const htmlContent = formatContactEmail(input);
        const result = await sendEmail({
          to: input.email,
          subject: `Mensagem de Contato Recebida - ${input.name}`,
          html: htmlContent,
          text: `Sua mensagem foi recebida. Você receberá um retorno em breve.`,
        });

        if (!result.success) {
          throw new Error(result.error || "Erro ao enviar e-mail");
        }

        return { success: true, messageId: result.messageId };
      }),
  }),
});

export type AppRouter = typeof appRouter;

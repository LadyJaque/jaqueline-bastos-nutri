# Project TODO

## Email System Implementation
- [x] Configurar provedor de e-mail e variáveis de ambiente
- [x] Criar módulo de envio de e-mail no servidor (server/_core/email.ts)
- [x] Implementar procedimentos tRPC para envio de e-mail (email.sendAnamnese, email.sendContact)
- [x] Integrar envio de e-mail com formulário de contato (ContactForm)
- [x] Integrar envio de e-mail com formulário de anamnese (AnamneseSection)
- [x] Escrever testes unitários com Vitest (server/email.test.ts)
- [x] Validar funcionamento dos testes

## Atualizações Visuais
- [x] Atualizar número de telefone de placeholder para (18) 99787-1633

## Próximas Melhorias (Futuro)
- [ ] Adicionar envio de e-mail para o proprietário quando um formulário é submetido
- [ ] Implementar templates de e-mail customizados
- [ ] Adicionar retry logic para falhas de envio
- [ ] Implementar fila de e-mails para melhor performance
- [ ] Adicionar logging detalhado de envios de e-mail

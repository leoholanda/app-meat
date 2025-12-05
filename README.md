# MeatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Backend
Run `json-server db.server` to start backend

## Path Builder Service

Este projeto inclui um serviço para construir caminhos de arquivos de forma dinâmica e configurável.

**Problema resolvido:** Evita hardcoded de nomes de pastas (como "modelos", "aereo") no código, permitindo mudanças fáceis e centralizadas.

**Exemplo de uso:**
```typescript
// Antes (hardcoded):
// const path = `public/${idAgencia}/modelos/aereo/${fileName}`;

// Agora (configurável):
const path = this.pathBuilder.buildAereoPath(idAgencia, fileName);
// Resultado: "public/123/modelos/aereo/documento.pdf"
```

Para alterar os nomes das pastas, basta editar o arquivo `src/app/shared/path-config.ts`.

**Documentação completa:** [docs/PATH_BUILDER.md](docs/PATH_BUILDER.md)

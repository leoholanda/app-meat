# Path Builder Service - Documentação

## Visão Geral

O `PathBuilderService` é um serviço Angular que permite construir caminhos de arquivos de forma dinâmica e configurável, evitando valores hardcoded de nomes de pastas no código.

## Problema Resolvido

Antes, quando você precisava construir um caminho como:
```java
String key = String.format("public/%d/modelos/aereo/%s", idAgencia, fileName);
```

O nome das pastas "modelos" e "aereo" estava hardcoded, tornando difícil mudar esses nomes no futuro.

## Solução

Com o `PathBuilderService`, os nomes das pastas são configuráveis e centralizados, permitindo mudanças fáceis sem alterar o código em vários lugares.

## Como Usar

### 1. Injetar o Serviço

```typescript
import { PathBuilderService } from './shared/path-builder.service';

constructor(private pathBuilder: PathBuilderService) {}
```

### 2. Construir Caminhos

#### Caminho Aereo (equivalente ao exemplo original)
```typescript
const path = this.pathBuilder.buildAereoPath(123, 'documento.pdf');
// Resultado: "public/123/modelos/aereo/documento.pdf"
```

#### Caminho de Modelos Genérico
```typescript
// Só a pasta de modelos
const path1 = this.pathBuilder.buildModelosPath(123);
// Resultado: "public/123/modelos"

// Com subpasta
const path2 = this.pathBuilder.buildModelosPath(123, 'aereo');
// Resultado: "public/123/modelos/aereo"

// Com subpasta e arquivo
const path3 = this.pathBuilder.buildModelosPath(123, 'aereo', 'file.pdf');
// Resultado: "public/123/modelos/aereo/file.pdf"
```

#### Caminho Totalmente Customizado
```typescript
const path = this.pathBuilder.buildPath(123, 'custom', 'folder', 'file.pdf');
// Resultado: "public/123/custom/folder/file.pdf"
```

### 3. Alterar Nomes das Pastas

#### Método 1: Editar o arquivo de configuração (Recomendado)

Edite o arquivo `src/app/shared/path-config.ts`:

```typescript
export const DEFAULT_PATH_CONFIG: PathConfig = {
  publicFolder: 'public',
  modelosFolder: 'templates',  // Mudou de 'modelos' para 'templates'
  aereoFolder: 'aviation'       // Mudou de 'aereo' para 'aviation'
};
```

#### Método 2: Configurar em tempo de execução

```typescript
// No construtor ou ngOnInit do componente/serviço
this.pathBuilder.setConfig({
  modelosFolder: 'templates',
  aereoFolder: 'aviation'
});

// Agora todos os caminhos usarão os novos nomes
const path = this.pathBuilder.buildAereoPath(123, 'file.pdf');
// Resultado: "public/123/templates/aviation/file.pdf"
```

## Exemplos Práticos

### Exemplo 1: Upload de Arquivo
```typescript
uploadFile(idAgencia: number, file: File) {
  const path = this.pathBuilder.buildAereoPath(idAgencia, file.name);
  // Usar 'path' para upload
  return this.http.post(path, file);
}
```

### Exemplo 2: Download de Arquivo
```typescript
getFileUrl(idAgencia: number, fileName: string): string {
  return this.pathBuilder.buildAereoPath(idAgencia, fileName);
}
```

### Exemplo 3: Listar Arquivos de uma Pasta
```typescript
getFolderPath(idAgencia: number): string {
  return this.pathBuilder.buildModelosPath(idAgencia, 'aereo');
}
```

## Benefícios

1. **Centralização**: Todos os nomes de pastas em um único lugar
2. **Fácil Manutenção**: Mude o nome uma vez, afeta todo o código
3. **Flexibilidade**: Configure diferentes nomes para diferentes ambientes
4. **Testabilidade**: Fácil de testar com diferentes configurações
5. **Sem Hardcoded**: Elimina strings mágicas espalhadas pelo código

## Arquivos Relacionados

- `src/app/shared/path-config.ts` - Configuração de nomes de pastas
- `src/app/shared/path-builder.service.ts` - Serviço principal
- `src/app/shared/path-builder.service.spec.ts` - Testes unitários

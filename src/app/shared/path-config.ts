/**
 * Configuração de nomes de pastas para construção de caminhos
 * 
 * Este arquivo permite que os nomes das pastas sejam alterados em um único lugar,
 * evitando valores hardcoded espalhados pelo código.
 */

export interface PathConfig {
  /** Nome da pasta base pública */
  publicFolder: string;
  
  /** Nome da pasta de modelos (pode mudar para outros valores como "templates", "designs", etc) */
  modelosFolder: string;
  
  /** Nome da pasta aereo */
  aereoFolder: string;
}

/**
 * Configuração padrão de nomes de pastas
 * Altere estes valores para mudar os nomes das pastas globalmente
 */
export const DEFAULT_PATH_CONFIG: PathConfig = {
  publicFolder: 'public',
  modelosFolder: 'modelos',
  aereoFolder: 'aereo'
};

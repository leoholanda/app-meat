import { Injectable } from '@angular/core';
import { PathConfig, DEFAULT_PATH_CONFIG } from './path-config';

/**
 * Serviço para construir caminhos de forma dinâmica e configurável
 * 
 * Este serviço permite construir caminhos sem hardcoded de nomes de pastas,
 * usando uma configuração centralizada que pode ser alterada facilmente.
 * 
 * Exemplo de uso:
 * ```typescript
 * const path = pathBuilder.buildAereoPath(123, 'arquivo.pdf');
 * // Resultado: "public/123/modelos/aereo/arquivo.pdf"
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class PathBuilderService {
  
  private config: PathConfig;

  constructor() {
    this.config = DEFAULT_PATH_CONFIG;
  }

  /**
   * Atualiza a configuração de caminhos
   * @param config Nova configuração de caminhos
   */
  setConfig(config: Partial<PathConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Obtém a configuração atual
   */
  getConfig(): PathConfig {
    return { ...this.config };
  }

  /**
   * Constrói um caminho para arquivos aereo
   * Equivalente a: String.format("public/%d/modelos/aereo/%s", idAgencia, fileName)
   * 
   * @param idAgencia ID da agência
   * @param fileName Nome do arquivo
   * @returns Caminho completo
   */
  buildAereoPath(idAgencia: number, fileName: string): string {
    return `${this.config.publicFolder}/${idAgencia}/${this.config.modelosFolder}/${this.config.aereoFolder}/${fileName}`;
  }

  /**
   * Constrói um caminho para a pasta de modelos
   * 
   * @param idAgencia ID da agência
   * @param subFolder Subpasta dentro de modelos (opcional)
   * @param fileName Nome do arquivo (opcional)
   * @returns Caminho completo
   */
  buildModelosPath(idAgencia: number, subFolder?: string, fileName?: string): string {
    let path = `${this.config.publicFolder}/${idAgencia}/${this.config.modelosFolder}`;
    
    if (subFolder) {
      path += `/${subFolder}`;
    }
    
    if (fileName) {
      path += `/${fileName}`;
    }
    
    return path;
  }

  /**
   * Constrói um caminho genérico baseado na configuração
   * 
   * @param idAgencia ID da agência
   * @param segments Segmentos adicionais do caminho
   * @returns Caminho completo
   */
  buildPath(idAgencia: number, ...segments: string[]): string {
    const basePath = `${this.config.publicFolder}/${idAgencia}`;
    return segments.length > 0 ? `${basePath}/${segments.join('/')}` : basePath;
  }
}

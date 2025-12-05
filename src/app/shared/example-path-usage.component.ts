import { Component } from '@angular/core';
import { PathBuilderService } from './shared/path-builder.service';

/**
 * Exemplo de uso do PathBuilderService em um componente
 * 
 * Este arquivo demonstra como usar o serviço para construir caminhos
 * de forma dinâmica e configurável.
 */
@Component({
  selector: 'app-example-path-usage',
  template: `
    <div class="example-container">
      <h2>Exemplo de Uso do Path Builder</h2>
      
      <div class="example-section">
        <h3>Caminho Aereo</h3>
        <p>ID Agência: {{ agencyId }}</p>
        <p>Nome do Arquivo: {{ fileName }}</p>
        <p><strong>Caminho Gerado:</strong> {{ aereoPath }}</p>
      </div>

      <div class="example-section">
        <h3>Caminho Modelos</h3>
        <p><strong>Pasta Modelos:</strong> {{ modelosPath }}</p>
      </div>

      <div class="example-section">
        <h3>Configuração Personalizada</h3>
        <button (click)="changeConfig()">Mudar Nomes das Pastas</button>
        <p><strong>Caminho após mudança:</strong> {{ customPath }}</p>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      padding: 20px;
    }
    .example-section {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class ExamplePathUsageComponent {
  agencyId = 123;
  fileName = 'documento.pdf';
  aereoPath: string;
  modelosPath: string;
  customPath: string;

  constructor(private pathBuilder: PathBuilderService) {
    // Construir caminho aereo (equivalente ao String.format original)
    this.aereoPath = this.pathBuilder.buildAereoPath(this.agencyId, this.fileName);
    
    // Construir caminho de modelos
    this.modelosPath = this.pathBuilder.buildModelosPath(this.agencyId, 'aereo');
    
    // Inicialmente igual ao aereoPath
    this.customPath = this.aereoPath;
  }

  /**
   * Demonstra como alterar a configuração de nomes de pastas
   */
  changeConfig(): void {
    // Alterar os nomes das pastas
    this.pathBuilder.setConfig({
      modelosFolder: 'templates',
      aereoFolder: 'aviation'
    });

    // Reconstruir o caminho com os novos nomes
    this.customPath = this.pathBuilder.buildAereoPath(this.agencyId, this.fileName);
  }

  /**
   * Exemplo de uso prático: upload de arquivo
   */
  uploadFile(file: File): void {
    const uploadPath = this.pathBuilder.buildAereoPath(this.agencyId, file.name);
    console.log('Uploading to:', uploadPath);
    
    // Aqui você faria o upload real usando HttpClient
    // this.http.post(uploadPath, file).subscribe(...)
  }

  /**
   * Exemplo de uso prático: obter URL de download
   */
  getDownloadUrl(fileName: string): string {
    return this.pathBuilder.buildAereoPath(this.agencyId, fileName);
  }

  /**
   * Exemplo de uso prático: listar arquivos de uma pasta
   */
  getFileListPath(): string {
    return this.pathBuilder.buildModelosPath(this.agencyId, 'aereo');
  }
}

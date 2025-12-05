import { TestBed } from '@angular/core/testing';
import { PathBuilderService } from './path-builder.service';

describe('PathBuilderService', () => {
  let service: PathBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('buildAereoPath', () => {
    it('should build correct aereo path with default config', () => {
      const path = service.buildAereoPath(123, 'documento.pdf');
      expect(path).toBe('public/123/modelos/aereo/documento.pdf');
    });

    it('should build correct aereo path with different idAgencia', () => {
      const path = service.buildAereoPath(456, 'relatorio.xlsx');
      expect(path).toBe('public/456/modelos/aereo/relatorio.xlsx');
    });

    it('should handle special characters in filename', () => {
      const path = service.buildAereoPath(789, 'arquivo-especial_2024.pdf');
      expect(path).toBe('public/789/modelos/aereo/arquivo-especial_2024.pdf');
    });
  });

  describe('buildModelosPath', () => {
    it('should build modelos path without subfolder and filename', () => {
      const path = service.buildModelosPath(123);
      expect(path).toBe('public/123/modelos');
    });

    it('should build modelos path with subfolder', () => {
      const path = service.buildModelosPath(123, 'aereo');
      expect(path).toBe('public/123/modelos/aereo');
    });

    it('should build modelos path with subfolder and filename', () => {
      const path = service.buildModelosPath(123, 'aereo', 'documento.pdf');
      expect(path).toBe('public/123/modelos/aereo/documento.pdf');
    });

    it('should build modelos path with only filename', () => {
      const path = service.buildModelosPath(123, undefined, 'documento.pdf');
      expect(path).toBe('public/123/modelos/documento.pdf');
    });
  });

  describe('buildPath', () => {
    it('should build generic path with single segment', () => {
      const path = service.buildPath(123, 'documents');
      expect(path).toBe('public/123/documents');
    });

    it('should build generic path with multiple segments', () => {
      const path = service.buildPath(123, 'modelos', 'aereo', 'file.pdf');
      expect(path).toBe('public/123/modelos/aereo/file.pdf');
    });

    it('should build generic path with no additional segments', () => {
      const path = service.buildPath(123);
      expect(path).toBe('public/123/');
    });
  });

  describe('setConfig', () => {
    it('should update modelos folder name', () => {
      service.setConfig({ modelosFolder: 'templates' });
      const path = service.buildAereoPath(123, 'file.pdf');
      expect(path).toBe('public/123/templates/aereo/file.pdf');
    });

    it('should update aereo folder name', () => {
      service.setConfig({ aereoFolder: 'aviation' });
      const path = service.buildAereoPath(123, 'file.pdf');
      expect(path).toBe('public/123/modelos/aviation/file.pdf');
    });

    it('should update public folder name', () => {
      service.setConfig({ publicFolder: 'assets' });
      const path = service.buildAereoPath(123, 'file.pdf');
      expect(path).toBe('assets/123/modelos/aereo/file.pdf');
    });

    it('should update multiple folder names at once', () => {
      service.setConfig({
        publicFolder: 'storage',
        modelosFolder: 'templates',
        aereoFolder: 'flight'
      });
      const path = service.buildAereoPath(123, 'file.pdf');
      expect(path).toBe('storage/123/templates/flight/file.pdf');
    });

    it('should preserve non-updated config values', () => {
      service.setConfig({ modelosFolder: 'designs' });
      const config = service.getConfig();
      expect(config.publicFolder).toBe('public');
      expect(config.modelosFolder).toBe('designs');
      expect(config.aereoFolder).toBe('aereo');
    });
  });

  describe('getConfig', () => {
    it('should return current config', () => {
      const config = service.getConfig();
      expect(config).toEqual({
        publicFolder: 'public',
        modelosFolder: 'modelos',
        aereoFolder: 'aereo'
      });
    });

    it('should return a copy of config', () => {
      const config1 = service.getConfig();
      config1.modelosFolder = 'changed';
      const config2 = service.getConfig();
      expect(config2.modelosFolder).toBe('modelos');
    });
  });
});

import { Injectable } from '@angular/core';
import * as pbi from 'powerbi-client';

@Injectable({
  providedIn: 'root'
})
export class PowerBiService {

  private powerBiService: pbi.service.Service;

  constructor() {
    this.powerBiService = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
  }

  embedReport(reportContainer: HTMLElement, embedConfig: pbi.IEmbedConfiguration): pbi.Embed {
    return this.powerBiService.embed(reportContainer, embedConfig);
  }

  reset(reportContainer: HTMLElement): void {
    this.powerBiService.reset(reportContainer);
  }
}

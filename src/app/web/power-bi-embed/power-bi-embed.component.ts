import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as pbi from 'powerbi-client';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { PowerBiService } from '../../services/power-bi.service';


@Component({
  selector: 'app-power-bi-embed',
  templateUrl: './power-bi-embed.component.html',
  styleUrls: ['./power-bi-embed.component.css'],
  standalone: true,
  imports: [
    HttpClientModule
  ]
})
export class PowerBiEmbedComponent implements OnInit {
  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef;
  embedToken: string = ''
  token: string = "H4sIAAAAAAAEACWUta7sCAJE_-WmXslMK73AzG4zZWZmuw2j-fe9O5NXUHWkOn_9WOkzzGnx898f3ikeSw3QLybcfoWlfEpyRNWVJOOa356gbfFuAEepOjCexHw_e8qz3YMXQaxHWl3oVmgTw3VCVoJKy_HrxdGK1OVXWnlTRqLBgZJqmOJbj4Ed7lHSIBAcYdxjupaa8J1yva7gRtLIiNUbjiTzmko2k1JD76FY8EYHE-W9joMsqC5YauzwXHjsHafoKIXWlCGSnsqRGsW6pwj5U2juyrt8WkfTKM4w-4FD_VqYD8HVqz-E_ksVyUkOm-7xAO5cXD1sL-DjG9zQ3fw29BJb-7vPzRBVpOA-TR73A_jZ1Bd0Z_go-0c_IlnrcGMEmu6mNlKN7jZHQjQvx1ls0KfERo4eYuNC6y4jKvyIroyCNZoMsMVblja98rL_kvhNCU1P6vxnHKEoK15rNzhGhNhq_gJULPMJ5tXDQY9Q1x1Dd3SGtRoq9pCnjSJg2jmEX6T1Uiazze4vv6zjrAs6aF11BS69qm4GdMQb6qE4otqHMybP3dtl5e5GctoUcSnkqpVVny-39hDsF6tGn7No1-MtkjhJKXAcWFDMSzVgutEryEncCLjmMFgJWFgtuyTFKLsLiszbaf9ouCaj5yRWM5zsbV-QmS4GCVB41tlqkbYdGeiAG5A_eA50bGv3nXSzXSilDZBGOuex6m1EY2EndDp_5fOK2rY_zNMK05yeHCAHtIdLba6kQ0gVZWLcx7gYeGGrIO7UbPDbfqP8gStqzWOSqMToE9XN-Pna8Psp23x2jhE8BRYIrxRE-ZSvDYKm5xc1pv0BEo3RTIsJT-RZNHcSQ5WWuJTGOIgYPMikMUmI4fgjO6BGxawSoGS9GDWoKi9vmTM5bxHCBLZI34-njICkWVA-p0RgxyCe0ZbbPYr0tmCh8tvvRMG_Ow4WosrfFewr772SBW6Lx30Nj2L0CqTgpAEg78eOC4ykbyaygXIlmvjBBsFDJ9Cfn__8cNuzHLNWPr_Xze_HmlHhc3jejfz2tKiiDrbEly09W_dXkMjMrIkPABcjIZega5qd3qhvO_vba342YLea9cx8FqssIXEoIlQ1W6frejBbD-_VmC_smmfl5NiQLZn9bD4DQxoyjjXsnS9SQ8Z3UovvTQu_1jXcK0Q6SfuErHwMcp2pvzq5yPyhxZDKblRxT5RdEroF0nOJ4kddq6lnov1J1Lw65ZBHVpi-PxDxq47x7O6qbBfpW7LKqS5uaQtiewzqEIwuM7eIKctASgp6HyOSMYQvqSlVwDgyc6dXYNHnZEFDQi4ZdblKiW5r3ZwMLKDU0wRfjDn2JjEpSKCtQKGUO-ufyVFynr53uRCZP_9gfpam3JTgl3ImiN9jIiw7xdzgc0YlwAvUvym3raf0OLfyN8bxv0ZwA2D84krwkHcieMkDTnRl66jsZ0_Ua7uKP3bvuV0pESOSct7JCFJZOU-X8gxEOb1iKKry4DIGFfBGSWlKCZbUjz6-3px03Yruzd1AEYBhvDswf9wmu2SW6Ub0VDT30H3aFZ7YbAfM5wbA7hlOWuxpk85YrHTfT-MZmVKq70bH4b_tmVwaci65AHwqZbqsQZhJ8TQfrGvw6Q549YCwc_70Vsic-rWRwZ0tHODPZt2HeXDm0UcIwIIb5IJsO_OEu9SGg5kU_JqctOORVVprSTx9C5TsZdc1g4Vx9ILa3Jczgx4VFU9GbjgLBzbKToO5c0TsIFqWevlkfJ1pUyQC_o_57_8Bf2g8jK4GAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcyOTI0ODE5MCwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9"
  constructor(
    private powerBiService: PowerBiService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.embedPowerBiReport();
  }

  embedPowerBiReport(): void {
    const apiUrl = 'https://login.microsoftonline.com/b3ddb153-3e04-4945-9157-215ea5f4b505/oauth2/token';
    const payload = {
      "grant_type": "client_credentials",
      "client_id": "075fb755-6f54-44bb-845f-0d1586481b9a",
      "client_secret": "kDU8Q~fEcTGoBe78oOVTjgMW3pSAD5XjQT0kFb9X",
      "scope": 'https://analysis.windows.net/powerbi/api/.default',
      "username": 'info@collexebi.onmicrosoft.com',
      "password": 'collexe@102024'
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    };
    let authToken = ""
    this.http.post(apiUrl, payload)
      .subscribe((response: any) => {
        console.log('Response from API:', response);

        this.getEmbedToken(response.access_token)
      }, error => {
        console.error('Error:', error);
      });

    
  }

  getEmbedToken(token: any) {
    const payload = {
      "datasets": [
        {
          "id": "3b0d7a2a-ff7e-459e-9732-6d6840325bcf"
        }
      ],
      "reports": [
        {
          "id": "f94b4195-d311-416c-96ba-de102f58bd1a"
        }
      ],
      "targetWorkspaces": [
        {
          "id": "f94dcece-63e4-4c27-a859-b82e28da69e5"
        }
      ],
      "identities": [
        {
          "username": "info@collexebi.onmicrosoft.com",
          "roles": ["mamee"],
          "datasets": ["3b0d7a2a-ff7e-459e-9732-6d6840325bcf"]

        }
      ]
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    };
    this.http.post("https://api.powerbi.com/v1.0/myorg/GenerateToken", payload, httpOptions)
      .subscribe((response: any) => {
        console.log('Response from API:', response);
        this.embedToken = response.token
        const embedConfig = {
          type: 'report', // could be 'dashboard' or 'tile' depending on what you want to embed
          id: 'f94b4195-d311-416c-96ba-de102f58bd1a',  // Replace with your report ID
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f94b4195-d311-416c-96ba-de102f58bd1a\u0026groupId=f94dcece-63e4-4c27-a859-b82e28da69e5\u0026w=2\u0026config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",  // Replace with your report embed URL
          accessToken: this.embedToken,
          tokenType: pbi.models.TokenType.Embed,  // 1 is for Embed token
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: true,
            layoutType: pbi.models.LayoutType.MobilePortrait
          }
        };
    
    
        this.powerBiService.embedReport(this.reportContainer.nativeElement, embedConfig);
      }, error => {
        console.error('Error:', error);
      });
  }
}

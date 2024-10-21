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
  token: string = "H4sIAAAAAAAEACWUNY7EBgAA_3KtI5ntdaQUZmZ2Z2ZeY5S_55T0U4008_ePlT7DnBY_f_4w-3WPJD1oNKNAqG54oeONtA4JHOk7zA1e6INZKgwpPKsred6qAjYDkRhjXjcDU4Cr5OhhBhYxC6AZBTXj-SZ-vye2cF56i6Wy8UuPhB_vnRtfrZxAMKYgy5_Xpfzou9PiSPSAjotOJFbeE0VSEZlfc3OGqkEA_41qyrlRfhl7YtRwEIrQgre_63aAW64xHMEWJ9Nj5wYWarYObwnaua9idtQkIsctHssTqh-IZTdgIM3DrT7sYI6OWGHl35q14DqArjLRVbDSSUOAbMYZsuojIo-0aUAhD7C7CZoLWHBuvPMr33LUejXuvVLcfOirSnM-P9DVByLimFUyPcpZI1Y65znoyjGGgPfEPoHjTIcFS3GyC06t9_P8El9bdjn6g_cbQ9yqknSTqPRTlXEQjHWbl7N-fz5g4L7x6-JAEsh8oaoEZbkfir5dsnoPOSh7deTg1jUHvmMOgEQsLgLXMw0DA1YhKPxFFp5gsWXwupF0qFcBEz1qbcVaRBmSTQjQ7V3k5JdYV5NHbi3U-xSbURw3Au7WEMlSPraD0BSuG5F5S65Wqj1R4lRHmfj0fbAyaQYhIPK-60XdSfQ6oNjsgQZnIOV8NZhg9hN0TWw-loZReQBYfpkmt2Cylfjy1fJxAzJuQ5wPVYw5UxmQMSWs3vVRGws8zfm2PeP0kj5EEfJxNDE2PXNmp71LwlYynd0BI9bD-vGggg_FF0rgxeFKm8UJHZAb8now1iLiNugcExVduEUw98FgSuv5SGl4IAECCkM1ayu3Xqd7PyA212wEuvOu3c5PkNFERL7dfMpgkM1AL5JgpCOxINp7fG5Vy0yNMrwzs6vSIX_ahCO3xudPJFwXw3K4QTBwcBnh4W2EsTOLZEkujznTD9rJtP9uGwT5oRyB6WagH6Lkxbb2dT8iBpaYzoC7wmx5pzSW20KiMiI8mqfO__r544fdnuU7q-Xzm26yBeINm4ph08xeDUpqLN_GXnGugy7b_zoelqkSc2uwqszOvuZNVpwmBbwj1jI0u6m7xeu1vTZ-G1_WaO9TU-RazYDp59xaXyaf3_IQY1d3Mwb597SiT7xAydX118c0wRU-hrD1w01VMEnmR0ojsOlYO54uqwy46156DjqID_Y65OjZaG7IA2oJcEiGoWd9aVPmm0NhHtynId69iOflk547ulbY88gCugW5nbEWzecLOZRguE1_xGkhZ2e6n4TbFu-aGeTrt8dZSppBZfYqT4_zddi2g0e-rfwESQCA5FK6S2A5WuUn-zAJp3C254980feDODG8WSfQxarotThA7Ltrev31n-ZnacpNDn4tN7RAsyJ5-aGYqxGZZMQDif9TbltP6ffYyl9MMqAKmpC3_ZYksFa9ogWB4tsRYp9ug-A92gTy2wY5UIOtqfk53OIZlkYDK2hzK7nJoRpNnXkMMA0Om4QDpYEjux44VlHeB_iqd0zrk7Q6c4JAiQy_KVEDkqy0nF_oBCWWk0GQsalKyCDISLo9vwN7RHYquW9Wy1iGjk3UseZCR5P1vLt-tNoc1Y9WsY1Z0Uizkd6memlY-sViVp7woG4JGaHt36Alirs71-0aLAep3RsqJSg59UuCfMqC5o53qmiJscKwjNVbu8ph2xawd1JPD4X3W5bcrN8hLe6qCmj6rGtYCzuXTYv6Qw-fxi8Api1sRndVtxIAQWrxS8XO6y3O3_n8av7nXxdSYNeuBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcyOTUwMDUzNywiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9"
  constructor(
    private powerBiService: PowerBiService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    const embedConfig = {
      type: 'report', // could be 'dashboard' or 'tile' depending on what you want to embed
      id: 'f94b4195-d311-416c-96ba-de102f58bd1a',  // Replace with your report ID
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f94b4195-d311-416c-96ba-de102f58bd1a\u0026groupId=f94dcece-63e4-4c27-a859-b82e28da69e5\u0026w=2\u0026config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",  // Replace with your report embed URL
      accessToken: this.token,
      tokenType: pbi.models.TokenType.Embed,  // 1 is for Embed token
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: true,
        layoutType: pbi.models.LayoutType.MobilePortrait
      }
    };


    this.powerBiService.embedReport(this.reportContainer.nativeElement, embedConfig);
    // this.embedPowerBiReport();
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

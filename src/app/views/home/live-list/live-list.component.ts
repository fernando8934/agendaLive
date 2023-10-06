import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious!: Live[];
  livesNext!: Live[];
  // live!: Live[];

  constructor(
    public liveService: LiveService,
    public sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
    // this.getLives();
    this.livesPrevious = [{
      id : '001',
     liveName : 'la ele 1000x',
     channelName : 'como seu disco',
     liveDate : '25/12/2023',
     liveTime : '16:20',
     liveLink : 'liveLink',
     registrationDate : '05/10/2023',
     urlSafe : '',
    },
    {
      id : '002',
     liveName : 'como apertar a ganja',
     channelName : 'passa a bola',
     liveDate : '20/11/2023',
     liveTime : '0:40',
     liveLink : 'liveLink',
     registrationDate : '05/10/2023',
     urlSafe : '',
    }
  ]

    this.livesNext = [{
      id : '003',
     liveName : 'aprenda a tocar violão',
     channelName : 'com Fernando lindo',
     liveDate : '07/11/2023',
     liveTime : 'liveTime',
     liveLink : 'liveLink',
     registrationDate : 'registrationDate',
     urlSafe : '',
    },
  
    {
      id : '004',
     liveName : 'como pegar mulher',
     channelName : 'capitulo 1',
     liveDate : '30/11/2023',
     liveTime : 'liveTime',
     liveLink : 'liveLink',
     registrationDate : 'registrationDate',
     urlSafe : '',
    }]
  }

  getLives(){
    this.liveService.getLivesWithFlag('previous').subscribe(data =>{
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
      this.livesPrevious.forEach(live => {
        // live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      });
    });
    
    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      console.log(this.livesNext);
      this.livesNext.forEach(live => {
        // live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
    });
});
  }
  
}

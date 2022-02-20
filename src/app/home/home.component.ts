import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { SocialAuthService} from 'angularx-social-login';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterContentChecked{

  constructor(
    private homeservice: HomeService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private cdref: ChangeDetectorRef
  ) { }
  items: any;
  sidebarItems: any;
  visibleSidebar2 = false;
  viewSidebarButton = false;
  username: any;

  ngOnInit(): void {
    this.items = [
      {
          items: [{
              label: 'Profile',
              icon: 'pi pi-user',
              url: 'https://google.com'
          },
          {
              label: 'Logout',
              icon: 'pi pi-sign-out',
              command: () => {
                this.logout();
            }
          }
      ]}
    ];
    
    this.sidebarItems =  [{
      label: 'Select Charts',
      items: [{
          label: 'Candle Stick Charts',
          command: () => {
            this.visibleSidebar2 = false;
            setTimeout(()=>{
              this.router.navigate(['/charts/candlestick-charts']);
            },800);            
          }
      },
      {
          label: 'Line Charts',
          command: () => {
            this.visibleSidebar2 = false;
            setTimeout(()=>{
              this.router.navigate(['/charts/line-charts']);
            },800);            
          }
      }
      ]},
    ];
    this.getUsername();
  }
  ngAfterContentChecked(): void {
    this.homeservice.showSideBarEvent.subscribe(res=>{
      this.viewSidebarButton = res;
    });
    this.cdref.detectChanges();
  }
  

  getUsername(){
    this.username =  window.localStorage.getItem('name')
  }

  logout() {
     this.socialAuthService.signOut().then((_res: any) =>{
      window.localStorage.clear();
      this.router.navigate(['/login']);
     }, _reject =>{
        window.localStorage.clear();
        this.router.navigate(['/login']);
     });   
  }

}

import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ButtonModule } from "primeng/button";
import { AvatarModule } from "primeng/avatar";
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import {BadgeModule} from 'primeng/badge';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    ProgressSpinnerModule,
    ButtonModule,
    AvatarModule,
    MenuModule,
    SidebarModule,
    ChipModule,
    BadgeModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}

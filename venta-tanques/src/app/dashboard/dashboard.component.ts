import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="dashboard";
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  isExpandedProducts = true;
  showSubmenuProducts: boolean = false;
  isShowingProducts = false;
  showSubSubMenuProducts: boolean = false;


  isExpandedCompras= true;
  showSubmenuCompras: boolean = false;
  isShowingCompras = false;
  showSubSubMenuCompras: boolean = false;

  isExpandedInventario= true;
  showSubmenuInventario: boolean = false;
  isShowingInventario = false;
  showSubSubMenuInventario: boolean = false;

  isExpandedUsuarios= true;
  showSubmenuUsuarios: boolean = false;
  isShowingUsuarios = false;
  showSubSubMenuUsuarios: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
      this.isShowingProducts = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
      this.isShowingProducts = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

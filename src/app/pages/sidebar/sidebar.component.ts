import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sub-btn').click(function(){
      console.log("Toggle")
      $('div.sub-menu-show').toggleClass("show");
      $('.dropdown').toggleClass("rotate");
    });
  }

}

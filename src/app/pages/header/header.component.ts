import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggled : any = 1;
  sidebar : any;
  username : any;
  UserName : any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    var str = new String(this.username); 
    this.UserName = str.charAt(0).toUpperCase();
  }

  toggle(){
    this.sidebar = document.getElementById('sidebar')
    if(this.toggled){
      this.sidebar.style.width = "80px"
      this.toggled = 0;
    }else{
      this.sidebar.style.width = "200px"
      this.toggled = 1;
    }
  }

  logout(){
    this.authService.logout()
  } 

}

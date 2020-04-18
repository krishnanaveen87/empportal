import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'empportal';
  searchText: any;
  employee: any;
  show = false;
  show1 = false;
  buttonName = 'Seach';
  hide: any;
  toggle (){
    this.show = !this.show;

    if(this.show) {
    this.buttonName = 'Hide';
    //console.log(this.show)
    }
    else {
    this.buttonName = 'Show';
    }
    }
    toggle1 (){
      this.show1 = !this.show1;
  
      if(this.show) {
      this.buttonName = 'Hide';
      //console.log(this.show)
      }
      else {
      this.buttonName = 'show1';
      }
      }
  ngOnInit() {
  this.employee = [
    { name: 'Andrew bridgen', designation: 'Sr. UI Developer', exp: '7.8 yrs' , doj: '2017' , currentteam: 'OCBC Singapore', reportingmanager:'Lalit Agarwal', ph: '7401257852' , mail : 'andrew@infrrd.com', checked: true},
    { name: 'Tom graveney', designation: 'UI Developer', exp: '3.8 yrs' , doj: '2018' , currentteam: 'IDC Singapore', reportingmanager:'Lalit Agarwal', ph: '7401257852' , mail : 'tom@infrrd.com', checked: false},
    { name: 'dicaprio', designation: 'Testing Engineer', exp: '5.8' , doj: '2016' , currentteam: 'IDC Singapore', reportingmanager:'Lalit Agarwal', ph: '895236587' , mail : 'dicaprio@infrrd.com'},
    { name: 'richard hadlee', designation: 'Sr. Testing Engineer', exp: '5.8' , doj: '2016' , currentteam: 'OCBC Singapore', reportingmanager:'Lalit Agarwal', ph: '895236557' , mail : 'richard@infrrd.com'},
    { name: 'richie richardson', designation: 'System Admin', exp: '5.2' , doj: '2016' , currentteam: 'OCBC Singapore', reportingmanager:'Lalit Agarwal', ph: '985236587' , mail : 'richie@infrrd.com'},
    { name: 'ricky ponting', designation: 'Business Analyst', exp: '5.2' , doj: '2016' , currentteam: 'Radian Singapore', reportingmanager:'Lalit Agarwal', ph: '875236587' , mail : 'ricky@infrrd.com'},
    { name: 'jason holder', designation: 'IT Analyst', exp: '7.8' , doj: '2016' , currentteam: 'Rustify Singapore', reportingmanager:'Lalit Agarwal', ph: '895236587' , mail : 'jason1@infrrd.com'},
    { name: 'jason roy', designation: 'Sr. Admin Engineer', exp: '8.8' , doj: '2010' , currentteam: 'IDC Singapore', reportingmanager:'Lalit Agarwal', ph: '955236587' , mail : 'jason@infrrd.com'},
    { name: 'jos buttler', designation: 'Sr. Testing Engineer', exp: '8.0' , doj: '2016' , currentteam: 'Rustify Singapore', reportingmanager:'Lalit Agarwal', ph: '885236587' , mail : 'jos@infrrd.com'},
    { name: 'david willey', designation: 'Oracle Admin', exp: '5.8' , doj: '2016' , currentteam: 'Radian Singapore', reportingmanager:'Lalit Agarwal', ph: '905236587' , mail : 'david@infrrd.com'},
    { name: 'dinesh karthik', designation: 'IT Analyst', exp: '5.8' , doj: '2012' , currentteam: 'Rustify Singapore', reportingmanager:'Lalit Agarwal', ph: '705236587' , mail : 'dinesh@infrrd.com'},
    { name: 'gautam gambhir', designation: 'Testing Engineer', exp: '5.8' , doj: '2016' , currentteam: 'Radian Singapore', reportingmanager:'Lalit Agarwal', ph: '795236587' , mail : 'gautam@infrrd.com'}
   
  ];



 

}
}
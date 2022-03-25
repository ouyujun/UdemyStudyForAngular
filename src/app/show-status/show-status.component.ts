import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.scss']
})
export class ShowStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id: string = "abc6521";
  serverStatus: string = "online";
  getServerStats() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'rgb(93, 135, 250)' : '#bbb';
  }
  onServerStatus() {
    if (this.serverStatus !== 'offline') { this.serverStatus = "offline" } else { this.serverStatus = "online" }
  }
  // onAddServers() {
  //   this.servers.push(this.setInput);
  //   this.setInput="";
  // }
}

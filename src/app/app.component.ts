import { Component } from '@angular/core';
import { serversType } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*styleUrls:['./app.component.scss']*/
  styles: [`
    h3 {
      color: darkblue;
    }
    .show{
      width: 100%;
      height: 80px;
      }
    `]
})
export class AppComponent {
  name: string = 'Hi,this my app!';
  select: boolean = true;
  allowNewServer: Boolean = false;
  serverCreationStatus:string="No server was created";
  ServerName:string ="";
  ServerPassword:string ="";
  servers: serversType[] =[];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  onSelect() {
    this.select = !this.select;
  }
  onCreateServer(){
    this.servers.push({
      userName:this.ServerName,
      passWord:this.ServerPassword
    });
    console.log(this.servers)
    this.ServerName=null;
    this.ServerPassword=null;
  }
  onUpdateServerName(event:Event){
    this.ServerName=(<HTMLInputElement>event.target).value;
  }
  onDisabled(){
    return !this.ServerPassword || !this.ServerName;
  }
}

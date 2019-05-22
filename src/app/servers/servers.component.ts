import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus= 'No server was created!';
  serverName="Test server";
  serverCreated= false;  
  servers = ['Test server','server 2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus= 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName= (<HTMLInputElement> event.target).value;
  }

}

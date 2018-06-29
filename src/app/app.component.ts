import { Component } from '@angular/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: '0'
    },
    {
      name: 'From GET:localhost:3000/angualr/data.json',
      capacity: 100,
      id: '1'
    }
  ];

  constructor (private serverService: ServerService) {
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response), 
        (error) => console.log(error)
      );
  }

  onGet() {
    this.serverService.getServers()
      .subscribe(
        data => {
          console.log(data);
          this.servers[1].id = JSON.stringify(data, undefined, 2);
        },
        (error) => console.log(error)
        
      );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: '0'
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

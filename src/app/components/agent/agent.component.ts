import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/entities/Agent';
import { State } from 'src/app/entities/State';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  results!:Agent[];
  agent!:Agent;
  count!:number;
  status!:State;

  constructor() { }

  ngOnInit(): void {
   
    this.results=[
    {os:"Ubuntu",lastKeepAlive:"9999-12-31T23:59:59Z",dateAdd:"2022-07-18T07:14:54Z",ip:"127.0.0.1",name:"cyr-customer-ossec.local",id:"000",version:"Wazuh v4.3.8",status:"active"},
    {os:"Microsoft Windows 11 Pro",lastKeepAlive:"2022-10-19T14:33:38Z",dateAdd:"2022-08-01T08:49:55Z",ip:"192.168.1.216",name:"DESKTOP-UD0U8ND",id:"024",version:"Wazuh v4.3.6",status:"disconnected"},
    {os:"Microsoft Windows 11 Pro",lastKeepAlive:"2022-10-20T10:21:02Z",dateAdd:"2022-10-11T09:31:22Z",ip:"10.127.0.4",name:"Win11Agent",id:"025",version:"Wazuh v4.3.6",status:"active"},
    {os:"Microsoft Windows 11 Pro",lastKeepAlive:"2022-10-19T10:41:01Z",dateAdd:"2022-10-11T09:35:53Z",ip:"192.168.43.45",name:"customer-05-DESKTOP-UH5KTO9",id:"026",version:"Wazuh v4.3.8",status:"disconnected"},
    {os:"Microsoft Windows 10 Enterprise",lastKeepAlive:"2022-10-20T09:52:41Z",dateAdd:"2022-10-20T08:14:44Z",ip:"192.168.1.65",name:"customer-05-DESKTOP-9LE2G01",id:"027",version:"Wazuh v4.3.8",status:"disconnected"}
    
  ]
  
   this.results.shift();
   console.log(this.results);

}
 

 countA(){
 
  return this.results.length;

   }
   getCount() {
    return this.results.filter(o => o.status == 'active').length;
  }
  getCount2() {
    return this.results.filter(o => o.status == 'disconnected').length;
  }

  getCount3() {
    return this.results.filter(o => o.status == 'pending').length;
  }
  
  getCount4() {
    return this.results.filter(o => o.status == 'never_connected').length;
  }
  

 }
 


  





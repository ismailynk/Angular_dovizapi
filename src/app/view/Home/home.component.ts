import { Component, OnInit } from '@angular/core';
import {getOnsService} from "../../service/getOns.service";
import{gold} from "../../model/gold.model";
import {borsa} from "../../model/borsa.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [],
})
export class HomeComponent implements OnInit{
  ons_list : gold;
  borsa_list : borsa;
  ngOnInit(): void {
  }

  constructor(private service:getOnsService) {
    this.ons_list=new gold();
    this.borsa_list=new borsa();
    service.getOns().subscribe((response: gold)=>{
      this.ons_list=response;
    });
    service.getBorsa().subscribe((response : borsa)=>{
      this.borsa_list=response;
    });
  }



}

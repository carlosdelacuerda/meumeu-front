import { Component, OnInit, Input } from '@angular/core';
import { caprice } from 'src/app/interfaces/caprice.interface';
import { CapricesService } from 'src/app/services/caprices.service';

@Component({
  selector: 'app-list-caprices',
  templateUrl: './list-caprices.component.html',
  styleUrls: ['./list-caprices.component.scss']
})
export class ListCapricesComponent implements OnInit {


  @Input() arrCaprices: caprice[];

  constructor(
    private capriceService: CapricesService
  ) { 
    
  }

  ngOnInit(): void {

  }

}

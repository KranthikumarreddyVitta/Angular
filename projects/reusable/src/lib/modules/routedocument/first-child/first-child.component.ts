import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  constructor( private router:ActivatedRoute , private _router:Router) {
    console.log("Active" , this.router.snapshot.firstChild?.params.id)
   }

  ngOnInit(): void {
  }

 
}

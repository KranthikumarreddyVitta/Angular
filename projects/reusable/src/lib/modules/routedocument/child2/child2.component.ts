import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor(private router:ActivatedRoute , private _router:Router) { 
    console.log("Chidl3")
  }

  ngOnInit(): void {
  }

  navigate() {
    this._router.navigate(['/',3] , { queryParams : { kranthi : true  } ,
    queryParamsHandling:'merge', relativeTo : this.router })
  }

}

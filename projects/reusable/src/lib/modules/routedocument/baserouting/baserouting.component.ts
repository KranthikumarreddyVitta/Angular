import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'lib-baserouting',
  templateUrl: './baserouting.component.html',
  styleUrls: ['./baserouting.component.scss']
})
export class BaseroutingComponent implements OnInit {

   tree: UrlTree =
      this.router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
     f = this.tree.fragment; // return 'fragment'
     q = this.tree.queryParams; // returns {debug: 'true'}
     g: UrlSegmentGroup = this.tree.root.children[PRIMARY_OUTLET];
     s: UrlSegment[] = this.g.segments; // returns 2 segments 'team' and '33'
   

  constructor(private router: Router, private active: ActivatedRoute) {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).
      subscribe((data) => console.log(this.router.url))
    console.log(this.tree)
  }

  ngOnInit(): void {

  }

  navigate() {
    this.router.navigate(['../two'] , { queryParams : { object : true  } , relativeTo : this.active ,
  skipLocationChange:false })
  }

}

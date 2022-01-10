import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthenticationService, UserService } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponentNew implements OnInit {

  loginName = ''
  get isLogin(): boolean {
    return this._auth?.isLoggedIn();
  }

  getUserName() {
    this.loginName = this._user.getUser().getFirstName() + ' ' + this._user.getUser().getLastName()
  }

  homeImages = [
    {
      id:'1',
      image:'assets/home/images/slide-1.jpg',
      header:'Welcome to Business Inhabitr!',
      text:'Your one-stop shop for all things furniture'
    },
    {
      id:'2',
      image:'assets/home/images/AirBNB.jpg',
      header:'Welcome to Business Inhabitr!',
      text:'Pick from a variety of trendy and contemporary looking products'
    },
    {
      id:'3',
      image:'assets/home/images/slide-2.jpg',
      header:'Welcome to Business Inhabitr!',
      text:'From furniture to pillow, we offer everything you need'
    },
    {
      id:'3',
      image:'assets/home/images/slide-4.jpg',
      header:'Welcome to Business Inhabitr!',
      text:'Free interior design consultation to help select the best styles for you'
    }
  ]

  products = [
    {
      name:'Nancy Accent Chair',
      buyPrice:'340',
      rentalPrice:'21',
      url:'business/shop/7746/23/8203',
      image:'assets/home/images/product1.jpg'
    },
    {
      name:'Briar Leather Sofa',
      buyPrice:'2394',
      rentalPrice:'150',
      url:'business/shop/2877/17/3334',
      image:'assets/home/images/product2.jpg'
    }
    ,
    {
      name:'Transitional Glossy White Coffee Table',
      buyPrice:'334',
      rentalPrice:'21',
      url:'business/shop/7159/50/7616',
      image:'assets/home/images/product3.jpg'
    }
    ,
    {
      name:'Queen Bed',
      buyPrice:'1670',
      rentalPrice:'104',
      url:'business/shop/8525/20/8982',
      image:'assets/home/images/product4.jpg'
    }
  ]

  customOptions2: OwlOptions = {
    loop: true,
    dots: false,
    nav: true,
    autoWidth: true,
      margin: 10,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          480: {
              items: 1,
              nav: false
          },
          768: {
              items: 3,
              nav: true
          },
          992: {
              items: 4,
              nav: true,
              loop: true
          }
      },
  
      navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ]
    }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(private _auth: AuthenticationService ,   private _user:UserService , private _router:Router) { }

  ngOnInit(): void {
    this.getUserName();
  }

  logout() {
    this._auth.logout();
  }

  view(item:any) {
    if(this._auth.isLoggedIn())  this._router.navigate([item.url]); else this._router.navigate(['login'])
  }

  navigateToShop() {
    if(this._auth.isLoggedIn()) this._router.navigate(['business/shop']); else this._router.navigate(['login'])
  }
}

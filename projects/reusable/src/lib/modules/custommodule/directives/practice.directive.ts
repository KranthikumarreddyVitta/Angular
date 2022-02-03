import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libpractice]'
})
export class PracticeDirective {

  @Input() set libpractice(value:any) {
    this.setStyle(value)
  };
  @HostBinding('style.border') border:any
  constructor(private el:ElementRef, private render:Renderer2) {
    console.log(this.el,this.libpractice)
    // this.render.setStyle(this.el.nativeElement,'color',`${this.libpractice}`)
  }

  setStyle(value:any) {
    console.log(value)
    this.el.nativeElement.style.color = `${value}`
    this.border = `1px solid ${value}`
  }

  
  @HostListener('mouseover') 
  onMouseOver() {
    this.border = '5px solid green';
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    
  }

  @HostBinding('class.highlight') get hasHighlight () { return true; } 
  @HostBinding('class.box') get hasBox () { return false }
  

}

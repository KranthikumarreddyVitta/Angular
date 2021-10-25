import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollDiv') scrollDiv: ElementRef | null = null;
  @Input() list: Array<any> = [];

  /**
   * Property path to image
   * Example
   * obj={animal:{dog:{img:'axy'}}}
   * path-> animal.dog.img
   */
  @Input() imgKey = 'img';
  @Input() imgAltKey = '';
  @Input() uniqueKey = '';
  @Input() selectedIndex: number = 0;

  @Input() maxContainerWidth = '';
  @Input() imgHeight = '';
  @Input() imgWidth = '';

  /**
   * Change Event
   */
  @Output() onChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {}

  /**
   * Scroll Event
   * @param by number
   */
  scroll(by: number) {
    this.scrollDiv?.nativeElement?.scrollBy(by, 0);
  }

  /**
   * Item changed
   * @param index number
   */
  itemChanged(index: number) {
    this.selectedIndex = index;
    this.onChange.emit(this.list[index]);
  }
}

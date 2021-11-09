import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit , OnDestroy {

  searchText = new FormControl('');
  @Input() placeholder:string = '';
  @Output() search: EventEmitter<any> = new EventEmitter();
  subscription:Subscription | null = null;

  constructor() { }
 

  ngOnInit(): void {
  this.subscription = this.searchText.valueChanges.pipe(debounceTime(2000), distinctUntilChanged()).subscribe((data) => {
      if (data || data == '') {
        this.search.emit(data);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}

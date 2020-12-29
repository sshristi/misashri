import { Component, ViewChild , ChangeDetectorRef, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  ngOnInit(): void {
  }
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
    load: 3,
    slide : 1,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2,
    vertical : {
      enabled : true,
      height : 600
    }
  }
  carouselItems:any[any] = [1, 2, 3 , 4 ];
  mainItems:any[] = [...this.carouselItems]

  constructor(private _cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

  carouselTileLoad(data) {
    let arr = this.carouselItems;
    this.carouselItems = [ ...this.carouselItems , ...this.mainItems ];
  }

}

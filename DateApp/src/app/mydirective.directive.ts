import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mydir]'
})
export class MydirectiveDirective {

  constructor(private e:ElementRef) { 
    e.nativeElement.style.color = "red"
    e.nativeElement.style.background = "yellow"
  }

}

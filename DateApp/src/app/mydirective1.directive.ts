import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myDir1]'
})
export class Mydirective1Directive {

  
  constructor(private e:ElementRef) { 
    e.nativeElement.style.color = "red"
    e.nativeElement.style.background = "cyan"
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Click me";
  @Input() backgroundColor: string = "black";
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClicked.emit();
  }

}

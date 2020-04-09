import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.html',
  styleUrls: ['./control-panel.css']
})
export class ControlPanelComponent implements OnInit {

    constructor() {}

    fileEditor: any;

    ngOnInit() {
        this.fileEditor = document.getElementById('fileEditor');
    }

    bold() {
        document.execCommand('bold', false, null);
    }

    italic() {
        document.execCommand('italic', false, null);
    }

    underline() {
        document.execCommand('underline', false, null);
    }

}

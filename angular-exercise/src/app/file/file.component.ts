import { Component, OnInit } from '@angular/core';
import { TextService } from '../file-text-service/file-text-service';

@Component({
  selector: 'app-file',
  templateUrl: './file.html',
  styleUrls: ['./file.css']
})

export class FileComponent implements OnInit {
    public text = '';
    constructor(private fileTextService: TextService) {
    }

    ngOnInit() {
        this.fileTextService.getMockText().subscribe((result) => this.text = result);
    }
}

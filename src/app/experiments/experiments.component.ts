import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ["Mars Soil Sample", "Plant Growth in Habitat", "Human Bone Density"];

  constructor() { }

  ngOnInit() {
  }

}

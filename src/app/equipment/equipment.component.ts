import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Habitat dome", "Drones", "Food Containers", "Oxygen Tanks"];
  itemBeingEdited: string = "";

  constructor() { }

  ngOnInit() {
  }
  add(gear: string){
    this.equipment.push(gear);
  }
  edit(gear: string){
    this.itemBeingEdited = gear;
  }
  save(updatedItem: string, item: string){
    this.equipment[this.equipment.indexOf(item)] = updatedItem;
  }
  remove(item: string){
    this.equipment.splice(this.equipment.indexOf(item), 1);
  }
}

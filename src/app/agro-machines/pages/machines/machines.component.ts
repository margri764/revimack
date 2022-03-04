import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgroMachinesService } from 'src/app/services/agroMachines/agro-machines.service';
import { FormComponent } from '../form/form/form.component';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  public arrayMachines : any =[];
  public date = new Date();
  triggerNext : string = "true";
  triggerPrevious : string = "true";
  


  @Output()  triggerToNext= new EventEmitter<string>();
  @Output()  triggerToPrevious= new EventEmitter<string>();
  @Output()  modelSelect= new EventEmitter<string>();

  @Input() brandSelection= '';
  @Input() modelSelection= '';


  constructor(
              private agroMachines : AgroMachinesService,
              private cdRef:ChangeDetectorRef,
              public formcomponente : FormComponent
  ) {

   }

   next(){
     this.triggerToNext.emit(this.triggerNext);
   }

   previous(){
    this.triggerToPrevious.emit(this.triggerPrevious);
  }

  brandFromBackend(){
    this.arrayMachines = this.agroMachines.getBrandCars(this.brandSelection);
  };

  modelFromBackend(){
    this.arrayMachines = this.agroMachines.getModelCars(this.modelSelection);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
    if(this.brandSelection){
      this.brandFromBackend();
      this.brandSelection='';
    };

    if(this.modelSelection){
      this.modelFromBackend();
      this.modelSelection='';
    };

    }

    selectedCar(carSelect: string){
      this.modelSelect.emit(carSelect)
      this.agroMachines.getCarSelection(carSelect);
    }


  ngOnInit(): void {

  }

}

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { DataBoyacaService } from '../../service/data-boyaca.service';
import { DataBoyaca } from '../../model/dataBoyaca';



@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

  indicador:string="";
  ano:string="";
  resultados:DataBoyaca[]=[]

  constructor(private serviceData:DataBoyacaService) {
    
  }

  cambioIndicador(event:any){
    this.indicador=event.target.value;

  }
  cambioAno(event:any){
    this.ano=event.target.value;

  }
  consultar(){
    this.serviceData.get_top_by_indicador_ano(this.indicador,this.ano).subscribe(
      (data:DataBoyaca[])=> {
        this.resultados=data;

      },
      (error) => {
        
        console.error('Error al obtener los municipios:', error);
      }
    )

  }


}

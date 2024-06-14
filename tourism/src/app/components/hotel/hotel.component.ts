import { Component, OnInit,inject } from '@angular/core';
import { Municipio } from '../../model/municipios';
import { MunicipioService } from '../../service/municipio.service';
import { Hoteles } from '../../model/hoteles';
import { HotelService } from '../../service/hotel.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit {
  

  private  serHotel=inject(HotelService)
  municipios:Municipio[]=[]
  hoteles:Hoteles[]=[]
  resultados:string=""

constructor(private municipioService: MunicipioService, private hotelService: HotelService){

}

  ngOnInit(): void {
    this.loadMunicipios()
    
  }

  loadMunicipios(){
    this.municipioService.getAllMunicipios().subscribe(
      (data: Municipio[]) => {
        this.municipios = data;
      },
      (error) => {
        console.error('Error al obtener los municipios:', error);
      }
    );
  }

  onChange(event:any){
   
    this.loadHoteles(event.target.value);
   


  }

  loadHoteles(municipio:string){
    this.hotelService.getHotelesIn(municipio).subscribe(
      
        (data: Hoteles[]) => {
          this.hoteles = data;
          console.log(data)
        },
        (error) => {
          this.hoteles=[]
          this.resultados="No se encontraron Hoteles en la Busqueda"
          console.error('Error al obtener los municipios:', error);
        }
      );

  }
  

}

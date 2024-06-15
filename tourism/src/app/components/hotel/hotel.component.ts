import { Component, OnInit,inject } from '@angular/core';
import { Municipio } from '../../model/municipios';
import { MunicipioService } from '../../service/municipio.service';
import { Hoteles } from '../../model/hoteles';
import { HotelService } from '../../service/hotel.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransporteService } from '../../service/transporte.service';
import { Transporte } from '../../model/transporte';

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
  agencias:Hoteles[]=[]
  transporte:Transporte[]=[]
  resultados:string=""

constructor(private municipioService: MunicipioService, private hotelService: HotelService,private transporteService:TransporteService){

}

  ngOnInit(): void {
    this.loadMunicipios()
    this.loadAgencias("Paipa")
    this.loadHoteles("Paipa")
    this.loadTransporte("Paipa")
    
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
    this.hoteles=[]
    this.agencias=[]
   
    this.loadHoteles(event.target.value);
    this.loadAgencias(event.target.value);
    this.loadTransporte(event.target.value)


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

  loadAgencias(municipio:string){
    this.hotelService.getAgenciasIn(municipio).subscribe(
      
        (data: Hoteles[]) => {
          this.agencias = data;
          console.log(data)
        },
        (error) => {
          this.agencias=[]
          this.resultados="No se encontraron Hoteles en la Busqueda"
          console.error('Error al obtener los municipios:', error);
        }
      );

  }
  loadTransporte(municipio:string){

    this.transporteService.getAllTransporte(municipio).subscribe(
      (data:Transporte[])=>{
        this.transporte=data
         console.log(this.transporte)
      },
      (error)=>{
        this.transporte=[];
        this.resultados="No se encontraron Hoteles en la Busqueda"
        console.error('Error al obtener los municipios:', error);
       
      }
      
    );

  }
  

}

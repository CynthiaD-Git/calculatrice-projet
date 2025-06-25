import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  imports: [ReactiveFormsModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
form! : FormGroup;
result:number=0;
operateur: string []=[ '+', '-', '*','/'];

constructor(private fb: FormBuilder) {//toujours présent dans TS
  this.form = this.fb.group({
    nombre1: [0, [Validators.required]], //on met validator pour si un champ n’a pas été rempli on n’est aucune réponse
    nombre2: [0, [Validators.required]],
    operateur: ['+',[Validators.required]],
  });
  this.calculer();
}
  calculer() { //fonction calculer 
    const nombre1 = this.form.value.nombre1;
    const nombre2 = this.form.value.nombre2;
    const operateur = this.form.value.operateur;

   //A faire juste ici : voir correction Tarek, dans le drive 
//ajouter un message d’alerte, si on a compléter tous les champs «  prière de remplir le champ manquant »
//ajouter un message d’alerte, si on divise par zero  « la division par zero n’est pas permise »

if (operateur === '+') {
  this.result = nombre1 + nombre2;
} else if (operateur === '-') {
  this.result = nombre1 - nombre2;
} else if (operateur === '*') {
  this.result = nombre1 * nombre2;
} else if (operateur === '/') {
  this.result = nombre2 != 0 ? nombre1 / nombre2 : 0;
} else {
  this.result = 0;
}
}

}


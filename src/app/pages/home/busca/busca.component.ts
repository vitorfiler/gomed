import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger20ms, stagger40ms } from 'src/@vex/animations/stagger.animation';

@Component({
	selector: 'vex-busca',
	templateUrl: './busca.component.html',
	styleUrls: ['./busca.component.scss'],
	animations: [
		fadeInUp400ms,
		stagger20ms,
		scaleIn400ms,
		fadeInRight400ms,
		stagger40ms,
		scaleFadeIn400ms
	]
})
export class BuscaComponent implements OnInit {

	layoutCtrl = new FormControl('boxed');
	form: FormGroup;

	foods: any[] = [
		{
			id: "f1f4be6d-c3fa-4ae5-a8b2-5311338d8a66",
			nome: "Acupuntura",
			urlIcone: "https://storage.googleapis.com/img_especialidade/F1F4BE6D-C3FA-4AE5-A8B2-5311338D8A66.png"
		},
		{
			id: "03f1791d-2ac4-47cc-a4fa-efe94ee94ace",
			nome: "Alergista",
			urlIcone: "https://storage.googleapis.com/img_especialidade/03F1791D-2AC4-47CC-A4FA-EFE94EE94ACE.png"
		},
	];
	selected = null;

	constructor(private fb: FormBuilder,) { }

	ngOnInit(): void {
		console.log(this.selected);
		
		this.form = this.fb.group({
			especialidade: [''],
			convenio: [''],
			cep: [''],
		});
	}

}

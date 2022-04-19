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
  
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
			especialidade: [''],
			convenio: [''],
      cep: [''],
		});
  }

}

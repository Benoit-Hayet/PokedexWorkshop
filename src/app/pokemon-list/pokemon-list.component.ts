import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '../models/cards.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  cards: Card[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService
      .getCards()
      .subscribe((response) => this.cards= response.cards);
  }
}

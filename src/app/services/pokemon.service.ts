import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  private baseUrl = `https://api.pokemontcg.io/v1`;

  getCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards`);
  }
}

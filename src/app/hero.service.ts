import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
    constructor(private messageService: MessageService) { }

    getHeroes(): Promise<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return Promise.resolve(HEROES);
      }
}
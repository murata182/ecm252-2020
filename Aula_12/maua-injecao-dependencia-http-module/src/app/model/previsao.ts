import { Weather } from './weather';
import { Main } from './main';

export class Previsao {
    dt: number;
    main: Main;
    weather: Weather[];
}

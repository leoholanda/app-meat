import { Component } from '@angular/core';
import { RatingComponent } from '../shared/rating/rating.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  rated = false;

}

import {
  ExpirationCompleteEvent,
  Subjects,
  Publisher,
} from '@cy-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

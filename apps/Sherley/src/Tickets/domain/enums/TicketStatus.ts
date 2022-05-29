/**
 * Ticket statuses
 *
 * @description Tickets go through various states throughout their life cycle,
 * this enumeration allows you to identify which cycle the ticket is in.
 *
 * @enum
 * @author Turnly
 */
export enum TicketStatus {
  /**
   * Booked status
   *
   * @description Initial status of tickets, whenever a ticket is created, its status will be booked.
   */
  BOOKED = 'booked',

  /**
   * Available status
   *
   * @description Use it when a ticket passes all the corresponding validations, usually, a ticket can only go to this status if it is in BOOKED status.
   */
  AVAILABLE = 'available',

  /**
   * Announced status
   *
   * @description Use it when the customer has announced his arrival at the location and can be attended.
   */
  ANNOUNCED = 'announced',

  /**
   * Called status
   *
   * @description Use it when the agent calls the customer.
   */
  CALLED = 'called',

  /**
   * Recalled status
   *
   * @description Use it when the agent has called the customer multiple times.
   */
  RECALLED = 're_called',

  /**
   * Cancelled status
   *
   * @description Use it when the customer cancels their ticket.
   */
  CANCELLED = 'cancelled',

  /**
   * Completed status
   *
   * @description Use it when the ticket has been attended by an agent.
   */
  COMPLETED = 'completed',

  /**
   * Discarded status
   *
   * @description Use when the customer doesn't show up on the call and remove them from the row.
   */
  DISCARDED = 'discarded',

  /**
   * Inactive status
   *
   * @description Use it when the ticket has been inactive for some reason, past times, or mistakes.
   */
  INACTIVE = 'inactive',

  /**
   * Near attention status
   *
   * @description Use when the ticket has returned to the row again.
   */
  NEAR_ATTENTION = 'near_attention',

  /**
   * Removed status
   *
   * @description Use it when the customer will be removed from the waiting row.
   */
  REMOVED = 'removed',
}

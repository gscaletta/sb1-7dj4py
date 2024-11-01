export function generateWinner(tickets: string[]): string {
  // Fisher-Yates shuffle algorithm
  for (let i = tickets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tickets[i], tickets[j]] = [tickets[j], tickets[i]];
  }
  
  // Select the first ticket after shuffling
  return tickets[0];
}

export function generateTicketNumbers(quantity: number, existingTickets: number[]): number[] {
  const numbers: number[] = [];
  let current = Math.max(...existingTickets, 0) + 1;
  
  for (let i = 0; i < quantity; i++) {
    numbers.push(current++);
  }
  
  return numbers;
}
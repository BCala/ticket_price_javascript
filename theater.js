const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;
const answer = isMatinee.toLowerCase();

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = getBaseTicketcost(age);
    const isMatinee = prompt('Are you attending a matinee show?');
    cost = applyMatineeDiscount(cost, isMatinee);
    alert('Your ticket will cost: $' + cost);
}

function getBaseTicketcost(age){
    if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
    } 
    return GENERAL_ADMISSION_TICKET_COST;
}

function applyMatineeDiscount(cost, isMatinee){
    if(isMatinee.toLowerCase() === 'yes' || isMatinee.toLowerCase() === 'y'){
        return cost - MATINEE_DISCOUNT;
    } else {
        return cost;
    }
}
const CONTRACT_NAME = 'hivedice';

const ACCOUNT = 'hivedice';

const HOUSE_EDGE = 0.05;
const MIN_BET = 1;
const MAX_BET = 10;

export default {
    init: () => {
        // Runs every time the node starts
    },

    roll: (payload: { roll: number, amount: string, direction: string }) => {
        const { roll, amount, direction } = payload;

        console.log(roll, amount, direction);
        
        if (roll >= 2 && roll <= 96) {

        }
    }
};
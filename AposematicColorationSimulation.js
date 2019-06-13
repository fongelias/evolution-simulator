// What does this simulation look like?
// We want to simulate encounters between organisms
// We want to simulate decision-making an organism makes based on how a different organism looks
// We want to spawn populations of different organism types in an environment

class Environment {
	constructor(organismArr) {

	}
}

const ACTIONS = {
	ATTACK: 'attack',
	AVOID: 'avoid'
}

class Organism {
	constructor() {}
}

// class Behavior {
// 	constructor(action_probability) {
// 		this.ACTION_PROBABILITY = action_probability ?
// 			action_probability :
// 			{
// 				ATTACK: 0.5,
// 				AVOID: 0.5
// 			}
// 	}

// 	act() {
// 		const actionRoll = Math.random();
// 		const actionProbabilityList = Object.entries(this.ACTION_PROBABILITY);
// 		let idx = actionProbabilityList.length - 1;
// 		let probabilityCeil = 1;
// 		// return entry where action roll occured
// 		while(idx >= 0) {
// 			probabilityCeil -= actionProbabilityList[idx][1];
// 			if (actionRoll > probabilityCeil) {
// 				return actionProbabilityList[idx][0];
// 			}
// 			idx--;
// 		}

// 		return actionProbabilityList[idx][0];
// 	}
// }



// sampling loop
// randomly draw two organisms
// determine their actions based off of the encounter
// determine the results based off their actions
// shuffle and re-draw








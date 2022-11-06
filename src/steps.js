//create reducer and reducer function with default state an empty object
//the state is gonna contain the prevoperand curroperand operation

//put the previous operand and the operation together and below them the curr operand

//break down the action into a type and payload

//create action constants for add digit and clear delete choose operation evaluate

//then switch
//for add digit return state as is but change the current operand to be current operand and the new digit
//make sure to take in the case where the curroperand is null

//for the custom button, make it dispatch an action of type add with a payload of digit on click
//do the same for the operation component with action choose operation

//don't do anything if curr operand and the new digit are 0
// don't if curr operand includes . and new digit is .

//make the AC button dispatch a clear action and in the reducer make it return an empty state
//make it not do anything if there are no curr or prev operands ie null

//if no prev and there is curr, then operation becomes payload.operation, prev becomes curr and curr becomes null

// else do the same, the only difference is that prev takes the return value of evaluate state

//in evaluate parseFloat the previous and curr values then using a switch statement
//let the computation get the result depending on the operation (init computation to "") only of they are numbers
//then return it as string

//make it so that if you change your mind about the operation and there is yet to be a curr operand
//you can change it

//make the = trigger a dispatch for the evaluate action!! in the reducer only make it execute in the case
//that we have all the information, and make it make everything null except the curr value
//which is the return of evaluate

//make the = make overwrite equal true (in state) then in the add digit make it not concatinate
//if overwrite is true and toggle it ofc

//make delete set curr op to null if overwrite is true and toggle it
//if no curr operand don"t do anything
//and if length is 1 set curr operand to null
//else slice(0,-1) the curr op
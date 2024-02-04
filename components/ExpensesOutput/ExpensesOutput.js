import {StyleSheet, View, ViewComponent } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES=[
    {
        id: 'e1',
        description:'A pair of shoes',
        amount:59.99,
        date:new Date('2021-12-19')
    },
    {
        id: 'e2',
        description:'Some Fruits',
        amount:5.99,
        date:new Date('2021-12-19')
    },
    {
        id: 'e3',
        description:'A pair of Trousers',
        amount:59.99,
        date:new Date('2022-09-05')
    },
    {
        id: 'e4',
        description:'A book',
        amount:18.99,
        date:new Date('2021-09-09')
    },
    {
        id: 'e5',
        description:'some  other stuff',
        amount:19,
        date:new Date('2021-04-29')
    },
]

function ExpensesOutput({expenses,expensesPeriod}){
    return (
    <View style={styles.container}>
    <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES}/>
    <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>)
}

export default ExpensesOutput;

const styles=StyleSheet.create({
    container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary700,
}
})

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';
import  Calcs  from './Calcs';
import CreateCalc from './CreateCalc';
import { getAllCalcs, createCalc, deleteCalc, updateCalc, getOperators} from   '../services/CalcService';

export class Calculator extends Component {


    constructor(props) {
        super(props);

        this.deleteCalc = this.deleteCalc.bind(this);
        this.updateCalc = this.updateCalc.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.newCalc = this.newCalc.bind(this);
        this.getOperators = this.getOperators.bind(this);

        this.getAllCalcs();
        this.getOperators();
    }

    state = {
        Calc: { num1: 0, num2: 0, operator: 1, result:0},
        Calcs: [],
        numberOfCalcs: 0,
        Operators: [],
        UpdateMode: "New",
        errormessage:""
    }

    getOperators=()=> {
        getOperators()
            .then(response => {
                this.setState({ Operators: response });
            });
    }

    updateCalc(calcToUpdate) {
        let c = this.state.Calc;
        c.id = calcToUpdate.id;
        c.num1 = calcToUpdate.num1;
        c.num2 = calcToUpdate.num2;
        c.operator = calcToUpdate.operator;
        c.result = calcToUpdate.result;
        this.setState({ Calc: c, UpdateMode:"Update" });
    }

    createCalc = () => {
        this.setState({ errormessage : "" });
        if (this.state.Calc.operator == "4" && this.state.Calc.num2 == "0") {
            this.setState({ errormessage : "לא ניתן לחלק באפס, תרגיל שגוי!" }); 
            return;
        }
        if (this.state.UpdateMode == "New") {
            createCalc(this.state.Calc)
                .then(response => {
                    console.log(response);
                    this.setState({ numberOfCalcs: this.state.numberOfCalcs + 1, Calc: response });
                    this.getAllCalcs();
                });
        }
        else {
            updateCalc(this.state.Calc)
                .then(response => {
                    console.log(response);
                    this.setState({ numberOfCalcs: this.state.numberOfCalcs , Calc: response });
                    this.getAllCalcs();
                });
        }
        
    }

    deleteCalc = (id) => {
        deleteCalc(id)
            .then(response => {
                console.log(response);
                this.setState({ numberOfCalcs: this.state.numberOfCalcs - 1});
                this.getAllCalcs();
                this.newCalc();
            });
    }

    getAllCalcs = () => {
        getAllCalcs()
            .then(Calcs => {
                console.log(Calcs);
                this.setState({ Calcs: Calcs, numberOfCalcs: Calcs.length });
            });
    }


    onChangeForm = (e) => {
        let c = this.state.Calc;

        let nam = e.target.name;
        let val = e.target.value;

        c[nam] = val;

        this.setState({ Calc:c });
    }

    newCalc() {
        let c = this.state.Calc;
        c.id = -1;
        c.num1 = 0;
        c.num2 = 0;
        c.operator = 1;
        c.result = 0;
        this.setState({ Calc: c, UpdateMode: "New" });
    }

    render() {

        return (
            <div className="App">
               
                <div className="container mrgnbtm">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>{this.state.UpdateMode} Calculatation</h2>
                            <CreateCalc
                                onChangeForm={this.onChangeForm}
                                createCalc={this.createCalc}
                                CurrentCalc={this.state.Calc}
                                Operators={this.state.Operators}
                                errormessage={this.state.errormessage}
                            >
                            </CreateCalc>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn-info" onClick={this.newCalc}>new+</button>
                    </div>
                </div>
                <div className="row">
                    <h2>calculation history</h2>
                   
                    <Calcs Calcs={this.state.Calcs} Operators={this.state.Operators} deleteCalc={this.deleteCalc} updateCalc={this.updateCalc} ></Calcs>
                </div>
            </div>
        );
    }
}

//export default Calculator;
import React from 'react';


const Calcs = ({ Calcs, Operators, deleteCalc, updateCalc }) => {

    if (Calcs.length === 0) return null;

    const GetOpeator = (op) => {
        return Operators[op - 1];
    };

    const CalcRow = (Calc, index) => {

        
        const MyCalc= Calc;
        

        return (
            <tr key={index} >
                <td>{Calc.num1}{GetOpeator(Calc.operator)}{Calc.num2}{"="}{Calc.result}</td>
                <td><button myId={Calc.Id} type="button" title="delete" className="btn-table  btn-info" onClick={() => deleteCalc(MyCalc.id)}>
                    <span className="glyphicon glyphicon-remove" ></span>
                </button>
                    <button type="button" title="edit" className="btn-table btn-info" onClick={() => updateCalc(MyCalc)}><span className="glyphicon glyphicon-arrow-right" ></span></button>
                </td>
            </tr>
        )
    };

    const CalcTable = Calcs.map((Calc, index) => CalcRow(Calc, index));



    return (
        <div className="container">
            
            <div className="row">
            <table className="table table-bordered table1">
                <thead>
                    <tr>
                        <th className="th1"></th>
                        <th className="th1"></th>
                    </tr>
                </thead>
                <tbody>
                    {CalcTable}
                </tbody>
            </table></div>
        </div>
    )
}
export default Calcs;
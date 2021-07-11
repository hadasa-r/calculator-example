import React from 'react';


const CreateCalc = ({ onChangeForm, createCalc, CurrentCalc, Operators, errormessage}) => {

   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                   
                    <form>
                        <div className="row">
                            <div className="form-group col-md-2">
                                <input type="number" value={CurrentCalc.num1} onChange={(e) => onChangeForm(e)} name="num1" className="form-control" />
                            </div>
                            <div className="form-group col-md-2">
                                <select value={CurrentCalc.operator} onChange={(e) => onChangeForm(e)} name="operator" className="form-control" >
                                    {Operators.map((x, y) => <option value={y+1}>{x}</option>)}
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <input type="number" value={CurrentCalc.num2} onChange={(e) => onChangeForm(e)} name="num2" className="form-control" />
                            </div>
                            <div className="form-group col-md-1">
                                <button type="button" onClick={createCalc} className="btn btn-info">=</button>
                            </div>
                            <div className="form-group col-md-2">
                                <label name="Result" className="form-control">{CurrentCalc.result}</label>
                               
                            </div>
                        </div>
                        <div>
                            <label className="text-danger" >  {errormessage}</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreateCalc;
import React from 'react';



function Square(props) {
  const boxClasses = props['boxClasses'];
  return (
      <button className = { "box " + (boxClasses) } 
      onClick={()=>props.onClick()} 
      />
  );
}


export default class CheckerBoard extends React.Component {

  constructor(props) {
    super(props);

  }

  renderBox(positions,boxClasses) {
    return (
        <Square
            key = {positions}
            boxClasses = {boxClasses}
            onClick = {() => this.props.onClick(positions) }
        />
    );
}


  isOdd(n) {
    return Math.abs(n % 2) === 1;
   }
  returnPlayerName(playerBool) {
    return playerBool === true ? 'player1' : 'player2';
  }

    render() {
         let boardRender=[];
         let columnsRender=[];
         
      for (let positions in this.props.boardState){
       
        //get column number
        const col =this.props.columns[positions.charAt(0)];
        //get row number
        const row= parseInt(positions.charAt(1), 10);

        const currentPlayer = this.returnPlayerName(this.props.currentPlayer);
       
        //setting box color class
        const colorClass  = ( (this.isOdd(col) && this.isOdd(row)) || (!this.isOdd(col) && !(this.isOdd(row)) ) ) ? 'white' : 'black';
        
        let boxClasses=[];
         
        boxClasses.push(positions);
        boxClasses.push(colorClass);

     
        if (this.props.boardState[positions] !== null) {
          boxClasses.push(this.props.boardState[positions].player + ' piece');
        }
        boxClasses=boxClasses.join(' ');
        columnsRender.push(this.renderBox(positions,boxClasses));
         
        if (columnsRender.length >= 8) {
          columnsRender = columnsRender.reverse();
          boardRender.push(<div key={boardRender.length} className="column">{columnsRender}</div>);
          columnsRender = [];
      }
    
      }

      console.log("columnsRender",columnsRender);



      return (<div className="board">
               {boardRender}
          
             </div>)
    }
  }
const gameboard=(function(){
    const board=[['[ ]','[ ]','[ ]'],['[ ]','[ ]','[ ]'],['[ ]','[ ]','[ ]']]

    const X=(x,y)=>{board[y-1][x-1]='[X]'}

    const O=(x,y)=>{board[y-1][x-1]='[O]'}

    const display=()=>{
        console.log(board[0][0],board[0][1],board[0][2])
        console.log(board[1][0],board[1][1],board[1][2])
        console.log(board[2][0],board[2][1],board[2][2])
    }
return{X,O,display}
}())


gameboard.O(2,1)
gameboard.display()
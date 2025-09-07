let xTurn=true
const gameboard=(function(){
    const winner=document.getElementById('winner')

    const tl=document.getElementById('1-1')
    const tm=document.getElementById('1-2')
    const tr=document.getElementById('1-3')
    
    const ml=document.getElementById('2-1')
    const mm=document.getElementById('2-2')
    const mr=document.getElementById('2-3')
    
    const bl=document.getElementById('3-1')
    const bm=document.getElementById('3-2')
    const br=document.getElementById('3-3')



    const board=[['[_]','[_]','[_]'],['[_]','[_]','[_]'],['[_]','[_]','[_]']]

    const X=(x,y)=>{
        if(board[y-1][x-1]=='[_]'){board[y-1][x-1]='[X]'}
        else{xTurn=true}}

    const O=(x,y)=>{if(board[y-1][x-1]=='[_]'){board[y-1][x-1]='[O]'}
        else{xTurn=false}}

    const display=()=>{
        tl.innerHTML=(board[0][0]);tm.innerHTML=(board[0][1]);tr.innerHTML=(board[0][2])
        ml.innerHTML=(board[1][0]);mm.innerHTML=(board[1][1]);mr.innerHTML=(board[1][2])
        bl.innerHTML=(board[2][0]);bm.innerHTML=(board[2][1]);br.innerHTML=(board[2][2])
    }

    const checkWin=()=>{
        if(board[0][0]=='[X]'&&board[0][1]=='[X]'&&board[0][2]=='[X]'||
            board[1][0]=='[X]'&&board[1][1]=='[X]'&&board[1][2]=='[X]'||
            board[2][0]=='[X]'&&board[2][1]=='[X]'&&board[2][2]=='[X]'||
           board[0][0]=='[X]'&&board[1][0]=='[X]'&&board[2][0]=='[X]'||
           board[0][1]=='[X]'&&board[1][1]=='[X]'&&board[2][1]=='[X]'||
           board[0][2]=='[X]'&&board[1][2]=='[X]'&&board[2][2]=='[X]'||
           
           board[0][0]=='[X]'&&board[1][1]=='[X]'&&board[2][2]=='[X]'||
           board[0][2]=='[X]'&&board[1][1]=='[X]'&&board[2][0]=='[X]'
        ){
            winner.innerHTML=('Winner: X Wins')
        }
        else if(board[0][0]=='[O]'&&board[0][1]=='[O]'&&board[0][2]=='[O]'||
            board[1][0]=='[O]'&&board[1][1]=='[O]'&&board[1][2]=='[O]'||
            board[2][0]=='[O]'&&board[2][1]=='[O]'&&board[2][2]=='[O]'||
           board[0][0]=='[O]'&&board[1][0]=='[O]'&&board[2][0]=='[O]'||
           board[0][1]=='[O]'&&board[1][1]=='[O]'&&board[2][1]=='[O]'||
           board[0][2]=='[O]'&&board[1][2]=='[O]'&&board[2][2]=='[O]'||
           
           board[0][0]=='[O]'&&board[1][1]=='[O]'&&board[2][2]=='[O]'||
           board[0][2]=='[O]'&&board[1][1]=='[O]'&&board[2][0]=='[O]'
        ){
            winner.innerHTML=('Winner: O Wins')
        }
    }
return{X,O,display,checkWin}
}())

gameboard.display()

function place(x,y){
    if(xTurn){
        xTurn=false
        gameboard.X(x,y)
        gameboard.display()
        gameboard.checkWin()
    }
    else{
        xTurn=true
        gameboard.O(x,y)
        gameboard.display()
        gameboard.checkWin()
    }
}


function getHumanChoice()
{
    let humanChoice=prompt("Piatra,Hartie sau Foarfeca?")
    return humanChoice
}

function getComputerChoice()
{
    let computerChoice=Math.floor(Math.random()*3)+1
    switch(computerChoice)
    {
        case 1:
            computerChoice='Piatra'
            break
        case 2:
            computerChoice='Hartie'
            break
        case 3:
            computerChoice='Foarfeca'
            break
    }
    return computerChoice
}
function playRound(hChoice,cChoice)
{
    let humanScore=0,computerScore=0
    switch(hChoice)
    {
        case 'Piatra':
            if(cChoice==='Hartie')
            {
                alert(`Ai pierdut! ${cChoice} bate ${hChoice} !`)
                computerScore++
            }
            else if(cChoice==='Foarfeca')
            {
                alert(`Ai castigat! ${hChoice} bate ${cChoice} !`)
                humanScore++;
            }
            else
            {
                alert('Egal!')
                humanScore=0
                computerScore=0
            }
            break
        case 'Hartie':
            if(cChoice==='Foarfeca')
            {
                alert(`Ai pierdut! ${cChoice} bate ${hChoice} !`)
                computerScore++
            }
            else if(cChoice==='Piatra')
            {
                alert(`Ai castigat! ${hChoice} bate ${cChoice} !`)
                humanScore++;
            }
            else
            {
                alert('Egal!')
                humanScore=0
                computerScore=0
            }
            break
        case 'Foarfeca':
            if(cChoice==='Piatra')
            {
                alert(`Ai pierdut! ${cChoice} bate ${hChoice} !`)
                computerScore++
            }
            else if(cChoice==='Hartie')
            {
                alert(`Ai castigat! ${hChoice} bate ${cChoice} !`)
                humanScore++;
            }
            else
            {
                alert('Egal!')
                humanScore=0
                computerScore=0
            }
            break
    }
    if(humanScore==1)
    return 'scorOM'
    else if(computerScore==1)
    return 'scorCOMPUTER'
    else
    return 
}
function playGame()
{
let ver,hsc=0,csc=0,i
    do{
    const humanSelection=getHumanChoice()
    const computerSelection=getComputerChoice()
    ver=playRound(humanSelection,computerSelection)
    if(ver=='scorOM')
    hsc++
    else if(ver=='scorCOMPUTER')
    csc++


    if(hsc==3)
     {
         alert('Ai castigat meciul!')
         break
     }
     else if(csc==3)
     {
        alert('Ai pierdut meciul!')
        break
     }
    }
    while(hsc!=3||csc!=3)
}
playGame()
scorOm=0
scorCalc=0
scorEg=0
function getCompChoice()
{
    let rezultat=Math.floor(Math.random()*3)+1
    switch(rezultat)
    {
        case 1:
            if(rezultat===1)
                rezultat='Piatra'
        break

        case 2: 
            if(rezultat===2)
                rezultat='Hartie'
        break

        case 3:
            if(rezultat===3)
                rezultat='Foarfeca'
        break
    }

    return rezultat
}



function validare()
{
    
    
    const piatra=document.querySelector('.piatra')
    const hartie=document.querySelector('.hartie')
    const foarfeca=document.querySelector('.foarfeca')

    piatra.addEventListener("click",()=>
    {
        let cChoice=getCompChoice()
        if(cChoice==='Hartie')
            scorCalc++
        else if(cChoice==='Foarfeca')
            scorOm++
        else
            if(cChoice==='Piatra')
                scorEg++

            updateScoruri()
            
    })

    hartie.addEventListener("click",()=>
    {
        let cChoice=getCompChoice()
        if(cChoice==='Foarfeca')
            scorCalc++
        else if(cChoice==='Piatra')
            scorOm++
        else if(cChoice==='Hartie')
            scorEg++

        updateScoruri()
        
    })

    foarfeca.addEventListener("click",()=>
    {
        let cChoice=getCompChoice()
        if(cChoice==='Piatra')
            scorCalc++
        else if(cChoice==='Hartie')
            scorOm++
        else if(cChoice==='Foarfeca')
            scorEg++

        updateScoruri()
        
    })
    

    

}

function updateScoruri()
{
    document.getElementById('om').innerText=scorOm
    document.getElementById('computer').innerText=scorCalc
    document.getElementById('scorEgal').innerText=scorEg
}

function resetGame()
{
    scorCalc=0
    scorOm=0
    scorEg=0
    updateScoruri()

}

function verificaWIn()
{
    if(scorOm>=5)
        {
            const winner=document.querySelector('.winner')
            winner.textContent='Ai castigat!'
        }
    else if(scorCalc>=5)
        {
            const winner=document.querySelector('.winner')
            winner.textContent='AI pierdut!'
        }
}
function play()
{
   validare()
   verificaWIn()
}

play()
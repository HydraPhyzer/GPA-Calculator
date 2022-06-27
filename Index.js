let AddHTML=()=>
{
    let HTMLData=
    `
    <tr class="DataBody">
        <div>
            <td><input CH="Sn" type="text"></td>   
            <td><input class="CH" type="text"></td>
            <td class="Grade">
                <select name="" id="Grade">
                    <option value="">-</option>
                    <option value="">A+</option>
                    <option value="">A</option>
                    <option value="">A-</option>
                    <option value="">B+</option>
                    <option value="">B</option>
                    <option value="">B-</option>
                    <option value="">C+</option>
                    <option value="">C</option>
                    <option value="">C-</option>
                    <option value="">D+</option>
                    <option value="">D</option>
                    <option value="">D-</option>
                    <option value="">F</option>
                </select>
            </td>   
        </div>
    </tr>
    `
    document.querySelector('.TableData').insertAdjacentHTML('afterbegin' , HTMLData);
}

document.querySelector('.fa-circle-plus').addEventListener("click" , ()=>
{
    AddHTML();
})

function Points(Arg)
{
    switch (Arg) {
        case 'A+':
            return 4
            break;
        case 'A':
            return 4
            break;
        case 'A-':
            return 3.7
            break;
        case 'B+':
            return 3.3
            break;
        case 'B':
            return 3
            break;
        case 'B-':
            return 2.7
            break;
        case 'C+':
            return 2.3
            break;
        case 'C':
            return 2
            break;
        case 'C-':
            return 1.7
            break;
        case 'D+':
            return 1.3
            break;
        case 'D':
            return 1
            break;
        case 'D-':
            return 0.7
            break;
        case 'F':
            return 0
            break;
    
        default:
            break;
    }
}

document.querySelector(".B1").addEventListener("click" , (e)=>
{
    e.preventDefault();
    let X=document.querySelectorAll('.DataBody .CH');
    let Y=document.querySelectorAll('.DataBody #Grade');
    let Sum1=0;
    let Sum2=0;
    for(let i=0; i<X.length ; i++)
    {
        let Ind=Y[i].selectedIndex;
        let Po=Points(Y[0][Ind].text);

        Sum1+=+X[i].value;

        Sum2+=Po*X[i].value

    }
    let GPA=(Sum2/Sum1).toFixed(3);
    alert(GPA)
});
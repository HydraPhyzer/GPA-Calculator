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
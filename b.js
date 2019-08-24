
var amount_in = document.getElementById("amount");
var am_fdbk = document.querySelector(".addc");
var exp_in = document.getElementById("expe");
var exp_text = document.getElementById("texte");
var expense = [0];
var l1=parseInt(2);
var l2=parseInt(1);

console.log(l2);

function addt(abcd){
    let ele = document.getElementById("hE");
    let para = document.createElement("p");
    ele.appendChild(para);
    let text = document.createTextNode(abcd);
    para.appendChild(text);

    console.log(text);
}

function adde(num){
    let ele = document.getElementById("hA");
    let par = document.createElement("p");
    let text = document.createTextNode(num);
    par.appendChild(text);
    ele.appendChild(par);
    console.log(text);
}

function getValue(){
    var am1 = amount_in.value;
    return am1;
}

function stValue(){
    var em = exp_in.value;
    var tm = exp_text.value;
    console.log(em);
    addt(tm);
    adde(em);
    return em;
}

function showValue(){
    let as = getValue();
    let es = parseInt(0);
    console.log(as,'budget');
    for(let i = 0; i<l2 ; i++){
        es = parseInt(es + parseInt(expense[i]));

    }
    console.log(es,'expense');
    var bal = parseInt(as-es);
    var total = document.getElementById("p3");
    total.innerHTML="$"+bal;
    console.log(bal,'total');



}



function main(){
    var b = document.getElementById("calc"); // stores the value of input in b
    var am_value = 0;
    var e = document.getElementById("cale");
    var ex_value = 0;

    b.addEventListener('submit',function(event){
        event.preventDefault();
        var am = amount_in.value;
        if(am ==='' || am < 0){
            { am_fdbk.classList.add("show");
            am_fdbk.innerHTML='<p> you cant leave it blank or add negative value </p>';

            setTimeout(function(){
                am_fdbk.classList.remove("show");
               },1000);
            }
        }
        else{
            am_value=getValue();
            var dol_am = document.getElementById("p1");
            dol_am.innerHTML="$"+am_value;
            showValue();
        }
    });

    e.addEventListener('submit',function(event){
        event.preventDefault();
        var em0 = exp_in.value;
        var tm0 = exp_text.value;
        if(em0 ==='' || tm0 ==='' ||em0<0){
            var tex = "can't leave the fields empty or negative";
            alert(tex);
        }
        else{
        ex_value=stValue();
        expense.push(ex_value);
        console.log(expense);
        let e1=0;
        var ep_am = document.getElementById("p2");
        for(let i = 0; i<l1 ; i++){
            e1 = parseInt(e1 + parseInt(expense[i]));

        }
        ep_am.innerHTML="$"+e1;
        l2++;
        l1++;
        showValue();

    }

    });
    showValue();
};


main();

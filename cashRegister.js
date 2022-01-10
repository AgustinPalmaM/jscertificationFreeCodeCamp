// Cash Register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
    let saldoCaja = 0;
    let change = cash - price;
    let changeTwo = cash - price;
    changeTwo = changeTwo.toFixed(2)
    let unidadMonetaria = {
        "PENNY":        0.01,
        "NICKEL":       0.05,
        "DIME":         0.1,
        "QUARTER":      0.25,
        "ONE":          1,
        "FIVE":         5,
        "TEN":          10,
        "TWENTY":       20,
        "ONE HUNDRED":  100
    }
    
    let caja = {}

    for (const i in cid) {
        caja[cid[i][0]] = cid[i][1];            
    }

    for (const i in caja) {
      saldoCaja += caja[i];
    }
    saldoCaja = saldoCaja.toFixed(2)


    // Cierre si saldo caja es menor al cambio requerido
    if (change > saldoCaja) {
        return { status: "INSUFFICIENT_FUNDS", change: []}
    }
    // Funcion para redondear el cambio en funcion de los valores de las monedas
    function redon(num, mult) {
        return Math.floor(num / mult) * mult
    }
    saldoCaja
    
    change
    let arrChange = []
    if ((change / unidadMonetaria['ONE HUNDRED']) >= 1) {
        if (caja['ONE HUNDRED'] < change) {
            arrChange.push(['ONE HUNDRED', caja['ONE HUNDRED']])
            change -= caja['ONE HUNDRED']
        } else {
            arrChange.push(['ONE HUNDRED', redon(change, 100)])
            change -= redon(change, 100)
        }
        change = change.toFixed(2)
    }     

    if ((change / unidadMonetaria['TWENTY']) >= 1) {
        if (caja['TWENTY'] < change) {
            arrChange.push(['TWENTY', caja['TWENTY']])
            change -= caja['TWENTY']
        } else {
            arrChange.push(['TWENTY', redon(change, 20)])
            change -= redon(change, 20)
        }
        change = change.toFixed(2)
    } 

    if ((change / unidadMonetaria['TEN']) >= 1) {
        if (caja['TEN'] < change) {
            arrChange.push(['TEN', caja['TEN']])
            change -= caja['TEN']
        } else {
            arrChange.push(['TEN', redon(change, 10)])
            change -= redon(change, 10)
        }
        change = change.toFixed(2)
    } 
    
    if ((change / unidadMonetaria['FIVE']) >= 1) {
        if (caja['FIVE'] < change) {
            arrChange.push(['FIVE', caja['FIVE']])
            change -= caja['FIVE']
        } else {
            arrChange.push(['FIVE', redon(change, 5)])
            change -= redon(change, 5)
        }
        change = change.toFixed(2)
    }

    if ((change / unidadMonetaria['ONE']) >= 1) {
        if (caja['ONE'] < change) {
            arrChange.push(['ONE', caja['ONE']])
            change -= caja['ONE']
        } else {
            arrChange.push(['ONE', redon(change, 1)])
            change -= redon(change, 1)
        }
        change = change.toFixed(2)
    }

    if ((change / unidadMonetaria['QUARTER']) >= 1) {
        if (caja['QUARTER'] < change) {
            arrChange.push(['QUARTER', caja['QUARTER']])
            change -= caja['QUARTER']
        } else {
            arrChange.push(['QUARTER', redon(change, 0.25)])
            change -= redon(change, 0.25)
        }
        change = change.toFixed(2)
    }

    if ((change / unidadMonetaria['DIME']) >= 1) {
        if (caja['DIME'] < change) {
            arrChange.push(['DIME', caja['DIME']])
            change -= caja['DIME']
        } else {
            arrChange.push(['DIME', redon(change, 0.1)])
            change -= redon(change, 0.1)
        }
        change = change.toFixed(2)
    }

    if ((change / unidadMonetaria['NICKEL']) >= 1) {
        if (caja['NICKEL'] < change) {
            arrChange.push(['NICKEL', caja['NICKEL']])
            change -= caja['NICKEL']
        } else {
            arrChange.push(['NICKEL', redon(change, 0.05)])
            change -= redon(change, 0.05)
        }
        change = change.toFixed(2)
    }

    if ((change / unidadMonetaria['PENNY']) >= 1) {
        if (caja['PENNY'] < change) {
            arrChange.push(['PENNY', caja['PENNY']])
            change -= caja['PENNY']
        } else {
            arrChange.push(['PENNY', redon(change, 0.01)])
            change -= redon(change, 0.01)
        }
        change = change.toFixed(2)
    }

    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: []}
    }

 

    let arrCaja = []
    for (const i in caja) {
       arrCaja.push([i, caja[i]])
    }
    arrCaja

    if (saldoCaja === changeTwo) {
        return {status: "CLOSED", change: arrCaja}
        
    } else {
        return {status: "OPEN", change: arrChange}
    }
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


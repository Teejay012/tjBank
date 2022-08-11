console.log('hello')

const withdrawInputValue = document.getElementById('withdrawInput')

const withdrawButton = document.getElementById('withdrawButton')

const depositButton = document.getElementById('depositButton')

const balanceResult = document.getElementById('balance')


class Bank{
    constructor(balance){
        this.balance = balance
    }
    withdraw(amount){
        if((this.balance - amount) <=0){
            alert('Insufficient fund')
            return
        }
        this.balance -= amount
        console.log(`balance: ${this.balance}`)
    }
    deposit(amount){
        this.balance += amount
        console.log(`balance: ${this.balance}`)
    }
}

const digitResult = document.getElementById('digits')

const me = new Bank(0)

    // colect withdrawInput
    // withdraw(amount)
    // console.log(me.withdraw(200))
    depositButton.onclick = () => {
        me.deposit(Number(withdrawInputValue.value))
        digitResult.innerText = `#${me.balance}`
}

    withdrawButton.onclick = () => {
        me.withdraw(Number(withdrawInputValue.value))
        digitResult.innerText = `#${me.balance}`
    }
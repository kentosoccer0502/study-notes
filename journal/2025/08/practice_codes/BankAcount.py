CHARGE_OF_DEPOSIT: int = 100
RATE_OF_WITHDRAW: float = 0.20
TRANSFER_AMOUNT_PER_DAY: float = 0.25
CHARGE_LINE: int = 20000

class BankAccount:
    def __init__(self, bankName: str, ownerName: str, savings: int):
        self.bankName = bankName
        self.ownerName = ownerName
        self.savings = savings
        self.next = None

    def depositMoney(self, depositAmount: int) -> int:
        if self.savings < CHARGE_LINE:
            self.savings = int(self.savings + depositAmount - CHARGE_OF_DEPOSIT)
        else:
            self.savings = int(self.savings + depositAmount)
        return self.savings
    
    def withdrawMoney(self, withdrawAmount: int) -> int:
        if withdrawAmount > self.savings * RATE_OF_WITHDRAW:
            self.savings = int(self.savings - self.savings * RATE_OF_WITHDRAW)
        else:
            self.savings = int(self.savings - withdrawAmount)
        return self.savings
    
    def pastime(self, days: int) -> float:
        self.savings += days * TRANSFER_AMOUNT_PER_DAY
        return self.savings


user1 = BankAccount("Chase", "Claire Simmmons", 30000)
print(user1.withdrawMoney(2000))
print(user1.depositMoney(10000))
print(user1.pastime(93))

user2 = BankAccount("Bank Of America", "Remy Clay", 10000)
print(user2.withdrawMoney(5000))
print(user2.depositMoney(12000))
print(user2.pastime(505))

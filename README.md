# Javascript1_vyplnorez

*Napište funkci, která ořízne nebo prodlouží řetězec.*

- Napište funkci `fillcut`, která jako svůj první parametr `str` očekává řetězec a jako druhý parametr `len` kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně `len`.
- Pokud je vstupní řetězec delší než `len`, tak funkce odřízne jeho konec a vrátí výsledek.
- Pokud je vstupní řetězec kratší než `len`, tak jej doplní od začátku znakem tečky a vrátí výsledek.
- Pokud je vstupní řetězec dlouhý přesně `len`, funkce jej vrátí beze změny.

Příklad použití:

```
document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“
```




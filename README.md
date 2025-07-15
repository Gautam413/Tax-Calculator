# Tax-Calculator
A website that allows for tax calculation based on a users input.

# References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Error will be shown if the user does not input a number or leave the text field empty in the form of text fields turning red.
# Demo
![image](https://github.com/Gautam413/Tax-Calculator/assets/67970947/092124b7-46bc-46a5-b4b1-e501880cbf99)
![image](https://github.com/Gautam413/Tax-Calculator/assets/67970947/c58f70dc-0742-476c-bdba-58dab6aa9b22)
![image](https://github.com/Gautam413/Tax-Calculator/assets/67970947/d99008f3-10f6-456a-8e70-1e8224a91b0a)

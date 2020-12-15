# Code Block

Settings for generate different functions Code Blocks

## Code Example

### Block Content

<pre>
```
## This is the content
```
</pre>

Will results:

```
## This is the content
```

### Syntax Highlight

Add languages after ` ``` `

<pre>
```javascript
document.getElementById('demo').innerHTML = 'Hello JavaScript';
```
</pre>

Will results:

```javascript
document.getElementById("demo").innerHTML = "Hello JavaScript";
```

### Display Line Numbers

Line Numbers are not displayed by default.

Use `linenos` in parameters.

<pre>
```javascript {linenos=true}
document.getElementById('demo').innerHTML = 'Hello JavaScript';
```
</pre>

Will results:

```javascript {linenos=true}"
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").innerHTML = "Hello JavaScript";
```

### Change Starting Line Number

Use `linenostart` in parameters.

<pre>
```python {linenos=true,linenostart=13}
class BankAccount(object):
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def overdrawn(self):
        return self.balance < 0
my_account = BankAccount(15)
my_account.withdraw(50)
print (my_account.balance, my_account.overdrawn())
```
</pre>

Will results:

```python {linenos=true,linenostart=13}
class BankAccount(object):
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def overdrawn(self):
        return self.balance < 0
my_account = BankAccount(15)
my_account.withdraw(50)
print (my_account.balance, my_account.overdrawn())
```

### Highlight Certain Lines

Use `hl_lines=` in parameters.

<pre>
```ts {linenos=true,hl_lines=[3,"8-10"]}
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
</pre>

Will results:

```ts {linenos=true,hl_lines=[3,"8-10"]}
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
```

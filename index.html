<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tablette RP</title>
  <style>
    body { margin:0; font-family: Arial, sans-serif; background:#1a1a1a; color:#000; }
    .center { display:flex; justify-content:center; align-items:center; height:100vh; }
    .card { background:#fff; padding:20px; border-radius:12px; box-shadow:0 5px 20px rgba(0,0,0,0.3); }
    button { padding:10px; margin:5px; border:none; border-radius:8px; cursor:pointer; }
    .grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
    .hidden { display:none; }
    .secret { border:2px solid red; margin-top:10px; }
    .transactions { max-height:150px; overflow-y:auto; font-size:14px; }
  </style>
</head>
<body>

<div id="login" class="center">
  <div class="card">
    <h2>Connexion</h2>
    <input type="password" id="code" placeholder="Code" />
    <br><br>
    <button onclick="login()">Se connecter</button>
  </div>
</div>

<div id="app" class="hidden" style="padding:20px;">
  <div class="card">
    <h2 onclick="secretClick()" style="cursor:pointer">TABLETTE BANCAIRE</h2>
    <p id="balance"></p>
  </div>

  <div class="grid">
    <button onclick="addTransaction(500)">+500</button>
    <button onclick="addTransaction(-200)">-200</button>
  </div>

  <div class="card">
    <h3>Transactions</h3>
    <div id="transactions" class="transactions"></div>
  </div>

  <div id="secret" class="card secret hidden">
    <h3 style="color:red">ACCÈS CACHÉ</h3>
    <p>Données sensibles disponibles</p>
    <button onclick="addTransaction(10000)">Blanchir +10 000$</button>
  </div>
</div>

<script>
let balance = parseInt(localStorage.getItem('balance') || '12500');
let transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
let clickCount = 0;

function login() {
  const code = document.getElementById('code').value;
  if (code === '1234') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').classList.remove('hidden');
    updateUI();
  }
}

function updateUI() {
  document.getElementById('balance').innerText = 'Solde : ' + balance + ' $';
  const list = document.getElementById('transactions');
  list.innerHTML = '';
  transactions.forEach(t => {
    const div = document.createElement('div');
    div.innerText = (t.amount > 0 ? '+' : '') + t.amount + ' $ - ' + t.date;
    list.appendChild(div);
  });
}

function addTransaction(amount) {
  balance += amount;
  transactions.unshift({ amount: amount, date: new Date().toLocaleString() });
  localStorage.setItem('balance', balance);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  updateUI();
}

function secretClick() {
  clickCount++;
  if (clickCount >= 5) {
    document.getElementById('secret').classList.remove('hidden');
    clickCount = 0;
  }
}
</script>

</body>
</html>

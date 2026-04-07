import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TabletteRP() {
  const [logged, setLogged] = useState(false);
  const [code, setCode] = useState("");
  const [balance, setBalance] = useState(() => {
    return parseInt(localStorage.getItem("balance") || "12500");
  });
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions") || "[]");
  });
  const [secretOpen, setSecretOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const login = () => {
    if (code === "1234") setLogged(true);
  };

  const addTransaction = (amount) => {
    setBalance(balance + amount);
    setTransactions([
      { amount, date: new Date().toLocaleString() },
      ...transactions,
    ]);
  };

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setSecretOpen(true);
      setClickCount(0);
    }
  };

  if (!logged) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <Card className="p-6">
          <CardContent>
            <h1 className="text-xl mb-4">Connexion</h1>
            <input
              type="password"
              placeholder="Code"
              className="border p-2 w-full mb-4"
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={login}>Se connecter</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100 p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="mb-4">
          <CardContent>
            <h2
              className="text-lg font-bold cursor-pointer"
              onClick={handleSecretClick}
            >
              TABLETTE BANCAIRE
            </h2>
            <p>Solde : {balance} $</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <Button onClick={() => addTransaction(500)}>+500</Button>
          <Button onClick={() => addTransaction(-200)}>-200</Button>
        </div>

        <Card>
          <CardContent>
            <h3 className="mb-2">Transactions</h3>
            <div className="max-h-40 overflow-y-auto">
              {transactions.map((t, i) => (
                <div key={i} className="text-sm border-b py-1">
                  {t.amount > 0 ? "+" : ""}
                  {t.amount} $ - {t.date}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {secretOpen && (
          <Card className="mt-4 border-red-500 border-2">
            <CardContent>
              <h3 className="text-red-500">ACCÈS CACHÉ</h3>
              <p>Données sensibles disponibles</p>
              <Button onClick={() => addTransaction(10000)}>
                Blanchir +10 000$
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}

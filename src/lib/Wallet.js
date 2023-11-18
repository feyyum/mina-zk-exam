async function connectWallet() {
  if (typeof window.mina == "undefined") {
    console.log("Auro Wallet is NOT installed!");
    return;
  }

  const account = await window.mina
    .requestAccounts()
    .catch((err) =>
      console.log("Error occured while connectiong wallet!", err)
    );

  return account;
}

export { connectWallet };

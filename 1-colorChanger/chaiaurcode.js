const giveColor = (e) => {
  const target = e.target || e;
  document.body.style.backgroundColor = target.id;
};
